import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-paper';

const MyScreen = () => {
  const [scrollViewHeight, setScrollViewHeight] = useState(0);
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  const handleLayout = event => {
    const { height } = event.nativeEvent.layout;
    setScrollViewHeight(height);
  };

  console.log('scrollViewHeight', scrollViewHeight);
  console.log('keyboardHeight', keyboardHeight);
  console.log('scrollViewHeight - keyboardHeight', scrollViewHeight - keyboardHeight);
  const handleKeyboardWillShow = event => {
    const { height } = event.endCoordinates;
    setKeyboardHeight(height);
  };

  const handleKeyboardWillHide = () => {
    setKeyboardHeight(0);
  };

  const scrollViewStyle = {
    height: scrollViewHeight - keyboardHeight,
    backgroundColor: 'cyan',
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        >

        
      <ScrollView
        style={scrollViewStyle}
        contentContainerStyle={styles.scrollViewContent}
        keyboardShouldPersistTaps="handled"
        onLayout={handleLayout}
        // automaticallyAdjustKeyboardInsets={true}
        // automaticallyAdjustContentInsets={true}
        onKeyboardWillShow={handleKeyboardWillShow}
        onKeyboardWillHide={handleKeyboardWillHide}
      >
        <TextInput label="Email"/>
        <TextInput label="Email"/>
        <TextInput label="Email"/>
        <TextInput label="Email"/>
        <TextInput label="Email"/>
        <TextInput label="Email"/>
        <TextInput label="Email"/>
        <TextInput label="Email"/>
        <TextInput label="Email"/>
      </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'
  },
  scrollViewContent: {
    flexGrow: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 16,
  },
});

export default MyScreen;
