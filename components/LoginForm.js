// React Native components
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

// Styles
import { loginFormStyles } from '../styles/loginFormStyles';

export default function LoginForm({navigation}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleLogin = () => {
        if(name === '' || email === '') {
            Alert.alert('Name and Email are required');
            return;
        }
        else if(name.length < 3 || email.length < 3) {
            Alert.alert('Name and Email must be at least 3 characters');
            return;
        }
        else{
            navigation.navigate('Home');
        }
    }

    return(
        <View style = {loginFormStyles.loginFormContainer}>
            <TextInput placeholder = 'Name' value = {name} onChangeText = {setName} style = {loginFormStyles.input} />
            <TextInput placeholder = 'Email' value = {email} onChangeText = {setEmail} style = {loginFormStyles.input} />
            <TouchableOpacity style = {loginFormStyles.loginButton} onPress = {handleLogin}>
                    <Text style = {loginFormStyles.loginButtonText}> Log in </Text>
            </TouchableOpacity>        
        </View>
    );
}