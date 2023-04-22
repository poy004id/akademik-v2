import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AppHeader = ({ children }) => {
  return (
    <View style={styles.header}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AppHeader;
