import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {TextInput, Button, useTheme} from 'react-native-paper'
import BaseLayout from '../../../layouts/BaseLayout'

const PersonalData = () => {
    const {colors} = useTheme()
  return (
    <BaseLayout>
        <View>
            <TextInput
                label="Nama Lengkap"
                mode="outlined"
                style={{marginBottom: 10}}
            />
            <TextInput
                label="NIK"
                mode="outlined"
                style={{marginBottom: 10}}
            />
            <TextInput
                label="Tanggal Lahir"
                mode="outlined"
                style={{marginBottom: 10}}
            />
        </View>
    </BaseLayout>

  )
}

export default PersonalData

const styles = StyleSheet.create({})