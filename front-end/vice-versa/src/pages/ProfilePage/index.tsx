import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import BottomTabs from "../../components/componentsProfilePage/BottomTabs";
import Header from "../../components/componentsProfilePage/Header";
import OlaTab from "../../components/componentsProfilePage/OlaTab/Index";
import PerfilButton from "../../components/componentsProfilePage/PerfilButton";

import { ButtonContainer, Container } from "./styles";

function ProfilePage() {
  return (
    <Container>
      <Header />
      <OlaTab />
      <ButtonContainer>
        <PerfilButton placeholder={"SUA CONTA"} />
        <PerfilButton placeholder={"SEUS PRODUTOS"} />
        <PerfilButton placeholder={"FAVORITOS"} />
      </ButtonContainer>
      <BottomTabs />
    </Container>
  );
}
export default ProfilePage;
