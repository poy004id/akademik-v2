import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Portal } from 'react-native-paper'

const SplashScreen = () => {
  return (
    <Portal>
    <View style ={{flex:1, backgroundColor:'red'}}>
      <Text>SplashScreen</Text>
    </View>
    </Portal>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})