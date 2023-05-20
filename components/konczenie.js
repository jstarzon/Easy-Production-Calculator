
import React, {useState} from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput } from 'react-native';


const Koniec = () => {
  const placeholders = {
    pobrane: 'Pobrane Banderole',
    produkcja: 'Produkcja',
    tacka: 'Tacka',
    reszta: 'Reszta',
    maszyna: 'Maszyna',
    niepelneark: 'Niepełne Arkusze',
    niepelnepal: 'Niepełna Paleta',
    arkusze: 'Arkusze',
    jakosc: 'Jakosc',
    inne: 'Inne (zebrane/znalezione)',
  };
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
  const handleInputChange = (value, setState) => {
    const numericValue = value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    const sanitizedValue = Math.max(0, parseInt(numericValue, 10)); // Ensure value is not less than zero

    if (value === '' || isNaN(sanitizedValue)) {
      setState(value.placeholders);
      return;
    }
  
    setState(sanitizedValue.toString());
  };

  const calculateBanderole = () => {
    const result =
      Number(tacka) +
      Number(produkcja) +
      Number(reszta) +
      Number(maszyna) +
      Number(arkusze) +
      Number(jakosc) +
      Number(niepelneark) +
      Number(niepelnepal) +
      Number(inne) -
      Number(pobrane);

    return result;
  };

  const calculateTOK = () => {
    const result =
      Number(tacka) +
      Number(reszta) +
      Number(maszyna) +
      Number(niepelneark) +
      Number(niepelnepal) +
      Number(inne);

    return Math.max(0, result);
  };
  return (    

    <SafeAreaView>
        <Text>Kalkulator Banderol</Text>
          <TextInput
            value={pobrane}
            placeholder={placeholders.pobrane}
            onChangeText={(text) => handleInputChange(text, setPobrane)}
            style={styles.input}
          />
          <TextInput
            value={produkcja}
            placeholder={placeholders.produkcja}
            onChangeText={(text) => handleInputChange(text, setProdukcja)}
            style={styles.input}
          />
          <TextInput
            value={tacka}
            placeholder={placeholders.tacka}
            onChangeText={(text) => handleInputChange(text, setTacka)}
            style={styles.input}
          />
          <TextInput
            value={reszta}
            placeholder={placeholders.reszta}
            onChangeText={(text) => handleInputChange(text, setReszta)}
            style={styles.input}
          />
          <TextInput
            value={maszyna}
            placeholder={placeholders.maszyna}
            onChangeText={(text) => handleInputChange(text, setMaszyna)}
            style={styles.input}
          />
          <TextInput
            value={niepelneark}
            placeholder={placeholders.niepelneark}
            onChangeText={(text) => handleInputChange(text, setNiepelneArk)}
            style={styles.input}
          />
          <TextInput
            value={niepelnepal}
            placeholder={placeholders.niepelnepal}
            onChangeText={(text) => handleInputChange(text, setNiepelnePal)}
            style={styles.input}
          />
          <TextInput
            value={arkusze}
            placeholder={placeholders.arkusze}
            onChangeText={(text) => handleInputChange(text, setArkusze)}
            style={styles.input}
          />
          <TextInput
            value={jakosc}
            placeholder={placeholders.jakosc}
            onChangeText={(text) => handleInputChange(text, setJakosc)}
            style={styles.input}
          />
          <TextInput
            value={inne}
            placeholder={placeholders.inne}
            onChangeText={(text) => handleInputChange(text, setInne)}
            style={styles.input}
          />
           <Text style={[styles.BANDEROLE, { color: calculateBanderole() < 0 ? 'red' : 'green' }]}>
            STRATA/ZYSK: {calculateBanderole()}
          </Text>
          <Text style={[styles.TOK]}>
            TOK: {calculateTOK()}
          </Text>
        </SafeAreaView>
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
    fontWeight: "bold"
  },
  TOK: {
    fontSize: 15,
    fontWeight: "bold",
    color:"green"
  },
  
});

export default Koniec;