import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

import logo from '../../assets/images/logo.png';
import { Container, Logo, CountContainer, Counter } from './styles';

export default function Header({ home, cart }) {
  const navigation = useNavigation();

  function navigateToCart() {
    navigation.navigate(cart);
  }

  function navigateToHome() {
    navigation.navigate(home);
  }

  return (
    <Container>
      <TouchableOpacity onPress={navigateToHome}>
        <Logo source={logo} resizeMode="cover" />
      </TouchableOpacity>
      <CountContainer onPress={navigateToCart}>
        <Icon name="shopping-basket" color="#FFF" size={28} />
        <Counter>0</Counter>
      </CountContainer>
    </Container>
  );
}
