// React Native components
import { View, Text, Image } from 'react-native';

// Components
import PopularJobsList from './PopularJobsList';

// Styles
import { popularJobsStyles } from '../styles/popularJobsStyles';

export default function PopularJobs() {
    return(
        <View style = {popularJobsStyles.popularJobsContainer}>
            <View style = {popularJobsStyles.popularJobsTitleContainer}>
                <Text style = {popularJobsStyles.popularJobsTitle}>
                    Popular Jobs
                </Text>
                <Text style = {popularJobsStyles.popularJobsSeeAll}>
                    See All
                </Text>
            </View>
            <PopularJobsList/>
        </View>
    );
}