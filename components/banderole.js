
import React, {useState} from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput } from 'react-native';


const Banderole = () => {

  const [ilosc, setIlosc] = useState('');
  const [wiazki, setWiazki] = useState('');
  const [maszyna, setMaszyna] = useState('');

  return (    

      <View>
        <Text>Kalkulator Banderol</Text>
        <TextInput
          value={ilosc}
          onChangeText={(ilosc) => setIlosc(ilosc)}
          placeholder={'Ile w wiązce?'}
          style={styles.input}
        />
        <TextInput
          value={wiazki}
          onChangeText={(wiazki) => setWiazki(wiazki)}
          placeholder={'Ile wiązek?'}
          style={styles.input}
        />
        <TextInput
          value={tacka}
          onChangeText={(tacka) => setTacka(tacka)}
          placeholder={'Tacka'}
          style={styles.input}
        />
        <TextInput
          value={maszyna}
          onChangeText={(maszyna) => setMaszyna(maszyna)}
          placeholder={'Obroty maszyny'}
          style={styles.input}
        />
      </View>
  );
};


const styles = StyleSheet.create({
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

export default Banderole;