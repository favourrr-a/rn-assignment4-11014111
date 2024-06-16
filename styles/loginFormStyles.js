// React Native components
import { StyleSheet } from 'react-native';

export const loginFormStyles = StyleSheet.create({
    loginFormContainer: {
        width: '100%',
        marginTop: 40,
    },
    input: {
        height: 52,
        width: '100%',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#AFB0B6',
        marginTop: 10,
        paddingLeft: 15,
    },
    loginButton: {
        width: '100%',
        height: 56,
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#356899',
        borderRadius: 5,
    },
    loginButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'medium',
    }
});