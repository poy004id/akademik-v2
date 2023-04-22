import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Snackbar, useTheme } from 'react-native-paper';
import useSnackbar from '../redux/features/snackbar/useSnackbar';
import { shallowEqual, useSelector } from 'react-redux';

const SnackbarComponent = () => {
    const { colors } = useTheme();
    const snackbarQueue = useSelector(state => state.snackbarQueue, shallowEqual) // array of messages
    const { showSnackbar, hideSnackbar } = useSnackbar();
    const [snackbarVisible, setSnackbarVisible] = React.useState(false);
    const [snackbarMessage, setSnackbarMessage] = React.useState(null);

    useEffect(() => {
        console.log('snackbarQueue', snackbarQueue)
        if (snackbarQueue.length > 0) {
            setSnackbarVisible(true)
            setSnackbarMessage(snackbarQueue[0])
        }
        else {
            setSnackbarVisible(false)
            setSnackbarMessage(null)
        }
    }, [snackbarQueue])

  return (
    <View>
<Snackbar
  visible={snackbarVisible}
  duration={4000}
  onDismiss={hideSnackbar}
  style={{ position: 'absolute', bottom: 10, left: 0, right: 0 }}
  action={{
    label: 'OK',
    onPress: () => { console.log('snackbar pressed') },
    // onPress: ()=> hideSnackbar() ,
  }}
>
<Text style={{color:colors.onPrimary}}>
  {snackbarMessage}
  </Text>
</Snackbar>
    </View>
  )

}

export default SnackbarComponent

const styles = StyleSheet.create({})