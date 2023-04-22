import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import BaseLayout, { AppHeader, AppBody, AppFooter, AppFAB, AppAbsoluteBody } from '../../layouts/BaseLayout';
import { useTheme , FAB, Snackbar} from 'react-native-paper';
const Test3 = () => {
  return (
    <BaseLayout>
        <AppHeader>
            <Text>AppHeader Content</Text>
        </AppHeader>
        <AppBody>
            <ScrollView>
            {Array.from(Array(100).keys()).map((item, index) => (
                <Text key={index}>AppBody Content {index}</Text>
            ))}
            </ScrollView>
        </AppBody>
        <AppAbsoluteBody>
            <View style={{bottom:0, backgroundColor:'yellow'}}>
            <Text>AppAbsoluteBody Content</Text>
            </View>
        </AppAbsoluteBody>

        <AppFAB>
        {/* <View>
                <FAB
                    style={{ position: 'absolute',  right: 0, bottom: 0 }}
                    small
                    icon="plus"
                    onPress={() => console.log('Pressed')}
                />
            </View><View>
                <FAB
                    style={{ position: 'absolute',  right: 0, bottom: 0 }}
                    small
                    icon="plus"
                    onPress={() => console.log('Pressed')}
                />
            </View><View>
                <FAB
                    style={{ position: 'absolute',  right: 0, bottom: 0 }}
                    small
                    icon="plus"
                    onPress={() => console.log('Pressed')}
                />
            </View>
            <View>
                <FAB
                    style={{ position: 'absolute',  right: 0, bottom: 0 }}
                    small
                    icon="account"
                    onPress={() => console.log('Pressed')}
                />
            </View> */}
            <View>
                <FAB
                    style={{ position: 'absolute',  right: 0, bottom: 0 }}
                    small
                    icon="plus"
                    onPress={() => console.log('Pressed')}
                />
            </View>
       
        </AppFAB>
        <AppFooter>
            <Text>AppFooter Content</Text>
        </AppFooter>
    </BaseLayout>
  );
};

export default Test3;
