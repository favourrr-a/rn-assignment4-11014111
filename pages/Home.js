// React Native components
import { View, Text } from 'react-native';

// Styles
import { appStyles } from '../styles/appStyles';
import { homeStyles } from '../styles/homeStyles';

// Components
import UserProfile from '../components/UserProfile';

export default function Home({route}) {
    const {name, email} = route.params;
    console.log(route);
    return (
        <View style = {appStyles.container}>
        <View style = {homeStyles.homePageContainer}>
            <UserProfile name = {name} email = {email} />
        </View>
        </View>
    );
}