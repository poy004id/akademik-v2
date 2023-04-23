import React, {useEffect} from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useTheme, Snackbar } from 'react-native-paper';
import SnackbarComponent from '../components/SnackbarComponent';

const BaseLayout = ({AppFAB, AppFooter, children }) => {
  const { colors } = useTheme();
  const styles = customtyles(colors);
  const isOffline = true;

  let FABCount = 0;
  React.Children.forEach(AppFAB, (child) => {
          FABCount += React.Children.count(child.props.children);
  });
  
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
       {children}
      </View>
      <View style={{bottom: FABCount * 70 + 10 }}>
        <SnackbarComponent/>
      </View>
      <View style={{right:16, bottom:16}}>
        <View style={styles.fab}>
            {AppFAB}
        </View>
      </View>

    </SafeAreaView>
  )
}

const customtyles = (colors) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});


export default BaseLayout;
