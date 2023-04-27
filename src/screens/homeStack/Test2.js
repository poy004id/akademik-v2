import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useTheme, FAB, Button, TextInput } from 'react-native-paper'
import FullWidthLayout, {showSnackbar} from '../../layouts/FullWidthLayout'
import useSnackbar from '../../redux/features/snackbar/useSnackbar'

const Test2 = ({navigation}) => {
    const {colors} = useTheme()
    const {showSnackbar} = useSnackbar()
    console.log('count in Test2')
    const [text, setText]= React.useState('')
    
  return (
    <FullWidthLayout

      AppBody={
        <View style={{justifyContent:'center', flex:1, backgroundColor:'cyan'}}>
        <Text> Test2</Text>
        <TextInput
          label="Email"
          value={text}
          onChangeText={text => setText(text)}
        />
        
        <Button onPress={()=>navigation.navigate('Home')}>Go to Home</Button>
        <Button onPress={()=>navigation.navigate('Test')}>Go to Test</Button>
        <Button onPress={()=>showSnackbar('Test snackbartest 2')}>call Snackbar</Button>
      </View>
      }
      AppFAB={
      
        <>  
        <View>
          <FAB
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
          }}
          icon="plus"
          onPress={() => console.log('Pressed')}
        />
        </View>
        {/* <View>
                <FAB
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
          }}
          icon="plus"
          onPress={() => console.log('Pressed')}
        />
        </View> */}
        </>

      }
      AppFooter={
        <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:'pink'}}>
          <Button onPress={()=>navigation.navigate('Home')}>Go to Home</Button>
          <Button onPress={()=>navigation.navigate('Test')}>Go to Test</Button>
        </View>
      }
    
    >
      <View style={{justifyContent:'center', flex:1, backgroundColor:'cyan'}}>
        <Text> Test2</Text>
        <TextInput
          label="Email"
          value={text}
          onChangeText={text => setText(text)}
        />

        <Button onPress={()=>navigation.navigate('Home')}>Go to Home</Button>
        <Button onPress={()=>navigation.navigate('Test')}>Go to Test</Button>
        <Button onPress={()=>showSnackbar('Test snackbartest 2')}>call Snackbar</Button>
      </View>
    </FullWidthLayout>
  )
}

export default Test2;

const styles = StyleSheet.create({})