import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useTheme, IconButton, Button } from 'react-native-paper'

const Test2 = ({navigation}) => {
    const {colors} = useTheme()
    const [count, setCount] = React.useState(0);
    
    console.log('count in Test2', count)
  //   useEffect(() => {
  //     setCount(count + 1)
  //     navigation.setOptions({
  //         headerRight: () => (
  //             <IconButton
  //                 icon="bell"
  //                 iconColor='blue'
  //                 size={20}
  //                 // onPress={() => console.log('Custom action button pressed')}
  //             />
  //         ),
  //       })
  // }, [])
  return (
    <View style={{justifyContent:'center', flex:1, backgroundColor:colors.background}}>
      <Text> Test2</Text>
      <Button onPress={()=>navigation.navigate('Home')}>Go to Home</Button>
      <Button onPress={()=>navigation.navigate('Test')}>Go to Test</Button>
    </View>
  )
}

export default Test2;

const styles = StyleSheet.create({})