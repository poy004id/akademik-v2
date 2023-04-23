import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useMemo } from 'react'
import { Snackbar, useTheme } from 'react-native-paper';
import useSnackbar from '../redux/features/snackbar/useSnackbar';
import { shallowEqual, useSelector } from 'react-redux';

const SnackbarComponent = () => {
    const { colors } = useTheme();
    const snackbarQueue = useSelector(state => state.snackbarQueue, shallowEqual) // array of messages
    const { showSnackbar, hideSnackbar } = useSnackbar();

    console.log('snackbarQueue.lenght in snackbar component', snackbarQueue.length)

    useEffect(() => {
        console.log('snackbarQueue', snackbarQueue)
        if (snackbarQueue.length > 0) {
            const timer = setTimeout(() => {
              hideSnackbar()
          }, 4000);
          return () => clearTimeout(timer);
        }
    }, [snackbarQueue])


  return (
    useMemo(() => {
    snackbarQueue.map((message, index) => ( 
      <Snackbar
        visible={index === 0}
        key={index}
        duration={4000}
        onDismiss={hideSnackbar}
        style={{ position: 'absolute', bottom: 10, left: 0, right: 0 }}
        action={{
          label: 'OK',
          onPress: () => { console.log('snackbar pressed') },
          // onPress: ()=> hideSnackbar() ,
        }}
      >
        <Text style={{color:colors.onPrimary}}> {snackbarQueue[0]}
        </Text>
      </Snackbar>
    ))
      }, [snackbarQueue])
    
  )
}

export default SnackbarComponent

const styles = StyleSheet.create({})