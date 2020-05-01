import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background: #191920;
`;

export const CartContainer = styled.View`
  background: #fff;
  width: 100%;
  border-radius: 10px;
`;

export const ProductContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`;

export const ProductImage = styled.Image`
  width: 100px;
  height: 100px;
  margin-left: 5px;
`;

export const ProductInformationsContainer = styled.View`
  width: 170px;
  margin-left: 10px;
  margin-right: 5px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const ProductPrice = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #222;
`;

export const ProductQuantity = styled.Text`
  font-weight: bold;
  font-size: 18px;
  margin-right: 20px;
  background: #ededed;
  padding: 10px;
  border-radius: 10px;
`;

export const RemoveProduct = styled.TouchableOpacity`
  padding: 5px;
`;

export const TotalContainer = styled.View`
  margin: 10px 20px 15px;
  flex-direction: row;
  align-items: baseline;
`;

export const TotalText = styled.Text`
  font-size: 32px;
  color: #333;
  font-weight: bold;
`;

export const TotalPrice = styled.Text`
  font-size: 28px;
  color: #222;
  margin-left: 8px;
`;
