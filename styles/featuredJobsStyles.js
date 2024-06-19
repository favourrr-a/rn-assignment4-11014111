// React Native components
import { StyleSheet } from 'react-native';

export const featuredJobsStyles = StyleSheet.create({
    featuredJobsContainer: {
        width: '100%',
        marginTop: 30,
    },
    featuredJobsTitleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
    },
    featuredJobsTitle: {
        fontSize: 23,
        fontWeight: 'bold',
        flex: 1,
    },
    featuredJobsSeeAll: {
        fontSize: 16,
        color: '#95969D',
        flex: 0.3,
        textAlign: 'right',
    }
});