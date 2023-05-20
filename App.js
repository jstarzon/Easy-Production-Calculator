
import React, {useState} from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput } from 'react-native';

import MenuSimple from './components/menu';

import Koniec from './components/konczenie';
import Banderole from './components/konczenie';

const App = () => {

  return (    
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Banderole>      
        </Banderole>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 0,
    backgroundColor: '#ffffff',
  },
  input: {
    width: 250,
    height: 44,
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: '#e8e8e8'
  },  
  BANDEROLE: {
    fontSize: 15,
    fontWeight: "bold",
    color: 'red'
  },
  TOK: {
    fontSize: 15,
    fontWeight: "bold",
    color: 'green'
  },
  
});

export default App;