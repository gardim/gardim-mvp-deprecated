import React from 'react';
import ProfileItem from './ProfileItem';
import { StyleSheet, View } from 'react-native';

function ProfileList({ list, onPressCallback }) {
  const profileItems = list.map((element) => (
    <ProfileItem
      key={element.code}
      name={element.name}
      type={element.type}
      code={element.code}
      onPressCallback={onPressCallback}
    />
  ));

  return <View style={styles.view}>{profileItems}</View>;
}

const styles = StyleSheet.create({
  view: {
    alignSelf: 'stretch',
    marginHorizontal: 20,
  },
});

export default ProfileList;
