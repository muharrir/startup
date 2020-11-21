import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Button() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Back to Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6B145',
    alignSelf: 'center',
    borderTopLeftRadius: 11,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 11,
    borderBottomLeftRadius: 4,
    marginVertical: 30,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
    color: 'white',
    textAlign: 'center',
    paddingVertical: 12,
    paddingHorizontal: 35,
  },
});
