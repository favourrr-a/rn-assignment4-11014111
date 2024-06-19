// React Native components
import { FlatList } from 'react-native';

// Components
import FeaturedJobsCard from './FeaturedJobsCard';

//  Assets
import appleLogo from '../assets/company-logos/apple.jpeg';
import beatsLogo from '../assets/company-logos/beats.png';
import burgerKingLogo from '../assets/company-logos/burger-king.png';
import EALogo from '../assets/company-logos/EA.png';
import facebookLogo from '../assets/company-logos/facebook.png';
import googleLogo from '../assets/company-logos/google.png';
import linuxLogo from '../assets/company-logos/linux.png';
import oracleLogo from '../assets/company-logos/oracle.jpeg';
import rockstarGamesLogo from '../assets/company-logos/rockstar-games.png';
import twitterLogo from '../assets/company-logos/twitter.png';

// Styles
import { featuredJobsListStyles } from '../styles/featuredJobsListStyles';

export default function FeaturedJobsList() {
    const featuredJobs = [
        { id: 1, jobTitle: 'Mechanical Engineer', company: 'Apple', companyLogo: appleLogo, salary: 400000, location: 'Florida, USA', backgroundColor: '#5386E4'},
        { id: 2, jobTitle: 'Product Manager', company: 'Beats', companyLogo: beatsLogo, salary: 250000, location: 'Accra, Ghana', backgroundColor: '#04284A'},
        { id: 3, jobTitle: 'Jr Executive', company: 'Burger King', companyLogo: burgerKingLogo, salary: 270000, location: 'Cairo, Egypt', backgroundColor: '#5386E4'},
        { id: 4, jobTitle: 'Video Game Developer', company: 'EA', companyLogo: EALogo, salary: 300000, location: 'California, USA', backgroundColor: '#04284A'},
        { id: 5, jobTitle: 'Software Engineer', company: 'Facebook', companyLogo: facebookLogo, salary: 148000, location: 'London, UK', backgroundColor: '#5386E4'},
        { id: 6, jobTitle: 'Cloud Engineer', company: 'Google', companyLogo: googleLogo, salary: 200000, location: 'California, USA', backgroundColor: '#04284A'},
        { id: 7, jobTitle: 'Systems Administrator', company: 'Linux', companyLogo: linuxLogo, salary: 890000, location: 'California, USA', backgroundColor: '#5386E4'},
        { id: 8, jobTitle: 'Systems Administrator', company: 'Oracle', companyLogo: oracleLogo, salary: 889000, location: 'Texas, USA', backgroundColor: '#04284A'},
        { id: 9, jobTitle: 'Video Game Developer', company: 'Rockstar Games', companyLogo: rockstarGamesLogo,  salary:700000, location: 'New York, USA', backgroundColor: '#5386E4'},
        { id: 10, jobTitle: 'Software Developer', company: 'Twitter', companyLogo: twitterLogo, salary: 600000, location: 'California, USA', backgroundColor: '#04284A'},
    ];
    return(
        <FlatList horizontal showsHorizontalScrollIndicator = {false} data = {featuredJobs} style = {featuredJobsListStyles.featuredJobsListContainer}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <FeaturedJobsCard
                    jobTitle = {item.jobTitle}
                    company = {item.company}
                    companyLogo = {item.companyLogo}
                    salary = {item.salary}
                    location = {item.location}
                    backgroundColor = {item.backgroundColor}
                />
            )
        }
        contentContainerStyle = {{  }}
        />
    )
}