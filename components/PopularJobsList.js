// React Native components
import { View } from 'react-native';

// Components
import PopularJobsCard from './PopularJobsCard';

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
import { popularJobsListStyles } from '../styles/popularJobsListStyles';

export default function PopularJobsList() {
    const popularJobs = [
        { id: 1, jobTitle: 'Product Manager', company: 'Beats', companyLogo: beatsLogo, salary: 250000, location: 'Accra, Ghana'},
        { id: 2, jobTitle: 'Jr Executive', company: 'Burger King', companyLogo: burgerKingLogo, salary: 270000, location: 'Cairo, Egypt'},
        { id: 3, jobTitle: 'Video Game Developer', company: 'EA', companyLogo: EALogo, salary: 300000, location: 'California, USA'},
        { id: 4, jobTitle: 'Mechanical Engineer', company: 'Apple', companyLogo: appleLogo, salary: 990000, location: 'Florida, USA'},
        { id: 5, jobTitle: 'Software Engineer', company: 'Facebook', companyLogo: facebookLogo, salary: 148000, location: 'London, UK'},
        { id: 6, jobTitle: 'Cloud Engineer', company: 'Google', companyLogo: googleLogo, salary: 157000, location: 'California, USA'},
        { id: 7, jobTitle: 'Systems Administrator', company: 'Linux', companyLogo: linuxLogo, salary: 890000, location: 'California, USA'},
        { id: 8, jobTitle: 'Systems Administrator', company: 'Oracle', companyLogo: oracleLogo, salary: 889000, location: 'Texas, USA'},
        { id: 9, jobTitle: 'Video Game Developer', company: 'Rockstar Games', companyLogo: rockstarGamesLogo, salary:700000, location: 'New York, USA'},
        { id: 10, jobTitle: 'Software Developer', company: 'Twitter', companyLogo: twitterLogo, salary: 600000, location: 'California, USA'},
    ];
    return(
        <View data = {popularJobs} style = {popularJobsListStyles.popularJobsListContainer}>
            {popularJobs.map(job => (
                <PopularJobsCard
                    key = {job.id}
                    jobTitle = {job.jobTitle}
                    company = {job.company}
                    companyLogo = {job.companyLogo}
                    salary = {job.salary}
                    location = {job.location}
                />
            ))
        }
        </View>
    )
}