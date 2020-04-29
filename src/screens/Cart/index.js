import React, { Component } from 'react';
import { View } from 'react-native';

import Header from '../../components/Header';

export default class Cart extends Component {
  render() {
    return <Header home="Home" cart="Cart" />;
  }
}
