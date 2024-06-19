// React Native components
import {View, Text, Image} from 'react-native';

// Styles
import { popularJobsCardStyles } from '../styles/popularJobsCardStyles';

export default function PopularJobsCard({jobTitle, company, companyLogo, salary, location}) {
    return(
        <View style = {popularJobsCardStyles.popularJobsCardContainer}>
            <View style = {popularJobsCardStyles.companyLogoJobTitleCompanyName}>
                <View style = {popularJobsCardStyles.companyLogoContainer}>
                    <Image source = {companyLogo} style = {popularJobsCardStyles.companyLogo}/>
                </View>
                <View style = {popularJobsCardStyles.jobTitleCompanyName}>
                    <Text style = {popularJobsCardStyles.jobTitle}>
                        {jobTitle}
                    </Text>
                    <Text style = {popularJobsCardStyles.companyName}>
                        {company}
                    </Text>
                </View>
            </View>
            <View style = {popularJobsCardStyles.jobSalaryJobLocation}>
                <Text style = {popularJobsCardStyles.jobSalary}>
                    {salary}
                </Text>
                <Text style = {popularJobsCardStyles.jobLocation}>
                    {location}
                </Text>
            </View>
        </View>
    )
}