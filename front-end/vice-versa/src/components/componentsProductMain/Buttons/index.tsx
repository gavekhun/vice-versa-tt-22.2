import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import {
  ButtonContainer,
  Cart,
  CartText,
  Purchase,
  PurchaseText,
} from "./styled";

function Buttons() {
  return (
    <ButtonContainer>
      <TouchableOpacity>
        <Purchase>
          <PurchaseText>COMPRAR</PurchaseText>
        </Purchase>
      </TouchableOpacity>
      <TouchableOpacity>
        <Cart>
          <CartText>Carrinho</CartText>
        </Cart>
      </TouchableOpacity>
    </ButtonContainer>
  );
}

export default Buttons;
