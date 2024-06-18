// React Native components
import { StyleSheet } from 'react-native';

export const loginFormStyles = StyleSheet.create({
    loginFormContainer: {
        width: '100%',
        flex: 1.8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: '18%',
        width: '100%',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#AFB0B6',
        marginBottom: '5%',
        paddingLeft: '5%',
    },
    loginButton: {
        width: '100%',
        height: '19%',
        marginTop: '5%',
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