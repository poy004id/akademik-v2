import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useTheme, IconButton, Button } from 'react-native-paper'
import dayjs from '../../utils/dayjs'
import DAYJS from 'dayjs'
export const TestScreenOptions = ({navigation})=> ({
  headerRight: () => (
    <IconButton
      icon="bell"
      color='red'
      size={24}
      onPress={() => {console.log('Custom action button pressed'); navigation.navigate('Test2')}}
    />
  ),
});
const Test = ({navigation}) => {
    const {colors} = useTheme()
    const [count, setCount] = React.useState(0);

    const today = dayjs().format('YYYY-MM-DD HH:mm:ss')
    console.log('today', dayjs.tz(today))
    console.log('just todat', today)
  console.log('TODAY', DAYJS())

    console.log('today in test', dayjs.tz(today).format('YYYY-MM-DD HH:mm:ss'))
    
    
  return (
    <View style={{justifyContent:'center', flex:1, backgroundColor:colors.background}}>
      <Text> Test</Text>
      <Button onPress={()=>navigation.navigate('Home')}>Go to Home</Button>
      <Button onPress={()=>navigation.navigate('Test2')}>Go to Test2</Button>
    </View>
  )
}

export default Test;

const styles = StyleSheet.create({})