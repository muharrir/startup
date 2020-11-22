import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILRefund1} from '../../assets/Illustration';
import Button from '../../components/Button';

export default function RefundPage() {
  return (
    <View style={styles.page}>
      <View style={styles.image}>
        <ILRefund1 />
      </View>
      <View style={styles.contentWrapper}>
        <View style={styles.content}>
          <Text style={styles.title}>They Are Gone</Text>
          <Text style={styles.desc}>
            Your customers were refund because they don’t need your product
            anymore
          </Text>
        </View>
        <Button title="View Report" />
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
