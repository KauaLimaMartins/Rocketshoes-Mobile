import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 8px 20px 0 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #191920;
`;

export const Logo = styled.Image`
  width: 250px;
  height: 32px;
`;

export const CountContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const Counter = styled.Text`
  color: #fff;
`;
