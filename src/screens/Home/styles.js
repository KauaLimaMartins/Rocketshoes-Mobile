import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { darken } from 'polished';

const { height: Height, width: Width } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background: #191920;
`;

export const ProductContainer = styled.View`
  background: #fff;
  margin: 10px 0 10px;
  border-radius: 15px;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ProductTitle = styled.Text`
  color: #222;
  font-size: 26px;
  padding: 2px 20px;
  text-align: center;
`;

export const ProductPrice = styled.Text`
  color: #222;
  font-size: 26px;
  font-weight: bold;
  padding: 0 20px 10px;
`;

export const CartButton = styled.TouchableOpacity`
  background: #7159c1;
  width: 60%;
  height: 50px;
  margin-bottom: 20px;
  flex-direction: row;
  border-radius: 8px;
`;

export const LeftSideButton = styled.View`
  background: ${darken(0.2, '#7159c1')};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 60px;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
`;

export const CounterButton = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  margin-left: 5px;
`;

export const RightSideButton = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const TextButton = styled.Text`
  font-weight: bold;
  color: #fff;
  font-size: 23px;
`;
