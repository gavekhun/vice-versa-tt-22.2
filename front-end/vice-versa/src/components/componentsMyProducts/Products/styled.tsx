import styled from "styled-components/native";

export const Container = styled.View`
  width: 370;
  height: 150;
  align-self: center;
  align-content: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 32;
`;

export const ImgContainer = styled.View`
  width: 150;
  height: 150;
  background-color: #fbfbfb;
  align-items: center;
  justify-content: center;
  border-radius: 20;
`;

export const ProductImg = styled.Image`
  width: 100px;
  height: 125px;
  border-radius: 5;
`;

export const InfoContainer = styled.View`
  background-color: #d8f5e5;
  width: 212px;
  height: 150px;
  margin-left: 10;
  border-radius: 5;
`;

export const TextInfoContainer = styled.View`
  margin-left: 10;
  margin-top: 18;
  display: inline;
  justify-content: space-around;
`;

export const InfoText = styled.Text`
  font-size: 15px;
  font-weight: 800;
`;

export const InfoText1 = styled.Text`
  font-size: 15px;
  font-weight: 800;
  margin-top: 18;
`;

export const ButtonInfoContainer = styled.View`
  display: flex;
  justify-content: flex-end;
  gap: 112px;
  flex-direction: row;
  align-items: center;
  margin-top: 30;
  margin-right: 15;
`;
