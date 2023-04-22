import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Snackbar } from 'react-native-paper';

const AppFAB = ({ children }) => {
  return (
      <View>
        <View style={styles.fab}>
          {children}
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    gap: 70,
  },
});

export default AppFAB;
