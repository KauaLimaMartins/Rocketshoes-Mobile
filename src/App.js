import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import 'react-native-gesture-handler';
import './config/Reactotron';

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Header from './components/Header';

import Routes from './routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#191920" />
      <Header />
      <Routes />
    </NavigationContainer>
  );
}
