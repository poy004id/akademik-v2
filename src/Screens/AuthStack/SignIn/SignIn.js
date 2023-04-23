import { StyleSheet, View, ScrollView, KeyboardAvoidingView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Text, TextInput, useTheme } from 'react-native-paper'
import FullWidthLayout from '../../../layouts/FullWidthLayout'
import ProviderLoginComponent from '../../../components/ProviderLoginComponent'
import useSignIn from './useSignIn';




const SignIn = ({navigation}) => {
  const {colors, dark} = useTheme()
  const {
            signIn,
            isLoading, 
            error, 
            emailRef, 
            passwordRef, 
            email,
            password,
            loading,
            isSecure,
            setIsSecure,
            setEmail,
            setPassword,
            setLoading,
            setError
  } = useSignIn()
  const handleQRCodePress = (event) => {
    event.preventDefault(); // prevent default behavior of TextInput.Icon
    // handle QR code icon press here
    console.log('QR code icon pressed');
  };

  return (
    <FullWidthLayout>
    <ScrollView 
      contentContainerStyle={{justifyContent:'center', flexGrow:1, padding:30, backgroundColor:colors.background}} 
      showsVerticalScrollIndicator={false}
      automaticallyAdjustKeyboardInsets={true}
      automaticallyAdjustContentInsets ={true}
      // keyboardDismissMode="on-drag"
      keyboardShouldPersistTaps="handled"
      contentInsetAdjustmentBehavior="always"

    >
      <Image
        source={ dark ? require('../../../assets/images/logo_ugm_putih.png') : require('../../../assets/images/logo_ugm_hitam.png')}
        style={{width: 100, height: 100, alignSelf:'center', marginBottom:10}}
      />
      <Text variant='headlineSmall' style={{alignSelf:'center'}}>Akademik</Text>
      <Text variant='bodyLarge'  style={{alignSelf:'center', marginBottom:20}}>Universitas Gadjah Mada</Text>
      <TextInput 
        left={<TextInput.Icon size={18} icon={'email'} />}
        mode='outlined'
        label="Email" 
        style={styles.textInput}
        value={email}
        placeholder='nama@domain.com'
        onChangeText={(text)=> setEmail(text)}
        ref={emailRef}
        onSubmitEditing={()=> passwordRef.current.focus()}
        outlineStyle={{borderRadius:15}}
      />
      <TextInput 
        left={<TextInput.Icon size={18} icon={'lock'} />}
        mode='outlined'
        outlineStyle={{borderRadius:15}}
        placeholder='Minimal 6 karakter'
        value={password}
        label="Password"  
        style={styles.textInput}
        onChangeText={(text)=> setPassword(text)}
        ref={passwordRef}
        secureTextEntry={isSecure}

        right={
          <TextInput.Icon icon={isSecure? 'eye-off': 'eye'} size={18} 
            forceTextInputFocus={false}
            onPress={()=>
              setIsSecure(!isSecure)
              // console.log('show password')
            }/>

        }
      />

      <TextInput
        mode='outlined'
        label="Kode Akses"
        style={styles.textInput}
        outlineStyle={{borderRadius:15}}
        right={
          <TextInput.Icon icon={'qrcode'} size={18}
            // forceTextInputFocus={false}
            onPress={console.log('QR code icon pressed')
            }/>

        }

      />


      <View style={styles.loginProvider}>
        <Button 
          mode='contained'
          onPress={()=> signIn(email, password)}
          style={{borderRadius:15, marginTop:20, marginBottom:16}}
          contentStyle={{height:48}}
          icon={'login'}
        > Sign In</Button>
        <ProviderLoginComponent />
      </View>

    </ScrollView>
    </FullWidthLayout>
  )
}

export default SignIn

const styles = StyleSheet.create({
  textInput: {
    marginVertical: 10,
    textAlign:'auto'
  },
  loginProvider: {
    maxWidth: 220,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
})