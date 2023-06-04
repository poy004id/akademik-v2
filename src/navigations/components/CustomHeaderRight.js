import React from 'react';
import { View, Text } from 'react-native';
import * as RootNavigation from '../../utils/RootNavigation';


const CustomHeaderRight = ({ navigation }) => {
    console.log('navigation in CustomHeaderRight', navigation)

  return (
    <View style={{ marginRight: 10 }}>
        {/* <Text onPress={()=>RootNavigation.navigate('Test')}>Test</Text> */}
    </View>
  );
};

export default CustomHeaderRight;
