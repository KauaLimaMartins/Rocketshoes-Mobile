import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Entypo';
import { FlatList } from 'react-native';

import Header from '../../components/Header';
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
} from './styles';

function Cart({ products }) {
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
                  <ProductPrice>{item.formattedPrice}</ProductPrice>
                </ProductInformationsContainer>
                <ProductQuantity>2</ProductQuantity>
                <RemoveProduct>
                  <Icon name="trash" color="#7159c1" size={26} />
                </RemoveProduct>
              </ProductContainer>
            )}
          />
        </CartContainer>
      </Container>
    </>
  );
}

const mapStateToProps = (state) => ({
  products: state.cart,
});

export default connect(mapStateToProps)(Cart);
