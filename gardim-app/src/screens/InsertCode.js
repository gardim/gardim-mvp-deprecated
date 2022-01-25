import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { RegistrationContext } from '../provider';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const CELL_COUNT = 6;

function InsertCode({ navigation }) {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const { code, setCode } = React.useContext(RegistrationContext);
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [number, onChangeNumber] = React.useState(null);

  const onPress = (text) => {
    setCode(text);
    console.log(text);
    navigation.navigate('PlantType');
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      }}
    >
      <Text>Digite o código do vaso:</Text>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="numeric"
        textContentType="oneTimeCode"
        onEndEditing={() => onPress(value)}
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}
          >
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  codeFieldRoot: { margin: 20 },
  cell: {
    width: 40,
    height: 50,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#00000030',
    marginHorizontal: 5,
    borderRadius: 10,
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
  buttonText: {
    fontSize: 20,
    marginRight: 12,
  },
});

export default InsertCode;
