// React Native components
import { StyleSheet } from 'react-native';

export const searchStyles = StyleSheet.create({
    searchContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: '9%',
        marginTop: 30,
        flex: 1,
    },
    searchBar: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F2F2F3',
        borderRadius: 10,
        paddingLeft: 10,
        display: 'flex',
        flexDirection: 'row',
        flex: 6,
        marginRight: 7,
        alignItems: 'center',
    },
    searchIcon: {
        width: 20,
        height: 20,
        alignSelf: 'center',
        marginRight: 10,
    },
    filterIconContainer: {
        flex: 1.2,
        width: '100%',
        height: '100%',
        backgroundColor: '#F2F2F3',
        borderRadius: 10,
        alignSelf: 'center',        
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 7,
    },
    filterIcon: {
        width: 35,
        height: 35,
        alignSelf: 'center',
    }
});