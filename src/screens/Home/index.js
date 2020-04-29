import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import { formatPrice } from '../../utils/formatPrice';
import api from '../../services/api';
import {
  Container,
  ProductContainer,
  ProductImage,
  ProductTitle,
  ProductPrice,
  CartButton,
  LeftSideButton,
  RightSideButton,
  CounterButton,
  TextButton,
} from './styles';

import Header from '../../components/Header';

export default class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    this.getProduct();
  }

  getProduct = async () => {
    const response = await api.get('/products');

    const data = response.data.map((product) => ({
      ...product,
      formattedPrice: formatPrice(product.price),
    }));

    this.setState({ products: data });
  };
  render() {
    const { products } = this.state;

    return (
      <>
        <Header home="Home" cart="Cart" />
        <Container>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={products}
            keyExtractor={(product) => String(product.id)}
            renderItem={({ item }) => (
              <ProductContainer>
                <ProductImage source={{ uri: item.image }} />
                <ProductTitle>{item.title}</ProductTitle>
                <ProductPrice>{item.formattedPrice}</ProductPrice>
                <CartButton>
                  <LeftSideButton>
                    <Icon name="shopping-cart" color="#FFF" size={16} />
                    <CounterButton>0</CounterButton>
                  </LeftSideButton>
                  <RightSideButton>
                    <TextButton>ADICIONAR</TextButton>
                  </RightSideButton>
                </CartButton>
              </ProductContainer>
            )}
          />
        </Container>
      </>
    );
  }
}
