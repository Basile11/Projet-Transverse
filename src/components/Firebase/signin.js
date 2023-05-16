import { View, Image, Text, StyleSheet, Dimensions, Button } from 'react-native'
import React, { useState }from 'react'
import { useNavigation } from '@react-navigation/native';
import { firebase, app } from '../../../config.js'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import {
  addDoc,
  collection,
  collectionGroup,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";

import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  linkWithRedirect,
} from "firebase/auth";

const auth = firebase.auth()


export default class Signin extends React.Component {
  
  render () {
    return (
      <View style={style.petitbouton}>
          <Button onPress={() => this.fonctionfirebasesign()} title="Sign in"/>
          <Button onPress={() => this.fonctionfirebasesignout()} title="Sign out"/>
        </View>
    )
  }

  fonctionfirebasesign() {
    
    // s'authentifier pour la premier fois

    /*
    auth.createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
  .then(() => {
    console.log('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });*/

  // Fonction d'authentification


const signIn = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Authentification réussie
      const user = userCredential.user;
      console.log('Utilisateur connecté:', user.uid);
    })
    .catch((error) => {
      // Gestion des erreurs
      console.log('Erreur d\'authentification:', error);
    });
};
signIn('jane.doe@example.com', 'SuperSecretPassword!');
console.log(firebase.auth().currentUser)
}


  fonctionfirebasesignout() {

  // SignOUT
  const signOUT = () => {
  firebase.auth().signOut()
  .then(() => {
    // Déconnexion réussie
    console.log('Utilisateur déconnecté');
  })
  .catch((error) => {
    // Gestion des erreurs
    console.log('Erreur lors de la déconnexion:', error);
  });
}
signOUT();

  }
};

const style = StyleSheet.create({
  petitbouton : {
      margin :20
  },
  view : {
    margin : 20
  }
})




