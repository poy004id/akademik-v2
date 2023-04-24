import React, {useEffect} from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import SnackbarComponent from '../components/SnackbarComponent';

const FullWidthLayout = ({AppFAB, AppFooter, AppBody,  children }) => {
  console.log('FullWidthLayout rendered')
  const { colors } = useTheme();
  const styles = customStyles(colors);

    let FABCount = 0;
    React.Children.forEach(AppFAB, (child) => {
      FABCount += React.Children.count(child.props.children);
    });
  
  return (
    <View style={{ flex:1}}>
    <SafeAreaView style={{flex:1}} >
      <View style={styles.container}>
       {children}
      </View>
      <View style={{bottom:FABCount * 70}}>
        <SnackbarComponent/>
      </View>
      <View style={{right:16, bottom:16}}>
        <View style={styles.fab}>
            {AppFAB}
        </View>
      </View>
        {AppFooter}
    </SafeAreaView>
    </View>
  )
}

const customStyles = (colors) => StyleSheet.create({
  container: {
    flex: 1,
    // flexGrow: 1,
    backgroundColor: colors.background,
  },
  fab: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    gap: 70,
  },
});

export default FullWidthLayout;
