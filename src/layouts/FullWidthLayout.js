import React, {useEffect} from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';

import    {showSnackbar, useSnackbar, SnackbarComponentMemo} from '../components/SnackbarComponent';

const FullWidthLayout = ({AppFAB, AppFooter,  children }) => {
  const {SnackbarComponent} = useSnackbar();
  console.log('Fullwidthlayout children: ', );
  const { colors } = useTheme();
  const isOffline = true;

  useEffect(() => {
    if (isOffline) {
      showSnackbar('Koneksi Terputus, silahkan coba lagi');
    }
  }, [isOffline]);


    let FABCount = 0;
    React.Children.forEach(AppFAB, (child) => {
            FABCount += React.Children.count(child.props.children);
    });
  
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
       {children}
      </View>
      <View style={{bottom:FABCount * 70 + 10 }}>
        {/* {SnackbarComponent} */}
        {SnackbarComponentMemo}
      </View>
      <View style={{right:16, bottom:16}}>
        <View style={styles.fab}>
            {AppFAB}
        </View>
      </View>
        {AppFooter}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  fab: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    gap: 70,
  },
});
export {showSnackbar};
export default FullWidthLayout;
