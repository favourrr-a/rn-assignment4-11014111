// React Native Components
import { StyleSheet } from 'react-native';

export const headlineStyles = StyleSheet.create({
    headlineContainer: {
        alignItems: 'left',
        justifyContent: 'center',
        flex: 0.5,
        width: '100%',
    },
    headline: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#0D0D26',
    },
    headlineMessageContainer: {
        alignItems: 'left',
        justifyContent: 'center',
        marginTop: '2%',
        marginBottom: '2%',
        width: '100%',
    },
    headlineMessage: {
        fontSize: 18,
        fontWeight: 'normal',
        color: '#0D0D26',
        opacity: 0.5,
    }
});