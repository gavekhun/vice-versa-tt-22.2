import React from "react";
import { TouchableOpacity } from "react-native";
import {
  Produto,
  ImagemProduto,
  CaixaBotoes,
  TextoNome,
  TituloNome,
  Icone,
  BotaoComprar,
  TextoBotao,
  CaixaTexto,
  CaixaDados,
  FundoImagem,
} from "./style";

type dadosProdutos = {
  nomeProduto: string;
  imagemProduto: string;
};

export default function ProdutoFavoritado({
  nomeProduto,
  imagemProduto,
}: dadosProdutos) {
  return (
    <>
      <Produto>
        <FundoImagem>
          <ImagemProduto
            source={require(`../../../../assets/Imgfavoritos/${imagemProduto}.png`)}
          />
        </FundoImagem>
        <CaixaDados>
          <CaixaTexto>
            <TituloNome>Nome:</TituloNome>
            <TextoNome>{nomeProduto}</TextoNome>
          </CaixaTexto>
          <CaixaBotoes>
            <TouchableOpacity>
              <BotaoComprar>
                <TextoBotao>COMPRAR</TextoBotao>
              </BotaoComprar>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icone
                source={require("../../../../assets/Imgfavoritos/estrelaIcone.png")}
              />
            </TouchableOpacity>
          </CaixaBotoes>
        </CaixaDados>
      </Produto>
    </>
  );
}
