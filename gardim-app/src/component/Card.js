import React from 'react';
import { Fontisto } from '@expo/vector-icons';
import { Text, StyleSheet, View } from 'react-native';

function Card({ title, value, alert }) {
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
        <Text style={styles.value}>{value}%</Text>
        <Text style={styles.title}>{alert}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
  },
  value: {
    fontSize: 50,
  },
});

export default Card;
