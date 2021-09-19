import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class StateProps extends Component {
  //rcons
  constructor(props) {
    super(props);

    this.state = {
      sekolah: 'Wahidev Academy',
    };
  }

  render() {
      const { sekolah } = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Belajar State dan Props</Text>
        <View style={styles.garis} />
        {/* Isi */}
        <View style={styles.isi}>
          <Text>Ini adalah State : {sekolah}</Text>
        </View>
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
