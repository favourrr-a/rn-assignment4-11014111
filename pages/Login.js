// React Native components
import { View } from 'react-native';

// Components
import AppName from '../components/login-components/AppName';
import Headline from '../components/login-components/Headline';
import LoginForm from '../components/login-components/LoginForm';
import OtherLoginOptions from '../components/login-components/OtherLoginOptions';

// Styles
import { loginStyles } from '../styles/login-styles/loginStyles';
import { appStyles } from '../styles/appStyles';

export default function Login({navigation}) {
  return (
    <View style = {appStyles.container}>
      <View style = {loginStyles.loginPageContainer}> 
        <AppName />
        <Headline />
        <LoginForm navigation = {navigation} />
        <OtherLoginOptions />
      </View>
    </View>
  );
}