// React Native components
import { StyleSheet } from 'react-native';

export const popularJobsStyles = StyleSheet.create({
    popularJobsContainer: {
        width: '100%',
        marginTop: 30,
    },
    popularJobsTitleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
    },
    popularJobsTitle: {
        fontSize: 23,
        fontWeight: 'bold',
        flex: 1,
    },
    popularJobsSeeAll: {
        fontSize: 16,
        color: '#95969D',
        flex: 0.3,
        textAlign: 'right',
    }
});