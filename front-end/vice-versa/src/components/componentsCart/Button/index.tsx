import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { Container, TextBtn } from "./styled";

function Button() {
  return (
    <TouchableOpacity>
      <Container>
        <TextBtn>Finalizar Compra</TextBtn>
      </Container>
    </TouchableOpacity>
  );
}

export default Button;
