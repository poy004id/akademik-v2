import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { IconButton, Button, Text, Divider, useTheme } from 'react-native-paper'
import { Image, TouchableOpacity } from 'react-native'
import FAIcon from 'react-native-vector-icons/FontAwesome5'
import { resetPassword } from '../../../services/authService'


const ResetPassword = ({ route, navigation }) => {
    const email = route?.params?.email;
    const { colors } = useTheme();
    const styles = customStyles(colors)

    const handleForgotPassword = async () => {
        if (email === '') return;
        try {
            const data = await resetPassword(email).then((data) => {
                console.log("data insite then", data)
                return data;
            })
            console.log("data hasil send email", data)

            navigation.navigate('ResetPassword', { email: email });
        } catch (error) {
            alert(error.message);
        }
    }



    return (
        <>
            <SafeAreaView style={{  flex: 1 , backgroundColor:colors.background}} >
                <ScrollView contentContainerStyle={{ justifyContent: 'center', flexGrow: 1 }} >
                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' , backgroundColor:colors.background}}>
                        <View style={{ maxWidth: 600, flex: 1 }} >
                            <SafeAreaView style={styles.form}>
                                <View style={styles.container}>
                                    <Image source={require('../../../assets/images/inbox.png')} style={{ width: 140, height: 140, alignSelf: 'center', marginVertical: 20 }} />
                                    <Text variant="headlineSmall" style={{ alignSelf: 'center' }}>Cek email!</Text>
                                    <Text variant="bodyLarge" style={{ marginTop: 10 , textAlign:'justify'}}>Kami telah mengirimkan instruksi reset password ke email <Text style={{ fontWeight: 'bold' }}>{email && email}</Text>. Silakan cek folder inbox maupun spam.</Text>

                                    <Button mode="contained"
                                        onPress={() => navigation.navigate('SignIn')}
                                        style={{ marginBottom: 10, marginTop:20, borderRadius: 15, width:200, alignSelf:'center' , marginHorizontal: 20 }}
                                        contentStyle={{ paddingVertical: 5 }}
                                        labelStyle={{ fontSize: 16 }}
                                        icon={() => <FAIcon icon="paper-plane" size={18} />}
                                    >
                                        Kembali ke SignIn
                                    </Button>
                                    {/* <Divider style={{}} /> */}
                                    <View style={{ alignItems: 'center' }}>
                                        <Text variant="bodyLarge" style={{ marginTop: 10 }}>Belum menerima email?</Text>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Button
                                                onPress={() => navigation.navigate('ForgotPassword')}
                                                >
                                                Kirim ulang
                                            </Button>
                                        </View>
                                    </View>
                                </View>
                            </SafeAreaView>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>

        </>

    )
}

export default ResetPassword;

const customStyles = (colors) => StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
    },

})