import { Dimensions } from "react-native";
import styled from "styled-components/native";

const SRC_WIDTH = Dimensions.get("window").width;

export const LogoContanier = styled.View`
  align-items: center;
  margin-top: 70px;
  margin-bottom: 30px;
`;

export const InputView = styled.View`
  margin-left: SRC_WIDTH * 0.5;
`;
export const FormView = styled.View``;
