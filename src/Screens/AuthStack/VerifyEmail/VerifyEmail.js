import { StyleSheet, View, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'
import { Button, Text, useTheme, Surface, HelperText } from 'react-native-paper'

import { sendVerifyEmail } from '../../../services/authService'


import auth from '@react-native-firebase/auth'

const VerifyEmail
    = ({ navigation }) => {

        const { colors } = useTheme();
        const styles = customStyles(colors)
        const email = auth().currentUser?.email;

        const [countdown, setCountdown] = React.useState(30);
        const [isCountdown, setIsCountdown] = React.useState(false);
        const [isLoading, setIsLoading] = React.useState(false);


        function countdownTimer() {
            setIsCountdown(true);
            const interval = setInterval(() => {
                setCountdown(countdown => countdown - 1);
            }, 1000);
            setTimeout(() => {
                clearInterval(interval);
                setIsCountdown(false);
                setCountdown(30);
            }, 30000);
        }

    handleButtonLogin = async() => {
        setIsLoading(true);
        auth().currentUser.reload()
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }



        return (
            <>
                <SafeAreaView style={{ flex: 1 }} >
                    <ScrollView contentContainerStyle={{ justifyContent: 'center', flexGrow: 1 }} >
                        <View style={{ maxWidth: 600, flex: 1, alignSelf: 'center', flexDirection:'column', justifyContent:'center', alignContent: 'center' }} >
                            <Surface style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: colors.background, marginVertical: 20, marginHorizontal:20, paddingTop: 10, elevation: 1, borderRadius: 30 }}>
                                <SafeAreaView >
                                    <View style={styles.container}>
                                        <Image source={require('../../../assets/images/open-mail.png')} style={{ width: 120, height: 120, alignSelf: 'center', marginVertical: 40 }} />
                                        <Text variant="headlineMedium" style={{ alignSelf: 'center' }}>Cek Email</Text>
                                        <Text variant="bodyLarge" style={{ marginTop: 10, marginBottom: 10, textAlign: 'center' }}>Kami telah mengirimkan link verifikasi ke email <Text style={{ fontWeight: 'bold' }}>{email ? email : 'Anda'}</Text>. {'\n'} Verifikasi lalu login :</Text>
                                        <Button 
                                            mode='contained'
                                            loading= {isLoading}
                                            style={{
                                                borderColor: colors.primary, borderWidth: 1,
                                                borderRadius: 10, marginVertical: 10,
                                                marginHorizontal: 20,
                                                maxWidth: 300, minWidth: 240,
                                                // flex: 1
                                                alignSelf:'center'
                                            }}
                                            icon='login'
                                            onPress={() => {
                                                handleButtonLogin()
                                                }
                                            }>
                                            Login
                                        </Button>
                                    
                                        <View style={{ alignItems: 'center', marginTop:10 }}>
                                            <Text variant="bodyLarge" style={{ marginTop: 0 }}>Belum menerima email?</Text>
                                            <View style={{ flexDirection: 'row', flex: 1 }}>
                                                <Button
                                                    mode='text'
                                                    style={{
                                                        marginHorizontal: 10,
                                                        flex: 1
                                                    }}
                                                    contentStyle={{ color: colors.primary, flexDirection: 'row-reverse' }}
                                                    textColor={colors.primary}
                                                    disabled={isCountdown}

                                                    onPress={() => {
                                                        sendVerifyEmail()
                                                        countdownTimer()
                                                    }

                                                    }>
                                                    Kirim ulang
                                                </Button>
                                            </View>
                                            <View style={{height:36}}> 

                                            {isCountdown &&
                                                <HelperText type='indo' style={{ marginBottom: 10, textAlign: 'center' }}>
                                                    Tunggu {countdown} detik untuk kirim ulang.
                                                </HelperText>
                                            }
                                            </View>
                                        </View>
                                    </View>
                                </SafeAreaView>
                            </Surface>
                        </View>
                    </ScrollView>
                </SafeAreaView>

            </>

        )
    }

export default VerifyEmail


const customStyles = (colors) => StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
    },

})