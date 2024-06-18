// React Native components
import { View, Text } from 'react-native';

// Styles
import { appStyles } from '../styles/appStyles';

export default function Home({route}) {
    const {name, email} = route.params;
    console.log(route);
    return (
        <View style = {appStyles.container}>
        <View>
            <Text>Home</Text>
        </View>
        </View>
    );
}