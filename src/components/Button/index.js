import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Button({title}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6B145',
    alignItems: 'center',
    borderTopLeftRadius: 11,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 11,
    borderBottomLeftRadius: 4,
    marginTop: 30,
    marginBottom: 52,
    marginHorizontal: 100,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
    color: 'white',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 35,
  },
});
