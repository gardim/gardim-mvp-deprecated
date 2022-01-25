import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import BottomButton from '../component/BottomButton';

import { RegistrationContext } from '../provider';

function PlantType({ navigation }) {
  const { type, setType } = React.useContext(RegistrationContext);
  const [selectedValue, setSelectedValue] = useState('pimenteira');

  const onPress = () => {
    navigation.navigate('PlantName');
  };

  useEffect(async () => {
    setType('pimenteira');
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Selecione o tipo da planta</Text>
      <Picker
        selectedValue={type}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setType(itemValue)}
      >
        <Picker.Item label="Pimenteira" value="pimenteira" />
        <Picker.Item label="Roseira" value="roseira" />
        <Picker.Item label="Petunia" value="petunia" />
        <Picker.Item label="Suculenta" value="suculenta" />
        <Picker.Item label="Cacto" value="cacto" />
      </Picker>
      <BottomButton text={'Continue'} onPressCallback={onPress} />
    </View>
  );
}

export default PlantType;
