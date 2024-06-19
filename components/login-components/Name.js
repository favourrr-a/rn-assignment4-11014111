// React Native components
import { Text, View } from 'react-native';

// Styles
import { nameStyles } from '../../styles/login-styles/nameStyles';

export default function Name() {
    return(
        <View style = {nameStyles.nameContainer}>
            <Text style = {nameStyles.name}>
                Jobizz
            </Text>
        </View>
    );
}