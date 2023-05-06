import React, {lazy} from 'react';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';

import Icon_footer from './Icon_footer';

// const Home = lazy(() => import('../../screen/Home/Home'));
// import Home from '../../screen/Home/Home';
import Option from '../../screen/Option/Option';
import Notif from '../../screen/Notif/Notif';

export default function Footer({color}) {  

  const clr = '#F5F5F5'
  const navigation = useNavigation();
    const Optionpress = () => {
      navigation.navigate('Option');
    }
    const Homepress = () => {
      navigation.navigate('Home');
    }
    const Notificationpress = () => {
      navigation.navigate('Notif');
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
      backgroundColor: color,
  },
  rect_bas: {
    backgroundColor: 'black',
    bottom: 0,
    left: 0,
    height: height * 0.9049,
    width: width*0.5,
  },  
  Image: {
    width: height * 0.035, 
    height: height * 0.035, 
    marginRight: 25, 
    marginLeft: 25,
  }
  });

  return (
    <View style={styles.container}>
        
        
        <View style={styles.footer}>
            <View style={styles.iconfooter}>
              {/* <TouchableOpacity onPress={ProfilPress} style={styles.utilisateur}>
                <Icon_footer text='Option' onPress={Optionpress}/>  
              </TouchableOpacity>

              <TouchableOpacity onPress={ProfilPress} style={styles.utilisateur}>
                <Icon_footer text='Home' onPress={Homepress}/>
              </TouchableOpacity>
                
              <TouchableOpacity onPress={ProfilPress} style={styles.utilisateur}>
                <Icon_footer text='bell' onPress={Notificationpress}/>
              </TouchableOpacity> */}
                
                {/* <Icon_footer text='Option' onPress={Optionpress}/>
                <Icon_footer text='Home' onPress={Homepress}/>
                <Icon_footer text='bell' onPress={Notificationpress}/> */}

              <TouchableOpacity onPress={Optionpress} > 
                <Image
                  source={require('../../../img/more.png')}
                  style={styles.Image} />
              </TouchableOpacity>

              <TouchableOpacity onPress={Homepress}>
                <Image
                  source={require('../../../img/home.png')}
                  style={styles.Image}/>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={Notificationpress}>
                <Image
                  source={require('../../../img/bell.png')}
                  style={styles.Image}/>
              </TouchableOpacity>
            </View>
            
        </View>
        <View style={styles.rect_bas}></View>
        <View style={styles.cercle_bas}></View>
    </View>    
  );
}

