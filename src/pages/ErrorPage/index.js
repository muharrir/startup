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
      <View style={styles.contentWrapper}>
        <View style={styles.content}>
          <Text style={styles.title}>Opps! What's This?</Text>
          <Text style={styles.desc}>
            Don’t panic and put yourself together because this page means
            doesn’t exist anymore
          </Text>
        </View>
        <Button title="Back to Home" />
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
  contentWrapper: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 290,
  },
  content: {
    marginTop: 40,
    marginHorizontal: 39,
    flex: 1,
  },
  title: {
    fontSize: 26,
    fontFamily: 'NotoSerif-Regular',
    color: '#1F2B4A',
    textAlign: 'center',
  },
  desc: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Montserrat-Regular',
    color: '#828282',
    marginTop: 16,
    textAlign: 'center',
  },
});
