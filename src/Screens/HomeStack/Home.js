import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useTheme, IconButton, Button } from 'react-native-paper'

export const HomeScreenOptions = ({navigation})=> ({
  headerRight: () => (
    <IconButton
      icon="bell"
      iconColor={useTheme().colors.onPrimary}
      // iconColor='red'
      size={24}
      onPress={() => {console.log('Custom action button pressed'); navigation.navigate('Test')}}
    />
  ),
});

const Home = ({navigation}) => {
    const {colors} = useTheme()
    const [count, setCount] = React.useState(0);
    
    console.log('count in Home', count)

  return (
    <View style={{justifyContent:'center', flex:1, backgroundColor:colors.background}}>
      <Text>Home</Text>
      <Button onPress={()=>navigation.navigate('Test')}>Go to Test</Button>
      <Button onPress={()=>navigation.navigate('Test2')}>Go to Test2</Button>
      <Button onPress={()=>navigation.navigate('Test3')}>Go to Test3</Button>
      <Button onPress={()=>navigation.navigate('TestRedux')}>Go to Test Redux</Button>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({})