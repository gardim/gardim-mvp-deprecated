import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import BottomButton from '../component/BottomButton';
import { storeData } from '../storage';

import { RegistrationContext } from '../provider';

function PlantName({ navigation }) {
  const { name, setName, code, type, data, setData } =
    React.useContext(RegistrationContext);

  const onPress = () => {
    setData([...data, { name, code, type }]);
    storeData(data);
    navigation.navigate('Home');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Dê um nome à sua plantinha!</Text>
      <TextInput style={styles.input} onChangeText={(text) => setName(text)} />
      <BottomButton text={'Terminar'} onPressCallback={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    width: '60%',
    borderWidth: 1,
    padding: 10,
  },
});

export default PlantName;
