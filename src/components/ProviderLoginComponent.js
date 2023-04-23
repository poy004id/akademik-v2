

import { StyleSheet,  View, SafeAreaView, Platform } from 'react-native'
import React from 'react'
// import { onGoogleLogin, onAppleLogin, GoogleLoginButton } from '../service/firebase/auth'
import { IconButton, useTheme, Divider, Button, Text } from 'react-native-paper'
import {useSelector} from 'react-redux'


const ProviderLoginComponent = () => {
    const {colors} = useTheme();
    const styles = customStyles(colors);
  return (
    <SafeAreaView>

    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginHorizontal:10}}>
        <Divider style={{ flex: 1, height: 1,  backgroundColor: colors.elevation.level2 }} horizontalInset={false}/>
        <Text variant='labelMedium' style={{ marginHorizontal: 8}}>Atau</Text>
        <Divider style={{ flex: 1, height: 1, backgroundColor: colors.elevation.level2 }} horizontalInset={false}/>
    </View>
    

        {Platform.OS == 'android' && 

            <Button mode="outlined"
                // onPress={() => { onGoogleLogin() }}
                style={styles.socialIcon}
                contentStyle={{ paddingVertical: 3 }}
                icon='google'
                // loading={googleLoginApi?.isLoading}
                >
                Sign in with Google
            </Button>

        }
        {Platform.OS == 'ios' &&
            <Button mode="outlined"
                // onPress={() => onAppleLogin()}
                style={styles.socialIcon}
                icon="apple"
                contentStyle={{ paddingVertical: 3}}
                // loading={appleLoginApi?.isLoading}
            >
                Sign In with Apple
            </Button>


        }
</SafeAreaView>
  )
}

export default ProviderLoginComponent

const customStyles = (colors) => StyleSheet.create({
    socialIcon: { backgroundColor: colors.onPrimary, 
        marginVertical: 20, 
        borderRadius: 15,
     }
})