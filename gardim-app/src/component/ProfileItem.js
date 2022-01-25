import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

function ProfileItem({ name, type, code, onPressCallback }) {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
      }}
      onPress={(e) => onPressCallback(name, type, code)}
    >
      <View>
        <Ionicons name="leaf" size={30} color="black" />
      </View>
      <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.type}>{type}</Text>
      </View>
      <View style={{ marginLeft: 'auto' }}>
        <Feather name="arrow-right" size={28} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  type: {
    fontSize: 18,
  },
});

export default ProfileItem;
