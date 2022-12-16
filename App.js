
import React, {useState} from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput } from 'react-native';
const App = () => {
  const [pobrane, setPobrane] = useState('');
  const [tacka, setTacka] = useState('');
  const [reszta, setReszta] = useState('');
  const [produkcja, setProdukcja] = useState('');
  const [arkusze, setArkusze] = useState('');
  const [niepelneark, setNiepelneArk] = useState('');
  const [niepelnepal, setNiepelnePal] = useState('');
  const [jakosc, setJakosc] = useState('');
  const [maszyna, setMaszyna] = useState('');
  const [inne, setInne] = useState('');
  return (    
    
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text>Kalkulator Banderol</Text>
        <TextInput
          value={pobrane}
          onChangeText={(pobrane) => setPobrane(pobrane)}
          placeholder={'Pobrane Banderole'}
          style={styles.input}
        />
        <TextInput
          value={produkcja}
          onChangeText={(produkcja) => setProdukcja(produkcja)}
          placeholder={'Produkcja'}
          style={styles.input}
        />
        <TextInput
          value={tacka}
          onChangeText={(tacka) => setTacka(tacka)}
          placeholder={'Tacka'}
          style={styles.input}
        />
        <TextInput
          value={reszta}
          onChangeText={(reszta) => setReszta(reszta)}
          placeholder={'Reszta'}
          style={styles.input}
        />
        <TextInput
          value={maszyna}
          onChangeText={(maszyna) => setMaszyna(maszyna)}
          placeholder={'Maszyna'}
          style={styles.input}
        />
        <TextInput
          value={arkusze}
          onChangeText={(arkusze) => setArkusze(arkusze)}
          placeholder={'Arkusze'}
          style={styles.input}
        />
        <TextInput
          value={jakosc}
          onChangeText={(jakosc) => setJakosc(jakosc)}
          placeholder={'Jakosc'}
          style={styles.input}
        />
        <TextInput
          value={niepelneark}
          onChangeText={(niepelneark) => setNiepelneArk(niepelneark)}
          placeholder={'Niepełne Arkusze'}
          style={styles.input}
        />
        <TextInput
          value={niepelnepal}
          onChangeText={(niepelnepal) => setNiepelnePal(niepelnepal)}
          placeholder={'Niepełne Arkusze'}
          style={styles.input}
        />
        <TextInput
          value={inne}
          onChangeText={(inne) => setInne(inne)}
          placeholder={'Inne (zebrane/znalezione)'}
          style={styles.input}
        />
        
        
        <Text style={styles.titleText}>{ (Number(tacka) + Number(produkcja) + Number(reszta) + Number(maszyna) + Number(arkusze) + Number(jakosc) + Number(niepelneark)+ Number(niepelnepal)+ Number(inne)) - Number(pobrane) }</Text>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 35,
    backgroundColor: '#ffffff',
  },
  input: {
    width: 250,
    height: 44,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#e8e8e8'
  },  
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: 'red'
  },
  
});

export default App;