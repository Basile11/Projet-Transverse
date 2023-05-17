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
          <Button onPress={() => this.fonctionfirebasesignout()} title="Sign out"/>
        </View>
    )
  }

  fonctionfirebasesignout() {

  // SignOUT
  const signOUT = () => {
  firebase.auth().signOut()
  .then(() => {
    // Déconnexion réussie
    console.log('Utilisateur déconnecté');
    
    // navigation.navigate('Auth');
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




