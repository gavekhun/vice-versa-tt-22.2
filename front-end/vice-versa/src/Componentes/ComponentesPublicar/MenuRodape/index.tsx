import React from "react";
import { TouchableOpacity } from "react-native";
import { Container, Icone } from "./style";

export default function MenuRodape() {
  return (
    <Container>

      <TouchableOpacity>
        <Icone source={require("../../../../assets/homeIcone.png")}></Icone>
      </TouchableOpacity>

      <TouchableOpacity>
        <Icone source={require("../../../../assets/carrinhoIcone.png")}></Icone>
      </TouchableOpacity>

      <TouchableOpacity>
        <Icone source={require("../../../../assets/perfilIcone.png")}></Icone>
      </TouchableOpacity>

    </Container>
  );
}

