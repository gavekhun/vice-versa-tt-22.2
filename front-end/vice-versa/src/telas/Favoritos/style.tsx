import styled from "styled-components/native";
const fundo =
  require("../../../assets/Imgpublicaratualizar/fundo.png") as string;

export const Container = styled.View`
  height: 896px;
  width: 414px;
  background-image: url(${fundo}); ;
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
export const BotaoVoltar = styled.Image`
  height: 30px;
  width: 30px;
  margin-left: 20px;
  margin-top: 17px;
`;
export const CaixaTitulo = styled.View`
  height: 52px;
  width: 277px;
  background: #9b6de5;
  border-radius: 12px;
  align-items: center;
  align-self: center;
`;

export const Titulo = styled.Text`
  font-family: "Calibri";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  margin: 9px;
  color: #ffffff;
`;
export const Rodape = styled.View`
  margin-top: 91px;
`;
