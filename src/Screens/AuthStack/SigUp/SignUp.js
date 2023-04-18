import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
const SignUp = ({navigation}) => {
    console.log('SignUp')
  return (
    <View>
      <Text>SignUp</Text>
      <Button onPress={()=> navigation.navigate('SignIn')}> Sign in</Button>

    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({})