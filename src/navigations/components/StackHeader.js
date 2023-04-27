import { Appbar} from 'react-native-paper'
import { useTheme } from 'react-native-paper';
import { getHeaderTitle } from '@react-navigation/elements';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React from 'react';


const StackHeader = React.memo(({ navigation, route, options, back }) => {
  const theme = useTheme();
  const title = getHeaderTitle(options, route.name);
  const { bottom, top } = useSafeAreaInsets();
  console.log('bottom in StackHeader', bottom, top);

  return (
    <Appbar.Header
      mode="center-aligned"
      dark={true}
      style={{
        backgroundColor: theme.colors.primary,
      }}
    >
      {back && (
        <Appbar.BackAction
          onPress={() => navigation.goBack()}
          color={theme.colors.onPrimary}
        />
      )}
      <Appbar.Content
        title={title}
        titleStyle={{ color: theme.colors.onPrimary }}
      />
      {options.headerRight && options.headerRight()}
    </Appbar.Header>
  );
}, (prevProps, nextProps) => {
  return (
    prevProps.navigation === nextProps.navigation &&
    prevProps.route === nextProps.route &&
    prevProps.options.headerRight === nextProps.options.headerRight 
  );
});

export default StackHeader;

// const StackHeader = ({ navigation, route, options, back }) => {
//   const theme = useTheme();
//   const title = getHeaderTitle(options, route.name);
//   const { bottom, top } = useSafeAreaInsets();
//   console.log('bottom in StackHeader', bottom, top)


// return (
//     <Appbar.Header mode='center-aligned' dark={true} style={{ backgroundColor: theme.colors.primary, borderTopWidth:1 }} 
//     >
//       {back && <Appbar.BackAction onPress={() => navigation.goBack()} color={theme.colors.onPrimary}  />}
//       <Appbar.Content title={title} titleStyle={{ color: theme.colors.onPrimary }} />
//       {options.headerRight && options.headerRight()}
//     </Appbar.Header>
// )
// }