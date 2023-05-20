import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput } from 'react-native';

const App = () => {
  const [pobrane, setPobrane] = useState('');
  const [tacka, setTacka] = useState('');
  // Other state variables and their setters

  const handleInputChange = (value, setState) => {
    const numericValue = value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    const sanitizedValue = Math.max(0, parseInt(numericValue, 10)); // Ensure value is not less than zero
    setState(sanitizedValue.toString());
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* Render TextInput components */}
      </View>
    </SafeAreaView>
  );
};

// Styles

export default App;
