import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import { Container, Logo } from "./styled";

function Header() {
  return (
    <Container>

      <Logo
        source={require("../../../../assets/ImgMyProducts/ImagemLogo.png")}
      ></Logo>

    </Container>
  );
}

export default Header;
