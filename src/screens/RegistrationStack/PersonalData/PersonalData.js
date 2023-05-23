import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput, RadioButton, useTheme, Button} from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { DatePickerModal } from 'react-native-paper-dates'

import { setPersonNm , setPersonExtId, setAddress, setDob, setGender, setPassPhoto, setVaccineCertificate} from '../../../redux/features/personalData'
import BaseLayout from '../../../layouts/BaseLayout'
import dayjs from '../../../utils/dayjs'
import { NavigationContainer } from '@react-navigation/native'
const PersonalData = ({navigation}) => {
  const {colors} = useTheme()
  const styles = customStyles(colors)
  const dispatch = useDispatch()


console.log('dayjs', dayjs())
  const today = dayjs().format('YYYY-MM-DD HH:mm:ss')
  const todayInNewYork =  dayjs.tz(today, 'America/New_York').format('YYYY-MM-DD HH:mm:ss')
  console.log('today', today)
  console.log('todayInNewYork', todayInNewYork)
  const {personalData} = useSelector(state => state)
  console.log('personalData', personalData)
  return (
    // <View style={styles.container}>
      <BaseLayout>
        <ScrollView>
          <Text>PersonalData</Text>
          <TextInput
            label="Nama Lengkap"
            mode="outlined"
            style={styles.textInput}
            outlineStyle={styles.borderRadius}
            value={personalData.personNm}
            onChangeText={(text) => dispatch(setPersonNm(text))}
          />
          <TextInput
            label="NIK"
            mode="outlined"
            style={styles.textInput}
            outlineStyle={styles.borderRadius}
            value={personalData.personExtId}
            onChangeText={(text) => dispatch(setPersonExtId(text))}

          />
          <View style={styles.formGroup}>
              <Text style={styles.label}>Jenis Kelamin</Text>
              <RadioButton.Group onValueChange={(value) => {dispatch(setGender(value)); console.log('value', value);}} 
                value={personalData.gender} 
                >
                  <View style={{flexDirection:'row'}}>
                    <RadioButton.Item label='Laki-laki' value="l" position='leading'
                      style={styles.radioButton}
                    />
                    <RadioButton.Item label='Perempuan' value="p" position='leading'
                      style={styles.radioButton}
                    />
                  </View>
              </RadioButton.Group>
          </View>
          {/* <DatePickerModal
            // locale="en"
            mode="single"
            visible={true}
            // onDismiss={onDismissSingle}
            date={today}
            // onConfirm={onConfirmSingle}
        /> */}
        <Button onPress={() => navigation.navigate('Test')} >Test</Button>

        </ScrollView>
    {/* </View> */}
    </BaseLayout>

  )
}

export default PersonalData

const customStyles = (colors) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
  },
  formGroup: { flexDirection: 'column', justifyContent: 'space-between', marginVertical: 10,  },
  textInput: {
    marginVertical: 10,
  },
  borderRadius: {
    borderRadius: 15,
  },
  label: {
    fontSize:12, color:colors.onBackground, marginBottom:5
  },
  radioButton: {
    borderRadius:10,
    paddingVertical: 0,
    paddingLeft: 5
  },

})