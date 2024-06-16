// React Native components
import { View, Text } from 'react-native';

// Styles
import { otherLoginOptionsStyles } from '../styles/otherLoginOptionsStyles';

export default function OtherLoginOptions() {
    return(
        <View style = {otherLoginOptionsStyles.otherLoginOptionsContainer}>
            <View style = {otherLoginOptionsStyles.orContinueWithContainer}>
                <View style = {otherLoginOptionsStyles.orContinueWithLine}></View>
                <Text style = {otherLoginOptionsStyles.orContinueWith}>  
                    Or continue with 
                </Text>
                <View style = {otherLoginOptionsStyles.orContinueWithLine}></View>
            </View>
            <View style = {otherLoginOptionsStyles.otherLoginOptionsIconsContainer}>
                <View style = {otherLoginOptionsStyles.otherLoginOptionsIcon}>

                </View>
                <View style = {otherLoginOptionsStyles.otherLoginOptionsIcon}>
                    
                </View>
                <View style = {otherLoginOptionsStyles.otherLoginOptionsIcon}>
                    
                </View>
            </View>
            <View style = {otherLoginOptionsStyles.registerContainer}> 
                <Text style = {otherLoginOptionsStyles.registerText}>
                    Haven't an account?
                </Text>
                <Text style = {otherLoginOptionsStyles.registerLink}>
                        Register
                </Text>
            </View>
        </View>
    )
}