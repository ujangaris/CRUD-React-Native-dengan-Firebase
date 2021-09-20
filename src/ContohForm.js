import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default class ContohForm extends Component {
  //rcons
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  render() {
    const {username, password} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Belajar Membuat Form</Text>
        <View style={styles.garis} />
        {/* Isi */}
        <View style={styles.isi}>
          <View>
            <Text>Username : </Text>
            <TextInput
              style={styles.TextInput}
              placeholder="Masukan Username"
              value={username}
              onChangeText={username => this.setState({username})}
            />
          </View>
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
  TextInput: {
    borderWidth: 1,
    padding: 10,
    borderColor: 'grey',
    borderRadius: 5,
    height: 40,
  },
});
