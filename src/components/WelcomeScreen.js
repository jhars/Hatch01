import {Navigation} from 'react-native-navigation';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

export default class WelcomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
  }

  pressFunction() {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'navigation.PhoneNumberInput',
        passProps: {
          text: this.state.text
        },
        options: {
          topBar: {
            title: {
              text: this.state.text
            }
          }
        }
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hatch App 01</Text>
        <Text style={styles.instructions}>App.js</Text>
        <Text style={styles.instructions}>{'instructions'}</Text>

        <TouchableOpacity
          onPress={this.pressFunction.bind(this)}>
          <Text>Get Started</Text>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
