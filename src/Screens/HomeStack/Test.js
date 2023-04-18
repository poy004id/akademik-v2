import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useTheme, IconButton, Button } from 'react-native-paper'

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