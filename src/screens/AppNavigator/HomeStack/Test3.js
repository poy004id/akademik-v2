import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import BaseLayout from '../../../layouts/BaseLayout';
import { useTheme , FAB, Snackbar} from 'react-native-paper';
const Test3 = () => {
  return (
    <BaseLayout
        AppFAB={
                <View>
                <FAB
                    style={{ position: 'absolute',  right: 0, bottom: 0 }}
                    small
                    icon="plus"
                    onPress={() => console.log('Pressed')}
                />
            </View>
        }
    >


    </BaseLayout>
  );
};

export default Test3;
