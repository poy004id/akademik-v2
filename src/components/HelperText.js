import { StyleSheet, View } from 'react-native'
import {Text, useTheme} from 'react-native-paper'
import React from 'react'


const HelperText = ({children}) => {
    const {colors} = useTheme();
  return (
    <View style={{flexDirection:'row', paddingLeft:20}}>
      <Text variant='labelMedium' style={{color:colors.error, alignSelf:'flex-start', lineHeight:13,
       marginTop:1, marginBottom:4, paddingTop:0
      }}>
        {children}</Text>
    </View>
  )
}

export default HelperText;

const styles = StyleSheet.create({})