import { StyleSheet, Text, View , Alert} from 'react-native'
import React, { useEffect } from 'react'
import { useTheme, IconButton, Button } from 'react-native-paper'
import { useSelector, useDispatch } from 'react-redux';
import { setAlert, clearAlert } from '../../../redux/features/alert';
import useAlert from '../../../hooks/useAlert';


export const RegistrationScreenOptions = ()=> ({
    headerRight: () => (
      <IconButton
        icon="logout-variant"
        iconColor={useTheme().colors.onPrimary}
        size={22}
        onPress={() => {console.log('Custom action button pressed')}}
      />
    ),
  });

  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', `My Alert Msg but it is 
    so long long long 
    long text that even need multiple line to display. how long it will  until the paragraght automatically kfhkfh krghfkhm fhjfkhf  
     How it will look in ios`, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

const Registration = () => {
    const alert = useSelector(state=>state.alert)
    console.log ('alert', alert)
    const dispatch = useDispatch();
    const {CustomAlert, showAlert} = useAlert();
    const handleConfirm = () => {
      console.log('Confirm button pressed');
    };


  return (
    <View>
      <Text>Registration</Text>
      <Button
        onPress={()=>
            dispatch(setAlert({
                title: 'Do You Want to Logout?',
                message: `This is an example alert message.
test 123 test 123 test 123 
test 123 tst1243 test 123`,
                icon: 'logout-variant',
                type: 'success',
                confirmText: 'OK',
                cancelText:'Cancel',
                // onCancelPress: handleConfirm,
                // onConfirmPress: handleConfirm

            }))
        }
        >Set Alert1</Button>

        <Button
        onPress={()=>
            showAlert('test tole',
                'This is an example alert message.',
                'logout-variant',
                'success'
            )
        }
        >Set Alert</Button>

        <Button
        onPress={()=> createTwoButtonAlert()
        }
        >Alert React native</Button>

        <Button
        onPress={()=>
            dispatch(clearAlert())
        }
        >Clear Alert</Button>
        {alert.title && <CustomAlert/>}
    </View>
  )
}

export default Registration

const styles = StyleSheet.create({})