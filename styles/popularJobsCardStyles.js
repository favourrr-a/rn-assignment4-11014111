// React Native Components
import { StyleSheet } from 'react-native';

export const popularJobsCardStyles = StyleSheet.create({
    popularJobsCardContainer: {
        width: '100%',
        height: 90,
        borderRadius: 10,
        display: 'flex',
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        marginBottom: 15,
        paddingLeft: 10,
        paddingRight: 10,
    },
    companyLogoJobTitleCompanyName: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    companyLogoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 40,
    },
    companyLogo: {
        height: 35,
        width: 35,
    },
    jobTitleCompanyName: {
        display: 'flex', 
        flexDirection: 'column',
        paddingLeft: 10,
    },
    jobTitle: {
        fontSize: 18,
        fontWeight: '500',
        color: 'black',
    },
    companyName: {
        fontSize: 16,
        fontWeight: '110',
        color: '#797985',
    },
    jobSalaryJobLocation: {
        flex: 0.3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    jobSalary: {
        color: 'black',
        fontSize: 12,
        alignSelf: 'flex-end',
    },
    jobLocation: {
        color: '#797985',
        fontSize: 12,
        alignSelf: 'flex-end',
    }
});