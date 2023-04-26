import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useTheme, IconButton, Button } from 'react-native-paper'
import { useSelector, useDispatch } from 'react-redux';
import { setAlert, clearAlert } from '../../../redux/features/alert';
import AlertComponent from '../../../components/AlertComponent';


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

const Registration = () => {
    const alert = useSelector(state=>state.alert)
    console.log ('alert', alert)
    const dispatch = useDispatch();
    const {CustomAlert, showAlert} = AlertComponent();


  return (
    <View>
      <Text>Registration</Text>
      <Button
        onPress={()=>
            dispatch(setAlert({
                title: 'test tole',
                message: 'This is an example alert message.',
                icon: 'logout-variant',
                type: 'success'

            }))
        }
        >Set Alert</Button>

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
        onPress={()=>
            dispatch(clearAlert())
        }
        >Clear Alert</Button>
        <CustomAlert/>
    </View>
  )
}

export default Registration

const styles = StyleSheet.create({})