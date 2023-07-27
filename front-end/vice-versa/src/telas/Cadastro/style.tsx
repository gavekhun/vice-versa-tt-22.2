import styled from "styled-components/native";
//@ts-ignore
const fundo =
  require("../../../assets/Imgpublicaratualizar/fundo.png") as string;

export const Container = styled.View`
  flex: 1;
  background-image: url(${fundo});
`;

export const Icone = styled.Image`
  height: 189px;
  width: 235px;
  margin-left: 108px;
  margin-top: 14px;
`;

export const Titulo = styled.Text`
  font-size: 29px;
  color: black;
  font-family: Calibri;
  font-weight: 700;
  margin-left: 157px;
`;
export const TextoFinal = styled.Text`
  color: black;
  font-size: 25;
  font-weight: 400;
  font-family: Calibri;
  margin-left: 68px;
  margin-top: 20px;
`;
export const TextoColorido = styled.Text`
  color: #2a9842;
  font-size: 25;
  font-weight: 700;
  font-family: Calibri;
  margin-left: 5px;
`;
