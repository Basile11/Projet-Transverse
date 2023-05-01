import { View, Image, Text, TouchableOpacity, StyleSheet, TextInput, Dimensions } from 'react-native'
import React, { useState }from 'react'

export default function Searchbar() {
    const { width, height } = Dimensions.get('window');
    
    const styles = StyleSheet.create({

        Searchbar: {
            flexDirection: 'row',
            position: 'absolute',
            width: width * 0.60,
            height: height * 0.052,
            left: '30%',
            top : height * 0.18 - height * 0.105,

            backgroundColor: '#6A6F75',
            borderRadius: 25,
    
            paddingLeft: 30,
            alignItems: 'center',
        },
    
        search: {
            fontSize: height * 0.02,
            color: '#FFFFFF',
        },

        icon_search: {
            width: height * 0.03, 
            height: height * 0.03, 
            position: 'absolute', 
            right: '8%'
        }
    });

    return (
         <View style={styles.Searchbar}>
            <TextInput style={styles.search} placeholder={'Rechercher'} placeholderTextColor={'#FFFFFF'} />

            {/* A faire pour l'action de la loupe 
            <TouchableOpacity onPress={ProfilPress} style={styles.utilisateur}>
                <Image source={require('../../img/loupe.png')}style={styles.icon_search}/>
            </TouchableOpacity> */}

            <Image source={require('../../img/loupe.png')}style={styles.icon_search}/>  
            
        </View>
    );
};


