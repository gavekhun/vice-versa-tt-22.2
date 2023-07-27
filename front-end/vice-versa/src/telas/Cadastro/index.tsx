import React from "react";
import { Container, Titulo, Icone, TextoFinal, TextoColorido } from "./style";
import { StyleSheet, TouchableOpacity } from "react-native";
import ResponderForm from "../../Componentes/ComponentesCadastro/Formulario";
import { useNavigation } from "@react-navigation/native";

export default function Cadastrar() {
  const navigation = useNavigation();
  return (
    <Container>
      <Icone source={require("../../../assets/iconeRobaGeek.png")} />
      <Titulo>Cadastro</Titulo>
      <ResponderForm />
      <TextoFinal>
        Já possui uma conta?
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <TextoColorido>Logar</TextoColorido>
        </TouchableOpacity>
      </TextoFinal>
    </Container>
  );
}
