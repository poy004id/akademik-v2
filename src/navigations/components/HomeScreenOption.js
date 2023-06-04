import { useTheme } from 'react-native-paper';
import { IconButton, Button, Text } from 'react-native-paper';
import React from 'react'


const HomeScreenOptions = ({navigation})=> ({
    headerRight: () => (
      <>
      <IconButton
        icon="logout-variant"
        iconColor={useTheme().colors.onPrimary}
        size={24}
        onPress={() => {console.log('Custom action button pressed'); navigation.navigate('Test')}}
      />
      <Text onPress={()=>navigation.navigate('Test')}>Test</Text>
      <Button>Test2</Button>
  </>
  
    ),
  });

// module.exports = HomeScreenOptions;
export default HomeScreenOptions;