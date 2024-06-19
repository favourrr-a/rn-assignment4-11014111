// React Native Components
import { StyleSheet } from 'react-native';

export const featuredJobsCardStyles = StyleSheet.create({
    featuredJobsCardContainer: {
        width: 300,
        height: 200,
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
        top: 7,
    },
    jobTitle: {
        fontSize: 24,
        fontWeight: '500',
        color: '#FFFFFF',
    },
    companyName: {
        fontSize: 20,
        fontWeight: '110',
        color: '#D4E1F8',
        marginTop: 5
    },
    jobSalaryJobLocation: {
        flex: 0.3,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    jobSalary: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    jobLocation: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold'
    }
});