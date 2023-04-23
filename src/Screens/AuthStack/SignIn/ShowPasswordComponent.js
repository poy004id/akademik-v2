import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'

import { TextInput } from 'react-native-paper';
const ShowPasswordComponent = () => {
    const [isSecure, setIsSecure] = useState(true)
  return (
    <TextInput.Icon icon={isSecure? 'eye-off': 'eye'} size={18} 
            onPress={()=>setIsSecure(!isSecure)}/>
    
  )
}

export default ShowPasswordComponent;

const styles = StyleSheet.create({})