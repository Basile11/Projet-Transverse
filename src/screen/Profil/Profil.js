import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, Text, View, Dimensions, Image, useState} from 'react-native';


import Footer from '../../components/Footer/Footer.js';

import { firebase, app } from '../../../config.js'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';




export default function Profil() {
  const navigation = useNavigation();

  const { width, height } = Dimensions.get('window');

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    // Fonction à exécuter au chargement de l'écran
    console.log('L\'écran Commande est chargé.');
    
    
    // CHEMIN DU BAR
    const documentRef = firebase.firestore().doc(`/Bars/Le Train bleu/Info/Info_restaurant`);

    // Effectuez la requête pour récupérer les données du document
    documentRef
      .get()
      .then((documentSnapshot) => {
        if (documentSnapshot.exists) {
          const retrievedData = documentSnapshot.data();
          // Faites quelque chose avec les données
          console.log("Tiens la data");
          console.log(retrievedData);
          setData(retrievedData); // Met à jour la valeur de la variable d'état avec les données récupérées
        } else {
          // Document non trouvé
          console.log('Le document n\'existe pas.');
        }
      })
      .catch((error) => {
        // Gestion des erreurs
        console.log('Erreur lors de la récupération des données:', error);
      });
  }, []);

  const styles = StyleSheet.create({
    container: {
      backgroundColor : 'black',
    //   alignItems: 'center',
    },
    page: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'absolute',
        top: 0,
    },
    
    title: {
        position: 'absolute',
        top: height*0.25,
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        textAligne : 'center',
    },
    text: {  
        position: 'absolute',
        // top: height*0.4,
        color: 'white',
        fontSize: 20,
        // textAligne : 'center',
    },

    image: {
        position: 'absolute',
        top: height*0.4,
    },
  
  });
  
  return (
    <View style={[styles.container]}> 
        
        <View style={styles.footer}>
            <Footer color='black'/>
        </View> 
        {data && (
        <View style={styles.page}>
            <Text style={styles.title}>{data.Nom}</Text>    
            <Image style={styles.image} source={require('../../../img/logo_train_bleu.png')}/>
            <Text style={[styles.text, {top:height*0.6}]}>{data.Adresse}</Text>
            <Text style={[styles.text, {top:height*0.64}]}>{data.Numéro}</Text>
            <Text style={[styles.text, {top:height*0.68}]}>{data.SiteWeb}</Text>
        </View>
        )}
    </View>
    
  );
}