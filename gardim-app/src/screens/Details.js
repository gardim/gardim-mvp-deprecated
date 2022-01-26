import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import client from '../utils/ClientMQTT';
import Card from '../component/Card';
import { validator } from '../utils/Validator';

function DetailsScreen({ route, navigation }) {
  const { name, type, code } = route.params;
  const [humidity, setHumidity] = useState('0');

  let receiver = null;
  useEffect(() => {
    console.log('codigo' + code);
    client(code, setHumidity);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.type}>{type.name}</Text>
      <Card
        title={'Humidity'}
        value={humidity}
        alert={validator(type, parseInt(humidity))}
      />
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
