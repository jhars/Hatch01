import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import { Navigation } from "react-native-navigation";

export default class PhoneNumberInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    }
  }

  pressFunction() {
    console.log('########## submit phone number ====>>>>  : ' + this.state.text);

    Navigation.push(this.props.componentId, {
      component: {
        name: 'navigation.WelcomeScreen',
        passProps: {
          text: this.state.text
        },
        options: {
          topBar: {
            title: {
              text: 'Pushed screen title'
            }
          }
        }
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Please Enter Your Phone Number</Text>

      <TextInput
        style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1, color: 'green'}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        // multiline={true}
        // editable={false}
        dataDetectorTypes='phoneNumber'
        keyboardType='phone-pad'
      />

      <TouchableOpacity
        onPress={this.pressFunction.bind(this)}>
        <Text>
          SUBMIT
        </Text>
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
});
