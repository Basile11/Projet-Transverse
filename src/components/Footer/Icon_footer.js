import { View, Image, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import React, { useState }from 'react'
import { useNavigation } from '@react-navigation/native';


export default function Icon_footer({text, onPress}) {
  const [texte] = useState(text);
  
  const { width, height } = Dimensions.get('window');

  const styles = StyleSheet.create({
    Image: {
      width: height * 0.035, 
      height: height * 0.035, 
      marginRight: 25, 
      marginLeft: 25,
    }
  });

  const navigation = useNavigation();

  return (

      <View>
        {
        texte === 'Option' ? (
          <TouchableOpacity onPress={onPress}>
            <Image
              source={require('../../../img/more.png')}
              style={styles.Image}/>
          </TouchableOpacity>

        ) : texte === 'Home' ?(
          <TouchableOpacity onPress={onPress}>
            <Image
              source={require('../../../img/home.png')}
              style={styles.Image}/>
          </TouchableOpacity>

        ) : texte === 'bell' ?(
          <TouchableOpacity onPress={onPress}>
            <Image
              source={require('../../../img/bell.png')}
              style={styles.Image}/>
          </TouchableOpacity>

        ) : (
          <Text>Section introuvable</Text>
        )}
      </View>
  );
};





