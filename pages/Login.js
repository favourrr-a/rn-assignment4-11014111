// React Native components
import { View } from 'react-native';

// Components
import Name from '../components/Name';
import Headline from '../components/Headline';
import LoginForm from '../components/LoginForm';
import OtherLoginOptions from '../components/OtherLoginOptions';

// Styles
import { loginStyles } from '../styles/loginStyles';

export default function Login() {
  return (
    <View style = {loginStyles.loginPageContainer}> 
        <Name />
        <Headline />
        <LoginForm />
        <OtherLoginOptions />
    </View>
  );
}