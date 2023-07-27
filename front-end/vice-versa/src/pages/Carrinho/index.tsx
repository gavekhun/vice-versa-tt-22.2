import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import Button from "../../components/componentsCart/Button";

import Products from "../../components/componentsCart/Products";
import BottomTabs from "../../components/ComponentsMainPage/BottomTabs";
import Header from "../../components/componentsMyProducts/Header";

import { Container, TextCarrinho, TextContainer } from "./styles";

function Carrinho() {
  return (
    <Container>
      <Header />
      <TextContainer>
        <TextCarrinho>Carrinho</TextCarrinho>
      </TextContainer>

      <Products
        name={"Harry Potter"}
        photoUrl={"harryPotter"}
        price={199.99}
        amount={0}
        isMyProduct={false}
      />
      <Products
        name={"Harry Potter"}
        photoUrl={"harryPotter"}
        price={199.99}
        amount={0}
        isMyProduct={false}
      />
      <Products
        name={"Harry Potter"}
        photoUrl={"harryPotter"}
        price={199.99}
        amount={0}
        isMyProduct={false}
      />
      <Button />
      <BottomTabs />
    </Container>
  );
}
//exportacao
export default Carrinho;
