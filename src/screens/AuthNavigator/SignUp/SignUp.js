import { StyleSheet, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Text, TextInput, useTheme } from 'react-native-paper'
import FullWidthLayout from '../../../layouts/FullWidthLayout'
import ProviderLoginComponent from '../../../components/ProviderLoginComponent'
import FormContainer from '../../../components/FormContainer'
import useSignUp from './useSignUp';
import HelperText from '../../../components/HelperText'

const SignUp = ({navigation}) => {
  const {colors, dark} = useTheme()
  const styles = customStyles(colors)
  const {
            signUp,
            isLoading, 
            error, 
            emailRef, 
            passwordRef, 
            scrollViewRef,
            email,
            password,
            loading,
            isSecure,
            emailError,
            passwordError,
            setEmailError,
            setPasswordError,
            setIsSecure,
            setEmail,
            setPassword,
            setLoading,
            setError
  } = useSignUp()

  return (
    <FullWidthLayout>
      <View style={{flex:1}}> 
    <ScrollView 
      contentContainerStyle={{
        justifyContent:'center', 
        flexGrow:1,
        padding:20, backgroundColor:colors.background}} 
      showsVerticalScrollIndicator={false}
      automaticallyAdjustKeyboardInsets={true}
      automaticallyAdjustContentInsets={true}
      contentInsetAdjustmentBehavior="automatic"
      keyboardShouldPersistTaps="handled"
      
      ref={scrollViewRef}
      
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
        onChangeText={(text)=> {setEmail(text); emailError && setEmailError('')}} 
        ref={emailRef}
        onSubmitEditing={()=> passwordRef.current.focus()}
        outlineStyle={{borderRadius:15}}
      />
      {emailError && <HelperText>{emailError}</HelperText>}
      <TextInput 
        left={<TextInput.Icon size={18} icon={'lock'} />}
        mode='outlined'
        outlineStyle={{borderRadius:15}}
        placeholder='Minimal 6 karakter'
        value={password}
        label="Password"  
        style={styles.textInput}
        onChangeText={(text)=> {setPassword(text); passwordError && setPasswordError('')}}
        ref={passwordRef}
        secureTextEntry={isSecure}

        right={
          <TextInput.Icon icon={isSecure? 'eye-off': 'eye'} size={18} 
            forceTextInputFocus={true}
            onPress={()=>
              setIsSecure(!isSecure)
            }/>

        }
      />
      {passwordError&& <HelperText>{passwordError}</HelperText>}
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 10, marginTop:10, alignItems:'center' }}>
      </View>
      <View style={styles.loginProvider}>
        <Button 
          mode='contained'
          onPress={()=> signUp(email, password)}
          style={{borderRadius:15, marginTop:20, marginBottom:16}}
          contentStyle={{height:48}}
        > Sign Up</Button>
        <ProviderLoginComponent />
        <Text  variant="labelMedium" style={styles.registerText}>  Sudah punya akun?  <Text style={{color:colors.primary, fontWeight:'bold'}} onPress={()=> navigation.navigate('SignIn')}> Sign In</Text> </Text>
      </View>
    </ScrollView>
    </View>
    </FullWidthLayout>
  )
}

export default SignUp

const customStyles = (colors) => StyleSheet.create({
  textInput: {
    textAlign:'auto',
    // marginTop: 5,ff
    marginTop:10,
    marginBottom:5
  },
  loginProvider: {
    maxWidth: 200,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  helperText: {
    paddingLeft: 16,
    lineHeight:14,
    marginBottom:4
  },
  registerText:{
    marginBottom:20,
    alignSelf:'center',
},

})