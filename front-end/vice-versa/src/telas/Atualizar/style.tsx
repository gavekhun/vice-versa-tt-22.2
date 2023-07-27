import styled from "styled-components/native";

const fundo =
  require("../../../assets/Imgpublicaratualizar/fundo.png") as string;

export const Container = styled.View`
  flex: 1;
  background-image: url(${fundo});
`;

export const Cabecalho = styled.View`
  background-color: #c5b2eb;
  height: 67px;
  align-items: center;
`;

export const Logo = styled.Image`
  height: 33px;
  width: 222px;
  margin: 15px 0;
`;
export const FotoProduto = styled.View`
  flex-direction: row;
  margin-top: 22px;
  margin-left: 20px;
  justify-content: center;
`;

export const FundoProduto = styled.View`
  width: 250px;
  height: 250px;
  align-items: center;
  background-color: white;
  border-radius: 19px;
  justify-content: center;
  margin-left: 20px;
`;

export const Produto = styled.Image`
  height: 250px;
  width: 200px;
`;

export const Icone = styled.Image`
  height: 40px;
  width: 40px;
  margin-left: 20px;
`;
