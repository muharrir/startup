import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILRefund2} from '../../assets/Illustration';
import Button from '../../components/Button';

export default function RefundPage2() {
  return (
    <View style={styles.page}>
      <View style={styles.image}>
        <ILRefund2 />
      </View>
      <View style={styles.contentWrapper}>
        <View style={styles.content}>
          <Text style={styles.title}>New Customers</Text>
          <Text style={styles.desc}>
            Send your best welcome message to your new customer and get them buy
            your products
          </Text>
        </View>
        <Button title="Send Message" />
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
