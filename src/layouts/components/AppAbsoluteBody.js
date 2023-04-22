import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Portal } from 'react-native-paper';

const AppAbsoluteBody = ({ children }) => {
  return (
    <Portal>
      <SafeAreaView>
      {children}
      </SafeAreaView>
    </Portal>
  )
}

const styles = StyleSheet.create({
  absoluteBody: {
    flex: 1,
    padding: 20,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
});

export default AppAbsoluteBody;
