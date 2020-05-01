import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import * as CartActions from '../../store/modules/cart/actions';
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

class Home extends Component {
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

  handleAddProduct = (id) => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
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
                <CartButton onPress={() => this.handleAddProduct(item.id)}>
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

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(Home);
