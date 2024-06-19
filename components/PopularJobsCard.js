// React Native components
import {View, Text, Image} from 'react-native';

// Styles
import { popularJobsCardStyles } from '../styles/popularJobsCardStyles';

export default function PopularJobsCard({jobTitle, company, companyLogo, salary, location}) {
    const formattedSalary = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(salary);
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
                    {formattedSalary}/y
                </Text>
                <Text style = {popularJobsCardStyles.jobLocation}>
                    {location}
                </Text>
            </View>
        </View>
    )
}