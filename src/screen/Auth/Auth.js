import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, Text, View, Dimensions, StatusBar, TextInput, TouchableOpacity } from 'react-native';

import { firebase, app } from '../../../config.js'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import Footer from '../../components/Footer/Footer.js';





export default function Auth() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const { width, height } = Dimensions.get('window');

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };


  //BUTTON SIGNIN
  const handleButtonSignin = () => {
    signInfirebase(email,password)
  };

  //BUTTON SIGNUP
  const handleButtonSignup = () => {
    authfirebase(email,password)
  };


  const signInfirebase = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Authentification réussie
        const user = userCredential.user;
        console.log('Utilisateur connecté:', user.uid);
        try {
          navigation.navigate('Home');
      }
      catch (e) {
          console.log(e);
      }
      })
      .catch((error) => {
        // Gestion des erreurs
        setErrorMessage('Erreur d\'authentification', error);
        console.log("naaaaa")
      });
  };
  

  const authfirebase = (email,password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(() => {
    console.log('User account created & signed in!');
    signInfirebase(email,password)
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      setErrorMessage('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      setErrorMessage('That email address is invalid!');
    }

    console.error(error);
  });
  }




  //STYLE
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
      whiteText: {
        color: 'white',
      },
  
  });
  




  return (
    <View style={[styles.container]}> 
      <StatusBar barStyle="light-content" />

        <Text style={styles.gestock}>Gestock</Text>
        
        {errorMessage !== '' && <Text style={styles.whiteText}>{errorMessage}</Text>}

        <TextInput style={styles.email}
        value={email}
        onChangeText={handleEmailChange}
        placeholder="Email"/>
        

        <TextInput style={styles.email}
        value={password}
        onChangeText={handlePasswordChange}
        placeholder="Mot de passe"
        secureTextEntry/>

        <View style={styles.viewbutton}>
            <TouchableOpacity onPress={handleButtonSignin} style={styles.button}>
                <Text style={styles.textbut}>Sign in</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleButtonSignup} style={styles.button}>
                <Text style={styles.textbut}>Sign up</Text>
            </TouchableOpacity>
        </View>
    </View>
    
  );
}