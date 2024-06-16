// React Native components
import { StyleSheet } from 'react-native';

export const otherLoginOptionsStyles = StyleSheet.create({
    otherLoginOptionsContainer:{
        display: 'flex',
        flexDirection: 'column',
    }, 
    orContinueWithContainer: {
        marginTop: 40,
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    orContinueWithLine: {
        height: 0.5,
        backgroundColor: '#AFB0B6',
        flex: 1,
    },
    orContinueWith: {
        flex: 1,
        fontSize: 15,
        color: '#AFB0B6',
        textAlign: 'center',
    },
    otherLoginOptionsIconsContainer: {
        marginTop: 30,
        height: 50,
    },
    otherLoginOptionsIcon: {

    },
    registerContainer: {
        marginTop: 45,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    registerText: {
        fontSize: 15,
        color: '#BDBEC2',
        textAlign: 'center',
    },
    registerLink: {
        marginLeft: 5,
        color: 'purple',
    }
})