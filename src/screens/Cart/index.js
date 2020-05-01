import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/Entypo';
import { FlatList } from 'react-native';

import Header from '../../components/Header';
import { formatPrice } from '../../utils/formatPrice';
import * as CartActions from '../../store/modules/cart/actions';
import {
  Container,
  CartContainer,
  ProductPrice,
  ProductTitle,
  ProductImage,
  ProductInformationsContainer,
  RemoveProduct,
  ProductQuantity,
  ProductContainer,
  TotalContainer,
  TotalText,
  TotalPrice,
} from './styles';

function Cart({ products, total, removeFromCartSuccess }) {
  return (
    <>
      <Header home="Home" cart="Cart" />
      <Container>
        <CartContainer>
          <FlatList
            data={products}
            keyExtractor={(product) => String(product.id)}
            renderItem={({ item }) => (
              <ProductContainer>
                <ProductImage source={{ uri: item.image }} />
                <ProductInformationsContainer>
                  <ProductTitle>{item.title}</ProductTitle>
                  <ProductPrice>{item.subTotal}</ProductPrice>
                </ProductInformationsContainer>
                <ProductQuantity>{item.amount}</ProductQuantity>
                <RemoveProduct onPress={() => removeFromCartSuccess(item.id)}>
                  <Icon name="trash" color="#7159c1" size={26} />
                </RemoveProduct>
              </ProductContainer>
            )}
          />
          <TotalContainer>
            <TotalText>Total:</TotalText>
            <TotalPrice>{total}</TotalPrice>
          </TotalContainer>
        </CartContainer>
      </Container>
    </>
  );
}

const mapStateToProps = (state) => ({
  products: state.cart.map((product) => ({
    ...product,
    subTotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
