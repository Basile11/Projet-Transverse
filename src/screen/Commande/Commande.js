import { Button, StyleSheet, Text, View } from 'react-native';
import Searchbar from '../../components/Header/Searchbar.js';

import React from 'react';
import { useNavigation } from '@react-navigation/core';


import HeaderRest from '../../components/Header/HeaderRest.js';
import Footer from '../../components/Footer/Footer.js';


import { firebase, app } from '../../../config.js'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import {addDoc, collection, collectionGroup, deleteDoc, doc, getDocs, getFirestore, limit, onSnapshot, orderBy, query, serverTimestamp, setDoc, updateDoc, where,} from "firebase/firestore";
import { getAuth, signInWithRedirect, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink, linkWithRedirect,} from "firebase/auth";

const auth = firebase.auth()

const userId = firebase.auth().currentUser.uid;
const documentRef = firebase.firestore().doc(`Users/${userId}`);

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


const Commande = () => {
  const navigation = useNavigation();

  const [data, setData] = useState(null);

  const TestFirebase = () => {
    const userId = firebase.auth().currentUser.uid;
    const documentRef = firebase.firestore().doc(`Users/${userId}`);

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
  })};

  return (
    <View>
      <View style={[styles.container]}> 
        
        {/* <Searchbar/> */}
        

        
        <View style={styles.footer}>
          <Footer color='#F5F5F5'/>
        </View>

        <View style={styles.header}>
          <HeaderRest name='Commande'/>
        </View>

        {/* <Text style={styles.test}>Nom du restaurant</Text> */}

        <Button title="Go to Home"  onPress={TestFirebase} />



      </View>
    </View>

  );
}
export default Commande;

const styles = StyleSheet.create({
  container: {
    backgroundColor : '#F5F5F5',
  },

  name:{
    position: 'absolute',
    width: 239,
    height: 53,
    left: 44,
    top: 100,
    fontSize: 40,
    Lineheight: 53,
    color: '#FFFFFF',
  },

  localisation: {
    position: 'absolute',
    width: 147,
    height: 35,
    left: 125,
    top: 165,
    fontSize: 28,
    color: '#97B5EB',
  },

  button: {
    marginTop: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },

  test: {
    position: 'absolute',
    marginTop: 400,
    fontSize: 40,
    color: '#97B5EB',
    color: '#000000',
    
  },
});