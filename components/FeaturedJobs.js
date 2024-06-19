// React Native components
import { View, Text } from 'react-native';

// Components
import FeaturedJobsList from './FeaturedJobsList';

// Styles
import { featuredJobsStyles } from '../styles/featuredJobsStyles';

export default function FeaturedJobs() {
    return(
        <View style = {featuredJobsStyles.featuredJobsContainer}>
            <View style = {featuredJobsStyles.featuredJobsTitleContainer}>
                <Text style = {featuredJobsStyles.featuredJobsTitle}>
                    Featured Jobs
                </Text>
                <Text style = {featuredJobsStyles.featuredJobsSeeAll}>
                    See All
                </Text>
            </View>
            <FeaturedJobsList/>
        </View>
    );
}