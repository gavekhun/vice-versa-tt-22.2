import React from "react";
import { TouchableOpacity } from "react-native";
import { Container, Icone } from "./style";

export default function MenuRodape() {
  return (
    <Container>
      <TouchableOpacity>
        <Icone
          source={require("../../../../assets/Imgfavoritos/homeIcone.png")}
        ></Icone>
      </TouchableOpacity>

      <TouchableOpacity>
        <Icone
          source={require("../../../../assets/Imgfavoritos/carrinhoIcone.png")}
        ></Icone>
      </TouchableOpacity>

      <TouchableOpacity>
        <Icone
          source={require("../../../../assets/Imgfavoritos/perfilIcone.png")}
        ></Icone>
      </TouchableOpacity>
    </Container>
  );
}
