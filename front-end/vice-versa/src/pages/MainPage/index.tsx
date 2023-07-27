import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import Header from "../../components/ComponentsMainPage/Header";
import { Container, FraseBoi } from "./styled";
import { createGlobalStyle } from "styled-components";
import Carrosel from "../../components/ComponentsMainPage/Carrosel";
import BottomTabs from "../../components/ComponentsMainPage/BottomTabs";

const GlobalStyle = createGlobalStyle`
  body {
    background: #DDD8E4;
  }
`;
function MainPage() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <FraseBoi
          source={require("../../../assets/ImgHomePage/FraseBoi.png")}
        ></FraseBoi>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 25,
          }}
        >
          Figures
        </Text>
        <Carrosel />
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 30,
          }}
        >
          Hqs
        </Text>
        <Carrosel />
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 30,
          }}
        >
          Cartas
        </Text>
        <Carrosel />
        <BottomTabs />
      </Container>
    </>
  );
}

export default MainPage;
