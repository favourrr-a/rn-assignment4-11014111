// React Native components
import { View } from 'react-native';

// Components
import Name from '../components/Name';
import Headline from '../components/Headline';
import LoginForm from '../components/LoginForm';
import OtherLoginOptions from '../components/OtherLoginOptions';

// Styles
import { loginStyles } from '../styles/loginStyles';
import { appStyles } from '../styles/appStyles';

export default function Login({navigation}) {
  return (
    <View style = {appStyles.container}>
      <View style = {loginStyles.loginPageContainer}> 
        <Name />
        <Headline />
        <LoginForm navigation = {navigation} />
        <OtherLoginOptions />
      </View>
    </View>
  );
}