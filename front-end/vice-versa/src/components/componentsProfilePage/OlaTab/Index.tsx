import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import { Container, ImgProfile, TextOla } from "./styled";

function OlaTab() {
  return (
    <Container>
      <TextOla>Olá, João</TextOla>
      <ImgProfile

        source={require("../../../../assets/ImgMyProducts/FotoPerfil.png")}

      ></ImgProfile>
    </Container>
  );
}

export default OlaTab;
