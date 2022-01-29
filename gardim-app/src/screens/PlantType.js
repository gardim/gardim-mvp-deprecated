import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import BottomButton from '../component/BottomButton';
import INFO from '../constants/PlantInfo';

import { RegistrationContext } from '../provider';

function PlantType({ navigation }) {
  const { type, setType } = React.useContext(RegistrationContext);
  const [selectedValue, setSelectedValue] = useState('pimenteira');

  const onPress = () => {
    navigation.navigate('PlantName');
  };

  useEffect(async () => {
    setType(INFO[0]);
  }, []);

  const pickerItems = INFO.map((e) => (
    <Picker.Item label={e.name} value={e} key={e.type} />
  ));

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Selecione o tipo da planta</Text>
      <Picker
        selectedValue={type}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setType(itemValue)}
      >
        {pickerItems}
      </Picker>
      <BottomButton text={'Continuar'} onPressCallback={onPress} />
    </View>
  );
}

export default PlantType;
