import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

const ForgotPwdScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Forgot Password</Text>
            <Text style={styles.subtitle}>Enter your email address below and we will send you an email with instructions on how to change your password.</Text>
            <View>
                <TextInput placeholder='Enter your email' style={styles.textinput} />
            </View>
            <TouchableOpacity onPress={() => {}}>
                <View style={styles.button}>
                    <Text style={styles.buttonTxt}>Send</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ForgotPwdScreen;