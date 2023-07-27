import React from "react";
import { TouchableOpacity } from "react-native";
import { Container, Icone } from "./style";

export default function MenuRodape() {
  return (
    <Container>
      <TouchableOpacity>
        <Icone
          source={require("../../../../assets/Imgpublicaratualizar/homeIcone.png")}
        ></Icone>
      </TouchableOpacity>

      <TouchableOpacity>
        <Icone
          source={require("../../../../assets/Imgpublicaratualizar/carrinhoIcone.png")}
        ></Icone>
      </TouchableOpacity>

      <TouchableOpacity>
        <Icone
          source={require("../../../../assets/Imgpublicaratualizar/perfilIcone.png")}
        ></Icone>
      </TouchableOpacity>
    </Container>
  );
}
