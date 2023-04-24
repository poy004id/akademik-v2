// create forgot Pasford COmponent
import React from 'react'
import { View, SafeAreaView,StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { TextInput, Button, Text, Paragraph, Dialog , useTheme} from 'react-native-paper'
import {resetPassword} from '../../service/firebase/auth'
import FAIcon from 'react-native-vector-icons/FontAwesome';
// import Lottie from 'lottie-react-native';

const ForgotPassword =({navigation})=>{
    const {colors} = useTheme();
    const styles = customStyles(colors);
    const [email, setEmail] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [isValidated, setIsValidated] = React.useState(false);

    // const handleForgotPassword = async () => {
    //     setIsValidated(true);
    //     if (email === '') return;
    //     setLoading(true);
    //     try {
    //         const data= await resetPassword(email).then((data)=>{
    //             return data;
    //         })
    //         setLoading(false);
    //         navigation.navigate('EmailVerification',{email:email});
    //     } catch (error) {
    //         setLoading(false);
    //         alert(error.message);
    //     }
    // }
    
    return (
<SafeAreaView style={{backgroundColor: colors.primary, flex:1}}> 
    <ScrollView 
        contentContainerStyle={{justifyContent:'center', flexGrow:1}}>
        <View style={{justifyContent:'center',  alignItems:'center', flexDirection:'row' }}>
            <View style={{ maxWidth:600, flex:1}} >

                <View style={styles.form}>
                    {/* <Lottie source={require('../../../asset/lottie/forget-password.json')} autoPlay loop style={{  height:160, alignSelf: 'center', marginVertical:10}} /> */}
                    <View style={{marginVertical:10}}>
                        <Text variant="headlineMedium" style={{marginTop:10, alignSelf:'center'}}>Lupa Password? </Text>
                        <Text variant="bodyLarge" style={{marginTop:10, textAlign:'center'}}>Masukan email anda untuk mereset password</Text>
                        <TextInput
                            mode="outlined"
                            label="Email"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            left={<TextInput.Icon size={18} icon="email" />}
                            theme={{ roundness: 15 }}
                            style={{ marginBottom: 20, marginTop:10 }}
                            error={isValidated && email === ''}
                            right={ isValidated&& email===''&&<TextInput.Icon size={18} icon="alert-circle-outline"  iconColor={colors.error} />}
                        />

                        <Button mode="contained"
                            onPress={ ()=>handleForgotPassword()}
                            style={{ marginHorizontal: 20,  marginTop: 10, marginBottom: 30, borderRadius:15,  }}
                            contentStyle={{paddingVertical:5}}
                            labelStyle={{ fontSize: 16}}
                            loading={loading}
                            icon= {()=> <FAIcon name="paper-plane" size={18} color={colors.background}/>}
                        > 
                        {!loading && <FAIcon icon="paper-plane" size={18} color="white" /> }
                        Kirim email 
                        </Button>
                        {/* <Text onPress={() => navigation.navigate('EmailVerification',{email:email})} style={{ alignSelf: 'center', color: colors.primary, fontSize: 16, textDecorationLine: 'underline' }}>email EmailVerification</Text> */}
                    </View>
                </View>
            </View>
        </View>
    </ScrollView>
</SafeAreaView>
    )
}
export default ForgotPassword
const customStyles = (colors) => StyleSheet.create({
    form : {
        paddingHorizontal: 30 , 
        backgroundColor:colors.background, 
        marginHorizontal:20, 
        marginVertical:20, 
        borderRadius:50, 
        paddingVertical:20,
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    provider: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%',
        marginTop: 20,
        marginBottom:30
    },
});