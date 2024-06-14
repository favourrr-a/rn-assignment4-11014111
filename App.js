// React Native components
import { View } from 'react-native';

// Pages
import Login from './pages/Login';

// Styles
import { appStyles } from './styles/appStyles';

export default function App() {
  return (
    <View style = {appStyles.container}>
      <Login />
    </View>
  );
}