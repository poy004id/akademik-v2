import React, {useEffect} from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';



const FullWidthLayout = ({AppFAB, AppFooter,  children }) => {
  const {SnackbarComponent} = useSnackbar();
  console.log('Fullwidthlayout children: ', );

  
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
       {children}
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
