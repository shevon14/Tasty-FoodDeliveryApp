import React from 'react';
import { View, Text, ImageBackground, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { COLORS } from '../../constants/theme';

const SignUpScreen = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/background.png')}
                style={{
                    flex: 1
                }}
                resizeMode= "cover"
            >
                <ScrollView>
                    <View style={styles.topContainer}>
                        <Text style={styles.title}>Get Started</Text>
                        <Text style={styles.subtitle}>Sign up to continue</Text>
                    </View>
                    <View style={styles.dataContainer}>
                        <TextInput placeholder='Email' style={styles.textinput} placeholderTextColor={COLORS.white} />
                        <TextInput placeholder='Contact Number' style={styles.textinput} placeholderTextColor={COLORS.white} />
                        <TextInput placeholder='Password' style={styles.textinput} placeholderTextColor={COLORS.white} />
                    </View>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity onPress={() => {}}>
                            <View style={styles.button1}>
                                <Text style={styles.btnText}>SIGN UP</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {}}>
                            <View style={styles.button2}>
                                <View style={styles.logo}>
                                    <Image source={require('../../assets/facebook.png')} 
                                        resizeMode="contain"   
                                        style={{
                                            width: 30,
                                            height: 30,
                                        }}
                                    />
                                </View>
                                <Text style={styles.btnText}>Sign In with facebook</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottomContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('signin')}>
                            <Text style={styles.text}>Already have an account? | Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    )
}

export default SignUpScreen;