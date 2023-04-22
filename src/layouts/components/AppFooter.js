import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AppFooter = ({ children }) => {
  return (
    <View style={styles.footer}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    height: 60,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AppFooter;
