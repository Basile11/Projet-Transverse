import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import Icon_footer from './Icon_footer';

import Home from '../../screen/Home/Home';
import Option from '../../screen/Option/Option';
import Notif from '../../screen/Notif/Notif';

export default function Footer() {  

    const navigation = useNavigation();
    
    const Optionpress = () => {
      navigation.navigate(Option);
    }
    const Homepress = () => {
      console.log('Home');
      navigation.navigate(Home);
    }
    const Notificationpress = () => {
      navigation.navigate(Notif);
    }
    
    const { width, height } = Dimensions.get('window');
  
    const styles = StyleSheet.create({
      container: {
        height: height,
      },
      footer: {
        position: 'absolute',
        backgroundColor: '#2F3031',
        backgroundColor: 'black',
        borderBottomColor: 'black',
        bottom: 0,
        left: 0,
        right: 0,
      },
      iconfooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: height * 0.03,
        marginTop: height * 0.03,
        marginLeft: width * 0.1,
        marginRight: width * 0.1,
        
      },
      cercle_bas: {
        position: 'absolute',
        width: '100%',        
        height: height * 0.9049,        
        left: 0,
        borderRadius: 90,
        backgroundColor: '#F5F5F5',
    },
    rect_bas: {
      backgroundColor: 'black',
      bottom: 0,
      left: 0,
      height: height * 0.9049,
      width: width*0.5,
    },  
    });

    return (
    <View style={styles.container}>
        <View style={styles.rect_bas}></View>
        <View style={styles.cercle_bas}></View>
        
        <View style={styles.footer}>
            <View style={styles.iconfooter}>
                <Icon_footer text='Option' onPress={Optionpress}/>
                <Icon_footer text='Home' onPress={Homepress}/>
                <Icon_footer text='bell' onPress={Notificationpress}/>
            </View>
        </View>
    </View>
    
  );
}

