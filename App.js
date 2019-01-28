import { Navigation } from 'react-native-navigation';
import React, {Component} from 'react';
import {View} from 'react-native';

export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
    this.state = {
      text: 'nothing yet'
    };
  }

  render() {
    return (
      <Navigation/>
    );
  }
}
