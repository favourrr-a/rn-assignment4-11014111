// React Native components
import { StyleSheet } from 'react-native';

export const otherLoginOptionsStyles = StyleSheet.create({
    otherLoginOptionsContainer:{
        display: 'flex',
        flexDirection: 'column',
        flex: 1.5,
        position: 'relative',
        top: '3%',
    }, 
    orContinueWithContainer: {
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
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10%',
        height: '20%',
    },
    otherLoginOptionsIconContainer: {
        margin: '3%',
        backgroundColor: '#FFFFFF',
        borderRadius: 150,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '14%',
    },
    otherLoginOptionsIcon: {
        height: 25,
        width: 25,
    },
    registerContainer: {
        marginTop: '12%',
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
        marginLeft: '1%',
        color: 'purple',
    }
})