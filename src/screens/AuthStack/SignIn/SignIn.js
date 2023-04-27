import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const SignIn = ({navigation}) => {
    console.log('SignIn')
  return (
    <View>
      <Text>SignIn</Text>
      <Button onPress={()=> navigation.navigate('SignUp')}> Sign Up</Button>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({})