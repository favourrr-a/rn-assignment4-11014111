// React Native Components
import { StyleSheet } from 'react-native';

export const featuredJobsCardStyles = StyleSheet.create({
    featuredJobsCardContainer: {
        width: 320,
        height: 220,
        borderRadius: 30,
        marginRight: 15,
        padding: 20,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
    },
    companyLogoJobTitleCompanyName: {
        display: 'flex',
        flexDirection: 'row',
        flex: 2,
        alignItems: 'top'
    },
    companyLogoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: 60,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    companyLogo: {
        height: 25,
        width: 25,
    },
    jobTitleCompanyName: {
        display: 'flex', 
        flexDirection: 'column',
        paddingLeft: 15,
    },
    jobTitle: {
        fontSize: 18,
        fontWeight: '500',
        color: '#FFFFFF',
    },
    companyName: {
        fontSize: 16,
        fontWeight: '110',
        color: '#FFFFFF',
    },
    jobSalaryJobLocation: {
        flex: 0.3,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    jobSalary: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    jobLocation: {
        color: '#FFFFFF',
        fontSize: 16,
    }
});