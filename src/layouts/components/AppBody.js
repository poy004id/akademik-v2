import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AppBody = ({ children }) => {
  return (
    <View style={styles.body}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor:'green',
    position: 'relative',
  },
});

export default AppBody;
