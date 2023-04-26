import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Dialog, Paragraph, Title, Portal, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { setAlert } from '../redux/features/alert';



const AlertComponent = () => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
//   const { title, message, icon, type } = useSelector(state => state.alert);
  const alert = useSelector(state=>state.alert)
  console.log('alert in alertcompoent', alert)
  const { title, message, icon, type } = alert;

  const showAlert= (title, message, icon, type) => {
    dispatch(setAlert({ title, message, icon, type }));
    setVisible(true);
  };

  const hideAlert = () => {
    setVisible(false);
    dispatch(clearAlert())
  };


  const CustomAlert = () => {

    return (
        
        <Portal>
            <View><Text>jrgjodkhodkhpdlhpdh</Text></View>
      <Dialog visible={visible} onDismiss={hideAlert}>
        <Dialog.Content>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name={icon} size={30} color="#000" />
            <Title style={{ marginLeft: 10 }}>{title}</Title>
          </View>
          <Paragraph style={{ marginTop: 10 }}>{message}</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideAlert}>OK</Button>
        </Dialog.Actions>
      </Dialog>
      </Portal>
    );
  };

  return { showAlert, CustomAlert };
};

export default AlertComponent;
