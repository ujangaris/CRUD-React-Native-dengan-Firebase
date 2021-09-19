import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class StateProps extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Belajar State dan Props</Text>
        <View style={styles.garis} />
        {/* Isi */}
        <View style={styles.isi}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {padding: 30},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  garis: {
    borderBottomWidth: 1,
    marginTop: 10,
  },
  isi: {
    marginTop: 30,
  },
});
