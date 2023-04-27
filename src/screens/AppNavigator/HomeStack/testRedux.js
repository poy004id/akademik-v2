import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useSnackbar from '../../../redux/features/snackbar/useSnackbar'
import { Button } from 'react-native-paper'
import SnackbarComponent from '../../../components/SnackbarComponent'

const TestRedux = () => {
  const snackbarQueue = useSelector(state => state.snackbarQueue)
  const {showSnackbar} = useSnackbar()
  // const snackbarComponent = useSnackbarComponent();
  console.log('snackbarQueue in TestRedux', snackbarQueue)
  useEffect(() => {
    showSnackbar('test redux snackbar')
  }, [])

  return (
    <View style={{flex:1, height:'100%', justifyContent:'center'}}>
      <SnackbarComponent/>
      <Text>TestRedux</Text>
      <Button onPress={()=>showSnackbar('test')}>Add Snackbar</Button>
    </View>
  )
}

export default TestRedux

const styles = StyleSheet.create({})