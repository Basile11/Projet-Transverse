import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useRoute, useEffect } from '@react-navigation/core';
import React from 'react';

// import firestore from '@react-native-firebase/firestore';

// async function readvin(){
//   const snapshot = await firestore().collection('Vin').get();
//   snapshot.forEach(doc => {
//     console.log(doc.id, '=>', doc.data());
//   });
// }

export default function Vin({route, navigation}) {
    const { Nom } = route.params;
    
    // const lecture = firestore().collection('Cave').get();

  

    // function onResult(QuerySnapshot) {
    //   console.log('Got Users collection result.');
    // }
    //     function onError(error) {
    //   console.error(error);
    // }
    // firestore().collection('Users').onSnapshot(onResult, onError);

    // useEffect(() => {
    //   const subscriber = firestore()
    //     .collection('Cave')
    //     // .doc(userId)
    //     .onSnapshot(documentSnapshot => {
    //       console.log('User data: ', documentSnapshot.data());
    //     });
  
    //   // Stop listening for updates when no longer required
    //   return () => subscriber();
    // }, [userId]);


    return (
    <View style={styles.container}>
        {/* readvin(); */}
        <Text>{Nom}</Text>
        <StatusBar style="auto" />
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



