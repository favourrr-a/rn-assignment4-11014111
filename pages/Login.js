// React Native components
import { View } from 'react-native';

// Components
import Name from '../components/Name';

// Styles
import { loginStyles } from '../styles/loginStyles';

export default function Login() {
  return (
    <View style = {loginStyles.loginPageContainer}> 
        <Name />
    </View>
  );
}