/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider as PaperProvider} from 'react-native-paper';
import { LIGHT_THEME, DARK_THEME } from './src/theme/customThemes';
export default function Main() {
    return (
        <PaperProvider>
            <App />
        </PaperProvider>
    );
}



AppRegistry.registerComponent(appName, () => Main);
