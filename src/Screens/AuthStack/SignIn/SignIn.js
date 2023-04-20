import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, TextInput, useTheme } from 'react-native-paper'

const SignIn = ({navigation}) => {
  const {colors} = useTheme()
    console.log('SignIn')
    const emailRef = React.useRef();
    const passwordRef = React.useRef();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');
    const [isSecure, setIsSecure] = React.useState(true);


  return (
    <View style={{padding:15}}>
      <Text>SignIn</Text>
      <TextInput 
        left={<TextInput.Icon size={18} icon={'email'} />}
        mode='outlined'
        label="Email" 
        style={styles.textInput}
        value={email}
        onChangeText={setEmail}
        ref={emailRef}
        onSubmitEditing={()=> passwordRef.current.focus()}
        outlineStyle={{borderRadius:15}}
      />
      <TextInput 
        left={<TextInput.Icon size={18} icon={'lock'} />}
        mode='outlined'
        outlineStyle={{borderRadius:15}}
        placeholder='Password rahasia yaaa'
        label="Password"  
        style={styles.textInput}
        value={password}
        onChangeText={setPassword}
        ref={passwordRef}
        onSubmitEditing={()=> console.log('login')}
        secureTextEntry={isSecure}
        right={
          <TextInput.Icon icon={isSecure? 'eye-off': 'eye'} size={18} onPress={()=> setIsSecure(!isSecure)}/>
        }

      />
      <TextInput
        mode="outlined"
        label="Password"
        value={password}
        numberOfLines={1}
        secureTextEntry={isSecure}
        outlineStyle={{borderRadius:15}}
        onChangeText={(text) => {
            setPassword(text)
            // isShowError && setIsShowError(false)
        }}
        left={<TextInput.Icon size={18} icon={'lock'} />}
        right={ 
            <TextInput.Icon size={18} onPress={() => {
                    setIsSecure(!isSecure);
                    return false;
                    }}
                icon={isSecure ? "eye-off" : "eye"} />
            } //onpress to show password
        theme={{ roundness: 15 }}
        style={{marginVertical:10, backgroundColor:colors.elevation.level2}}
        // error={isErrorInput('password',apiStatus)&& isShowError}
    />
      <Button 
        mode='contained'
        onPress={()=> console.log('login')}
        style={{borderRadius:15, marginVertical:10}}
        contentStyle={{height:48}}
      > Sign In</Button>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
  textInput: {
    marginVertical: 10,
  },
})