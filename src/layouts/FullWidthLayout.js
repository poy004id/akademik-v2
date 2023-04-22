import React, {useEffect} from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import SnackbarComponent from '../components/SnackbarComponent';

const FullWidthLayout = ({AppFAB, AppFooter,  children }) => {

  const { colors } = useTheme();
  const isOffline = true;
  console.log('FullWidthLayout', )

    let FABCount = 0;
    React.Children.forEach(AppFAB, (child) => {
      FABCount += React.Children.count(child.props.children);
    });
  
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
       {children}
      </View>
      <View style={{bottom:FABCount * 70 }}>
        {SnackbarComponent()}
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

export default FullWidthLayout;
