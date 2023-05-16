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
  
  fonctionget() {
    const documentRef = firebase.firestore().doc(`/Bars/Le Train bleu/Stock/Cave/Vin rouge/Merlot`);
  
  // Effectuez la requête pour récupérer les données du document
  documentRef
    .get()
    .then((documentSnapshot) => {
      if (documentSnapshot.exists) {
        const data = documentSnapshot.data();
        // Faites quelque chose avec les données
        console.log("Tiens la data")
        console.log(data);
      } else {
        // Document non trouvé
        console.log('Le document n\'existe pas.');
      }
    })
    .catch((error) => {
      // Gestion des erreurs
      console.log('Erreur lors de la récupération des données:', error);
    });
  
  }


  
  render () {
    return (
      <View style={style.view}>
        <Text>
        <Text>{jsonData}</Text>
        </Text>
      </View>
    )
  }


  
};

const style = StyleSheet.create({
  view : {
    margin : 20
  }
})




