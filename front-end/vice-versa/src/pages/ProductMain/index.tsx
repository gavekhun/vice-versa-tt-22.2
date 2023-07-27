import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import BottomTabs from "../../components/componentsProductMain/BottomTabs";
import Buttons from "../../components/componentsProductMain/Buttons";
import Carrosel from "../../components/componentsProductMain/Carrosel";
import Header from "../../components/componentsProductMain/Header";
import HeaderProduct from "../../components/componentsProductMain/HeaderProduct";
import InfoProducts from "../../components/componentsProductMain/InfoProducts";

import { Container } from "./styled";

function ProductMain() {
  return (
    <Container>
      <Header />

      <HeaderProduct />
      <InfoProducts
        name={"Harry Potter"}
        price={199.99}
        description={
          "Exemplo de descrição para testes, exemplo de descrição para testes, exemplo de descrição para testes. "
        }
      />
      <Buttons />
      <Carrosel />
      <BottomTabs />
    </Container>
  );
}

export default ProductMain;
