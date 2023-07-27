import React from "react";
import { View, Text, TextInput } from "react-native";
import { Container, BordaInput, TextLogin } from "./styled";

interface LoginTextoData {
  placeholder: string;
}

function TextoDoLogin({ placeholder }: LoginTextoData) {
  return <TextLogin>{placeholder} </TextLogin>;
}

export default TextoDoLogin;