import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '../../assets/images/logo.png';
import { Container, Logo, CountContainer, Counter } from './styles';

export default function Header() {
  return (
    <Container>
      <Logo source={logo} resizeMode="cover" />
      <CountContainer>
        <Icon name="shopping-basket" color="#FFF" size={28} />
        <Counter>0</Counter>
      </CountContainer>
    </Container>
  );
}
