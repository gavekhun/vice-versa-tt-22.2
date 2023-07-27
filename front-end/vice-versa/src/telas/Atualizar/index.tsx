import React from "react";
import { TouchableOpacity } from "react-native";
import Form from "../../Componentes/ComponentesAtualizar/FormAtualizar";
import MenuRodape from "../../Componentes/ComponentesAtualizar/MenuRodape";

import {
  Container,
  Cabecalho,
  Logo,
  FotoProduto,
  FundoProduto,
  Produto,
  Icone,
} from "./style";

export default function Atualizar() {
  return (
    <Container>
      <Cabecalho>
        <Logo
          source={require("../../../assets/Imgpublicaratualizar/logoRobaGeek.png")}
        />
      </Cabecalho>
      <FotoProduto>
        <FundoProduto>
          <Produto source={require("../../../assets/imagemProduto.png")} />
        </FundoProduto>
        <TouchableOpacity>
          <Icone
            source={require("../../../assets/Imgpublicaratualizar/iconeEditar.png")}
          />
        </TouchableOpacity>
      </FotoProduto>
      <Form />
      <MenuRodape />
    </Container>
  );
}
