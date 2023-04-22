/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import store from './src/redux/store';
import { LIGHT_THEME, DARK_THEME } from './src/theme/customThemes';
export default function Main() {
    return (
        <Provider store={store}>
            <PaperProvider>
                <App />
            </PaperProvider>
        </Provider>
    );
}



AppRegistry.registerComponent(appName, () => Main);
