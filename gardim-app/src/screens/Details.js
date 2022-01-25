import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import client from '../utils/ClientMQTT';

function DetailsScreen({ route, navigation }) {
  const { name, type, code } = route.params;
  const { umidity, setUmidity } = useState('');

  let receiver = null;
  useEffect(() => {
    console.log('codigo' + code);
    client(code, setUmidity);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.type}>{type}</Text>
      <Text>{umidity}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  type: {
    fontSize: 30,
  },
});

export default DetailsScreen;
