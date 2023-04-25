import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState }from 'react'

export default function Searchbar() {
    return (
         <View style={styles.Searchbar}>
            <Text style={styles.search}>{'Rechercher'}</Text>
            <Image source={require('../../img/loupe.png')}style={{ width: 30, height: 30, position: 'absolute', right: 30}}/>
        </View>
    );
};

const styles = StyleSheet.create({

    Searchbar: {
        flexDirection: 'row',
        position: 'absolute',
        width: 280,
        height: 58,
        left: 57,
        top: 84,

        backgroundColor: '#6A6F75',
        borderRadius: 25,

        paddingLeft: 30,
        alignItems: 'center',
    },

    search: {
        // fontFamily: 'Akshar',
        fontWeight: 500,
        fontSize: 15,
        color: '#FFFFFF',
    }
});
