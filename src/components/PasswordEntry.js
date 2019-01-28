import { Navigation } from 'react-native-navigation';
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class PasswordEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    }
  }

  pressFunction() {
    console.log('please submit password ====>>>>  : ' + this.state.text);
  }



  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Please Enter Your Password</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}/>
        <TouchableOpacity
          onPress={this.pressFunction.bind(this)}>
          <Text>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textInput: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    color: 'green'
  }
});
