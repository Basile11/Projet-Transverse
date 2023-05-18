import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, Text, View, Dimensions, FlatList, TouchableOpacity } from 'react-native';

import { firebase, app } from '../../../config.js'
import Auth from '../../screen/Auth/Auth.js'


const PARAM = [
  { id: '1', title: 'Général'},
  { id: '2', title: 'Utilisateurs'},
  { id: '3', title: 'Sécurité'},
  { id: '4', title: 'Aide'},
  { id: '5', title: 'A propos'},
  { id: '6', title: 'Déconnexion'},
];

export default function Option() {
  const navigation = useNavigation();
  const { width, height } = Dimensions.get('window');

  const styles = StyleSheet.create({
    container: {
      height: height,
      backgroundColor : 'black',
    },

    title: {
        position: 'absolute',
        top: height*0.13,
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        left: width*0.075,
    },

    flatList: {
      position: 'absolute',
      top: height*0.3,
      bottom: height*0.095,
      flex: 1,
      width: width,
      shadowColor: 'black',
      shadowOffset: {width: 0, height: 5},
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },

    item: {
      position: 'relative',
      flexDirection: 'row',
      width: width * 0.85,
      height: height * 0.09,
      height: height * 0.075,
      left: width*0.075,
      backgroundColor: 'black',
      alignItems: 'center',
      borderBottomWidth: 2,
      borderColor: 'white',
    },
    
    name: {
      position: 'absolute',
      fontSize: 21,
      left : width*0.05,
      fontWeight: 'bold',
      color: 'white',
    },
  
  });
  
  const renderItem = ({ item, index }) => {
    const handleItemPress = () => {
      if (index === PARAM.length - 1) {
        SignOUT();
      }
      // Autres actions à effectuer pour les autres éléments de la liste
    };
  
    return (
      <TouchableOpacity style={styles.item} onPress={handleItemPress}>
        <Text style={styles.name}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  const SignOUT = () => {
    // Logique de déconnexion ici
    firebase.auth().signOut()
    .then(() => {
      // Déconnexion réussie
      console.log('Utilisateur déconnecté');
      
      // navigation.navigate('Auth');
      navigation.navigate(Auth);
    })
    .catch((error) => {
      // Gestion des erreurs
      console.log('Erreur lors de la déconnexion:', error);
    });
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Paramètres</Text>
      <FlatList
        data={PARAM}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.flatList}
      />
    </View>
  );
}