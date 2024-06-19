// React Native components
import { View, Image, Text} from 'react-native';

// Styles
import { userProfileStyles } from '../../styles/home-styles/userProfileStyles';

// Assets
import profileImage from '../../assets/profile-image.png';

export default function UserProfile({name, email}) {
    return(
        <View style = {userProfileStyles.userProfileContainer}>
            <View style = {userProfileStyles.nameAndEmail}>
                <Text style = {userProfileStyles.name}>{name}</Text>
                <Text style = {userProfileStyles.email}>{email}</Text>
            </View>
            <View style = {userProfileStyles.imageAndStatus}>
                <Image source = {profileImage} style = {userProfileStyles.userProfileImage} />
                <View style = {userProfileStyles.userStatus}></View>
            </View>
        </View>
    )
}