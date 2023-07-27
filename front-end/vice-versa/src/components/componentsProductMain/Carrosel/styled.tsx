import { Dimensions } from "react-native";
import styled from "styled-components/native";

const SRC_WIDTH = Dimensions.get("window").width;
const CARD_LENGHTINTERNO = SRC_WIDTH * 0.6;

export const UserText = styled.Text`
  font-size: 25;
  font-weight: bold;
`;

export const CommentText = styled.Text`
  font-size: 18;
  font-weight: 600;
`;

export const TExt = styled.View`
  margin-left: 5;
`;

export const TextComm = styled.Text`
  font-size: 30;
  font-family: Calibri;
  font-weight: bold;
  color: #fffdfd;
`;

export const CommentView = styled.View`
  width: ${CARD_LENGHTINTERNO};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 3px;
  background-color: #ffffff;
  border-radius: 8;
  margin-bottom: 35;
`;
