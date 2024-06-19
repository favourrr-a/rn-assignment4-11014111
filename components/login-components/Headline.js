// React Native components
import { Text, View } from 'react-native';

// Styles
import { headlineStyles } from '../../styles/login-styles/headlineStyles';

export default function Headline() {
    return(
        <View style = {headlineStyles.headlineContainer}>
            <Text style = {headlineStyles.headline}>
                Welcome Back
            </Text>
            <HeadlineMessage />
        </View>
    );
}

function HeadlineMessage() {
    return(
        <View style = {headlineStyles.headlineMessageContainer}>
            <Text style = {headlineStyles.headlineMessage}>
                Let's log in. Apply to jobs!
            </Text>
        </View>
    );
}