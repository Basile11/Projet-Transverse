import { View, Text, StyleSheet, FlatList, Pressable,TouchableOpacity, Button } from 'react-native'
import {useState, useEffect} from 'react'
import React from 'react';

import {firebase} from '../../../../config';
import { useNavigation } from '@react-navigation/core';
import { useRoute } from '@react-navigation/core';

// import Vin from '../Vin/Vin';

const Cave = () => {
    const [users, setUser] = useState([]);
    const todosRef = firebase.firestore().collection('Cave');

    const navigation = useNavigation();

    const OpenVin = (Nom) => {
      navigation.navigate('Vin', {Nom: Nom});
    }

    useEffect(() => {
        todosRef.onSnapshot(
            querySnapshot => {
                const users = [];
                querySnapshot.forEach(doc => {
                    const {Annee, Domaine, Nom, Stock, Vigneron, Type} = doc.data();
                    users.push({
                      id: doc.id,
                      Annee,
                      Domaine,
                      Nom,
                      Stock,
                      Vigneron,
                      Type            
                    })
                });
                setUser(users);
            },
        )
    }, [])

    
    return (
        <View style={{flex:1, marginTop:100}}>
            <FlatList
                style={{height:'100%'}}
                data={users}
                numColumns={1}
                renderItem={({item}) => (                    
                    <TouchableOpacity 
                      style={[
                        styles.container,
                        item.Type=='Rouge' ? {backgroundColor:'#E28686'} : item.Type=='Blanc' ? {backgroundColor:'#FFF8E8'} : item.Type=='Rose' ? {backgroundColor:'#FFE5E5'} : {backgroundColor:'#CBCBCB'}]}
                    //   onPress={OpenVin}
                      onPress={() =>{OpenVin(item.Nom)}}
                    //   onPress={() => {
                    //     navigation.navigate(Vin, {
                    //     //   Nom: item.Nom,
                    //       otherParam: 'anything you want here',
                    //     });}}

                    >
                        <View style={styles.innerContainer}>
                            <Text style={styles.itemHeading}>{item.Nom}</Text>
                            <Text style={styles.itemtext}>{item.Annee}</Text>
                            <Text style={styles.itemtext}>{item.Domaine}</Text>
                            <Text style={styles.itemtext}>{item.Vigneron}</Text>
                            <Text style={styles.itemtext}>{item.Stock}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default Cave;

const styles = StyleSheet.create({
    container:{
        // backgroundColor: '#E28686',
        padding: 15,
        borderRadius:15,
        margin: 5,
        marginHorizontal:10,
    },
    innerContainer:{
        flexDirection:'column',
        justifyContent:'space-between',
        // alignItems:'center',
    },
    itemHeading:{
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemtext:{
        fontSize: 12,
        fontWeight: 'bold',
    }
})