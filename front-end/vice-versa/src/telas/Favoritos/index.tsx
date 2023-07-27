import React from "react";
import { TouchableOpacity } from "react-native";
import MenuRodape from "../../Componentes/ComponentesFavoritos/MenuRodape";
import ProdutoFavoritado from "../../Componentes/ComponentesFavoritos/ProdutoFavoritado";
import {
  Container,
  Cabecalho,
  Logo,
  BotaoVoltar,
  CaixaTitulo,
  Titulo,
} from "./style";

export default function Favoritos() {
  return (
    <Container>
      <Cabecalho>
        <Logo
          source={require("../../../assets/Imgfavoritos/logoRobaGeek.png")}
        />
      </Cabecalho>
      <TouchableOpacity>
        <BotaoVoltar source={require("../../../assets/botaoVoltar.png")} />
      </TouchableOpacity>
      <CaixaTitulo>
        <Titulo>Minha lista de desejos</Titulo>
      </CaixaTitulo>
      <ProdutoFavoritado
        nomeProduto={"Nome do produto"}
        imagemProduto={"imagemProduto"}
      />
      <ProdutoFavoritado
        nomeProduto={"Nome do produto"}
        imagemProduto={"imagemProduto"}
      />
      <ProdutoFavoritado
        nomeProduto={"Nome do produto"}
        imagemProduto={"imagemProduto"}
      />
      <MenuRodape />
    </Container>
  );
}
