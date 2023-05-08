import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Button, Dialog, Modal, Paragraph, Title, Portal, Text, useTheme, IconButton, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { setAlert, clearAlert } from '../redux/features/alert';
// import DialogTitle from 'react-native-paper/lib/typescript/src/components/Dialog/DialogTitle';



const useAlert = () => {
  const {colors} =  useTheme();

  const dispatch = useDispatch();
  const alert = useSelector(state=>state.alert)

  console.log('alert in useAlert', alert)
  const { 
    type,
    title,
    message,
    icon,
    confirmText,
    cancelText,
    onCancelPress, 
    onConfirmPress,
  } = alert;

  const showAlert= (type, title, message, icon, confirmText, cancelText, onCancelPress,  onConfirmPress,
  ) => {
    dispatch(setAlert({ 
      type,
      title,
      message,
      icon,
      confirmText,
      cancelText,
      onCancelPress, 
      onConfirmPress,
    }));
  };

  const hideAlert = () => {
    dispatch(clearAlert())
  };


  const CustomAlert = () => {
    return (
    <Portal>
      {/* <Modal
        visible={alert.title}
        onDismiss={hideAlert}
        contentContainerStyle={{
          backgroundColor:"white",
          maxWidth:400, 
          // width:'100%',
          borderRadius: 15,
          alignSelf:'center',
          alignContent:'center'
        }}
        >
          <View style={{padding:20}} > 
          <IconButton
              icon={icon}
              size={36}
          />
            <Text variant='headlineSmall'>{title}</Text>
            <Paragraph>{message}</Paragraph>


            <View style={{flexDirection:'row'}}>
              <TouchableOpacity 
                style={{flex:1, alignItems:'center'}}
                onPress={onConfirmPress} >
                <Text>
                {confirmText}
                </Text>
              </TouchableOpacity>
              {cancelText &&
              <TouchableOpacity 
                style={{flex:1}}
                onPress={onCancelPress} >
                  <Text>
                    {cancelText}
                  </Text>
              </TouchableOpacity>}
            </View>
          </View>
        </Modal> */}
        <Dialog visible={title} style={{maxWidth: 600, alignSelf: "center" }} onDismiss={hideAlert} children={
          <View><Text>12235u496</Text></View>
          
      }>
        <IconButton
          icon={icon}
          size={36}
          style={{alignSelf:'center'}}
          />
            <Dialog.Title>{title}</Dialog.Title>
            <Divider/>
            <Dialog.Content style={{paddingTop:10}}>
              <Paragraph>{message}</Paragraph>
            </Dialog.Content>
            <Dialog.Actions style={{flexGrow:0}}>
              <Button onPress={() => {hideAlert(); onCancelPress()  }}>{cancelText}</Button>
              <Button onPress={() => {hideAlert(); onConfirmPress() }}>{confirmText}</Button>
            </Dialog.Actions>
          </Dialog>

      </Portal>
    );
  };

  return { showAlert, CustomAlert };
};

export default useAlert;
