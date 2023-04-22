import React, {useEffect} from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useTheme, Snackbar } from 'react-native-paper';

import AppHeader from './components/AppHeader';
import AppBody from './components/AppBody';
import AppAbsoluteBody from './components/AppAbsoluteBody';
import AppFAB from './components/AppFAB';
import AppFooter from './components/AppFooter';

import useSnackbar from '../components/SnackbarComponent';

const BaseLayout = ({ children }) => {
  console.log('BaseLayout children: ', children);
  const { colors } = useTheme();
  const {showSnackbar, SnackbarComponent} = useSnackbar();
  const isOffline = true;
  useEffect(() => {
    if (isOffline) {
      showSnackbar('Koneksi Terputus, silahkan coba lagi');
    }
  }, [isOffline]);

  // check if children with type AppFAB  exist and count the children of AppFABComponent
  let appFABCount = 0;
  
  React.Children.forEach(children, (child) => {
    if (child.type === AppFAB) {
      appFABCount += React.Children.count(child.props.children);
    }
  });
  console.log('appFABCount: ', appFABCount);
  

  
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
       {children}
      </View>
      <View style={{bottom:appFABCount * 70 + 10 }}>
        {SnackbarComponent}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});

export { AppHeader, AppBody, AppAbsoluteBody, AppFAB, AppFooter };

export default BaseLayout;
