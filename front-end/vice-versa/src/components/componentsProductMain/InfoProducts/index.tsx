import React from "react";
import { View, Text } from "react-native";
import { Conteiner, TextContainer, TextFixo, TextMovel } from "./styled";

type Data = {
  name: string;
  price: number;
  description: string;
};

function InfoProducts({ name, price, description }: Data) {
  return (
    <Conteiner>
      <TextContainer>
        <TextFixo>Nome:</TextFixo>
        <TextMovel>{name}</TextMovel>
      </TextContainer>
      <TextContainer>
        <TextFixo>Preço:</TextFixo>
        <TextMovel>R${price}</TextMovel>
      </TextContainer>
      <TextContainer>
        <TextFixo>Descrição:</TextFixo>
        <TextMovel>{description}</TextMovel>
      </TextContainer>
    </Conteiner>
  );
}

export default InfoProducts;
