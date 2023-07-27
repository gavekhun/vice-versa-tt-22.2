import styled from "styled-components/native";
//@ts-ignore
import background from "../../../assets/ImgCart/Rectangle100.png";

export const Container = styled.View`
  flex: 1;
  background-image: url(${background});
`;

export const TextContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const TextCarrinho = styled.Text`
  font-size: 24px;
  font-weight: 800;
  margin-top: 25;
  font-family: Calibri;
`;
