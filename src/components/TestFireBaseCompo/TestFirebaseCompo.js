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


export default class TestFireBaseCompo extends React.Component {
  
  render () {
    return (
      <View style={style.view}>
        <Text>
          Test texte pour le compo firebasetest
        </Text>
        <Button onPress={() => this.fonctionfirebase()} title="APPUIER"/>

      </View>
    )
  }

  fonctionfirebase() {
    console.log("j'appuis ---------------------------------------------------------------------------------------");
    

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



  const db = getFirestore(app);
  //console.log(getAuth(app))
  console.log(firebase.auth().currentUser)
  //console.log(collection(db, "Users"))




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



// requete
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
//signOUT();

  }
};

const style = StyleSheet.create({
  view : {
    margin : 20
  }
})




