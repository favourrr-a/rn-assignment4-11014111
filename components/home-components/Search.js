// React Native components
import { View, Image, TextInput } from 'react-native';

// Styles
import { searchStyles } from '../../styles/home-styles/searchStyles.js';

// Assets
import searchIcon from '../../assets/search-icon.png';
import filterIcon from '../../assets/filter-icon.png';

export default function SearchBar() {
    return(
        <View style = {searchStyles.searchContainer}>
            <View style = {searchStyles.searchBar}>
                <Image source = {searchIcon} style = {searchStyles.searchIcon}/>
                <TextInput placeholder = 'Search a job or position'/>
            </View>
            <View style = {searchStyles.filterIconContainer}>
            <Image source = {filterIcon} style = {searchStyles.filterIcon}/>
            </View>
        </View>
    );
}