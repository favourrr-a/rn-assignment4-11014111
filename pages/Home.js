// React Native components
import { View, ScrollView } from 'react-native';

// Styles
import { appStyles } from '../styles/appStyles';
import { homeStyles } from '../styles/homeStyles';

// Components
import UserProfile from '../components/UserProfile';
import Search from '../components/Search';
import FeaturedJobs from '../components/FeaturedJobs';

export default function Home({route}) {
    const {name, email} = route.params;
    console.log(route);
    return (
        <View style = {appStyles.container}>
            <ScrollView vertical showsVerticalScrollIndicator = {false} style = {homeStyles.homePageContainer}>
                <UserProfile name = {name} email = {email} />
                <Search />
                <FeaturedJobs />
            </ScrollView>
        </View>
    );
}