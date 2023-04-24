import React from 'react';
import { View, StyleSheet, Dimensions, Platform, KeyboardAvoidingView } from 'react-native';
import { useTheme } from 'react-native-paper';

const SCREEN_WIDTH = Dimensions.get('window').width;

const FormContainer = ({ children }) => {
    const { colors } = useTheme();
    const styles = customStyles(colors);
  return (
    <View style={{flex:1, justifyContent:'center', backgroundColor: Platform.isPad ? colors.primaryContainer : colors.background}}> 
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex:1}} contentContainerStyle={{flexGrow:1}}>
    <View style={styles.container}>
      {children}
    </View>
    </KeyboardAvoidingView>
    </View>
  );
};

const customStyles = (colors) => StyleSheet.create({
  container: {
    width: Platform.isPad ? 600 : '100%', // Limit width to 600 on tablets
    alignSelf: 'center',
    paddingHorizontal: 16,
    // flex: 1,
    borderWidth: Platform.isPad ? 1 : 0,
    borderColor: colors.outline,
    borderRadius: 40,
    overflow: 'hidden',
    paddingVertical : Platform.isPad ? 40 : 0
  },
});

export default FormContainer;
