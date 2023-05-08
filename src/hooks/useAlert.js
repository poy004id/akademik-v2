import React, { useState } from 'react';

import { Button, Dialog, Modal, Paragraph, Title, Portal, Text, useTheme, IconButton, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { setAlert, clearAlert } from '../redux/features/alert';
import {View, TouchableOpacity} from 'react-native'
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

  const actionColor = (type) => {
    switch (type) {
      case 'success':
        return colors.primary;
      case 'error':
        return colors.error
  }
}

  const CustomAlert = () => {
    return (
    <Portal>
      <Modal
        visible={alert.title}
        onDismiss={hideAlert}
        contentContainerStyle={{
          backgroundColor:colors.surfaceVariant,
          maxWidth:400, 
          borderRadius: 15,
          alignSelf:'center',
          alignContent:'center'
        }}
        >
          <View style={{padding:0,  overflow:'hidden',
          borderRadius: 15}} > 
          <IconButton
              icon={icon}
              size={36}
              iconColor={actionColor(type)}
              containerColor={colors.onPrimary}
              // iconColor='red'
              style={{alignSelf:'center', margin:10}}
          />
          <View style={{paddingVertical:10, paddingHorizontal:20}}>
            <Text variant='titleLarge'>{title}</Text>
            <Paragraph>{message}</Paragraph>

          </View>


            <View style={{flexDirection:'row-reverse', backgroundColor:colors.background, }}>
              <TouchableOpacity 
                style={{flex:1, alignItems:'center', padding:15, }}
                onPress={onConfirmPress} >
                <Text style={{color: actionColor(type)}}>
                {confirmText}
                </Text>
              </TouchableOpacity>
              {cancelText && <View style={{width:1, backgroundColor:colors.outlineVariant}}/>}
              {cancelText &&
              <TouchableOpacity 
                style={{flex:1, padding:15}}
                onPress={onCancelPress} >
                  <Text style={{alignSelf:'center'}}>
                    {cancelText}
                  </Text>
              </TouchableOpacity>}
            </View>
          </View>
        </Modal>
        {/* <Dialog visible={title} style={{maxWidth: 600, alignSelf: "center" }} onDismiss={hideAlert}>
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
            <Dialog.Actions style={{flexGrow:0, flexDirection:'row', justifyContent:'space-between', backgroundColor:colors.background}}>
              <Button style={{flex:1}} onPress={() => {hideAlert();   }}>{cancelText}</Button>
              <Button style={{flex:1}} onPress={() => {hideAlert();  }}>{confirmText}</Button>
            </Dialog.Actions>
          </Dialog> */}

      </Portal>
    );
  };

  return { showAlert, CustomAlert };
};

export default useAlert;
