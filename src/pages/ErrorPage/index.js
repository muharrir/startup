import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILError} from '../../assets/Illustration';
import Button from '../../components/Button';

export default function ErrorPage() {
  return (
    <View style={styles.page}>
      <View style={styles.image}>
        <ILError />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Opps! What's This?</Text>
        <Text style={styles.desc}>
          Don’t panic and put yourself together because this page means doesn’t
          exist anymore
        </Text>
        <Button style={styles.btn} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {backgroundColor: '#2D434C', flex: 1, justifyContent: 'space-between'},
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  title: {
    fontSize: 26,
    fontFamily: 'NotoSerif-Regular',
    color: '#1F2B4A',
    textAlign: 'center',
    paddingTop: 40,
  },
  desc: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Montserrat-Regular',
    color: '#828282',
    textAlign: 'center',
    marginTop: 16,
    paddingHorizontal: 39,
  },
});
