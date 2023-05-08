import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState }from 'react'

export default function Menu_bar({text, onPress}) {
  const [texte] = useState(text);
  return (

      <View>
        {texte === 'Option' ? (
          <TouchableOpacity onPress={onPress}>
            <Image
              source={require('../../img/more.png')}
              style={styles.Image}/>
          </TouchableOpacity>

        ) : texte === 'Home' ?(
          <TouchableOpacity onPress={onPress}>
            <Image
              source={require('../../img/home.png')}
              style={styles.Image}/>
          </TouchableOpacity>

        ) : texte === 'Scan' ?(
          <TouchableOpacity onPress={onPress}>
            <Image
              source={require('../../img/qr-code-scan.png')}
              style={styles.Image}/>
          </TouchableOpacity>

        ) : texte === 'bell' ?(
          <TouchableOpacity onPress={onPress}>
            <Image
              source={require('../../img/bell.png')}
              style={styles.Image}/>
          </TouchableOpacity>

        ) : (
          <Text>Section introuvable</Text>
        )}
      </View>
  );
};

const styles = StyleSheet.create({
  Image: {
    width: 30, 
    height: 30, 
    marginRight: 25, 
    marginLeft: 25,
  }
});



