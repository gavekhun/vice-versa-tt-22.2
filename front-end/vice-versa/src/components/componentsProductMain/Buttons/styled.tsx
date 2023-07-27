import styled from "styled-components/native";

export const ButtonContainer = styled.View`
  justify-content: center;
  flex-direction: row;
  gap: 60;
  margin-top: 65;
  margin-bottom: 80;
`;
export const Purchase = styled.View`
  width: 120;
  height: 40;
  background-color: #814eed;
  justify-content: center;
  align-items: center;
  border-radius: 10;
`;

export const PurchaseText = styled.Text`
  font-size: 18;
  color: white;
  font-weight: bolder;
`;

export const Cart = styled.View`
  width: 120;
  height: 40;
  border-color: #814eed;
  border-width: 2;
  border-radius: 10;
  justify-content: center;
  align-items: center;
`;

export const CartText = styled.Text`
  font-size: 18;
  color: #814eed;
  font-weight: bolder;
`;
