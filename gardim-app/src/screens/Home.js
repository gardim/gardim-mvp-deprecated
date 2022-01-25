import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import ProfileList from '../component/ProfileList';
import { RegistrationContext } from '../provider';

function HomeScreen({ navigation }) {
  const { data, setData } = React.useContext(RegistrationContext);
  return (
    <View style={data.length == 0 ? styles.alone : styles.together}>
      <ProfileList
        list={data}
        onPressCallback={(name, type, code) =>
          navigation.navigate('Details', { name, type, code })
        }
      ></ProfileList>
      <Button
        title="Adicionar um vaso"
        onPress={() => navigation.navigate('InsertCode')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  alone: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  together: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
});

export default HomeScreen;
