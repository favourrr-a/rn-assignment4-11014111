// React Native Components
import {View, Text, Image} from 'react-native';

// Styles
import { featuredJobsCardStyles } from '../styles/featuredJobsCardStyles';

export default function FeaturedJobsCard({jobTitle, company, companyLogo, salary, location, backgroundColor}) {
    return(
        <View style = {[featuredJobsCardStyles.featuredJobsCardContainer, {backgroundColor}]}>
            <View style = {featuredJobsCardStyles.companyLogoJobTitleCompanyName}>
                <View style = {featuredJobsCardStyles.companyLogoContainer}>
                    <Image source = {companyLogo} style = {featuredJobsCardStyles.companyLogo}/>
                </View>
                <View style = {featuredJobsCardStyles.jobTitleCompanyName}>
                    <Text style = {featuredJobsCardStyles.jobTitle}>
                        {jobTitle}
                    </Text>
                    <Text style = {featuredJobsCardStyles.companyName}>
                        {company}
                    </Text>
                </View>
            </View>
            <View style = {featuredJobsCardStyles.jobSalaryJobLocation}>
                <Text style = {featuredJobsCardStyles.jobSalary}>
                    {salary}
                </Text>
                <Text style = {featuredJobsCardStyles.jobLocation}>
                    {location}
                </Text>
            </View>
        </View>
    )
}