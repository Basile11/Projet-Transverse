import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, Text, View, Dimensions, StatusBar, TextInput, TouchableOpacity } from 'react-native';

import Footer from '../../components/Footer/Footer.js';
// import Signin from '../../components/Firebase/signin.js';


export default function Auth() {
  const navigation = useNavigation();

  const { width, height } = Dimensions.get('window');

  const Signin = async() => {
    try {
        navigation.navigate('Home');
    }
    catch (e) {
        console.log(e);
    }
    };

    const Signup = async() => {
        try {
            navigation.navigate('Home');
        }
        catch (e) {
            console.log(e);
        }
    };


  const styles = StyleSheet.create({
    container: {
        backgroundColor : 'black',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    email: {
        backgroundColor : 'white',
        width: height * 0.3,
        height: height * 0.05,
        borderRadius: 30,
        textAlign: 'center',
        fontSize: 20,
        color: 'grey',
        fontStyle: 'italic',
        marginTop: 15,
    },

    viewbutton: {
        // position: 'absolute',
        // top: height*0.24,
        // width: width*0.8,
        // backgroundColor: '#89CD88',
        flexDirection: 'row',
        alignItems: 'center',
      },
      button: {
        // position: 'absolute',
        borderRadius: 30,
        // width: width*0.3,
        height: height*0.05,
        width: width*0.3,
        backgroundColor: 'black',
        borderColor: 'white',
        borderWidth: 1,
        margin: width*0.01,
        marginTop: height*0.03,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#89CD88',
      },
      textbut: {
        fontSize: height*0.02,
        fontWeight: 'bold',
        color: 'white',
      },

      gestock: {
        position: 'absolute',
        top: height*0.15,
        fontSize: height*0.07,
        fontWeight: 'bold',
        color: 'white',
        },




  
  });
  


  return (
    <View style={[styles.container]}> 
      <StatusBar barStyle="light-content" />

        <Text style={styles.gestock}>Gestock</Text>
        
        <TextInput style={styles.email}> Email </TextInput>
        <TextInput style={styles.email}> Mot de passe </TextInput>

        <View style={styles.viewbutton}>
            <TouchableOpacity onPress={Signin} style={styles.button}>
                <Text style={styles.textbut}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={Signup} style={styles.button}>
                <Text style={styles.textbut}>Sign up</Text>
            </TouchableOpacity>
        </View>
    </View>
    
  );
}