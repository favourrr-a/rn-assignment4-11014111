// React Native components
import { View, ScrollView } from 'react-native';

// Styles
import { appStyles } from '../styles/appStyles';
import { homeStyles } from '../styles/home-styles/homeStyles';

// Components
import UserProfile from '../components/home-components/UserProfile';
import Search from '../components/home-components/Search';
import FeaturedJobs from '../components/home-components/FeaturedJobs';
import PopularJobs from '../components/home-components/PopularJobs';

export default function Home({route}) {
    const {name, email} = route.params;
    console.log(route);
    return (
        <View style = {appStyles.container}>
            <ScrollView vertical showsVerticalScrollIndicator = {false} style = {homeStyles.homePageContainer}>
                <UserProfile name = {name} email = {email} />
                <Search />
                <FeaturedJobs />
                <PopularJobs />
            </ScrollView>
        </View>
    );
}