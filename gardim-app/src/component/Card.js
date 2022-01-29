import React from 'react';
import { Fontisto } from '@expo/vector-icons';
import { Text, StyleSheet, View } from 'react-native';

function Card({ title, value, alert }) {
  const status = () => {
    if (alert === 'alert') {
      return <Text style={styles.alert}>Alerta!</Text>;
    } else if (alert === 'caution') {
      return <Text style={styles.caution}>Cuidado!</Text>;
    } else {
      return <Text style={styles.good}>Perfeito!</Text>;
    }
  };
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#00000030',
        borderRadius: 10,
        paddingHorizontal: 20,
        marginVertical: 40,
      }}
    >
      <View>
        <Fontisto name="blood-drop" size={60} color="black" />
      </View>
      <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.value}>{value}</Text>
        {status()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
  value: {
    fontSize: 30,
  },
  alert: {
    color: '#900020',
    fontSize: 30,
  },
  caution: {
    color: '#f4c430',
    fontSize: 30,
  },
  good: {
    color: '#6b8e23',
    fontSize: 30,
  },
});

export default Card;
