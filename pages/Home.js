// React Native components
import { View, Text } from 'react-native';

// Styles
import { appStyles } from '../styles/appStyles';
import { homeStyles } from '../styles/homeStyles';

export default function Home({route}) {
    const {name, email} = route.params;
    console.log(route);
    return (
        <View style = {appStyles.container}>
        <View style = {homeStyles.homePageContainer}>
            <Text>Home</Text>
        </View>
        </View>
    );
}