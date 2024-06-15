// React Native components
import { View } from 'react-native';

// Components
import Name from '../components/Name';
import Headline from '../components/Headline';

// Styles
import { loginStyles } from '../styles/loginStyles';

export default function Login() {
  return (
    <View style = {loginStyles.loginPageContainer}> 
        <Name />
        <Headline />
    </View>
  );
}