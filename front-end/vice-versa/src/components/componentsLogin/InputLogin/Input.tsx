import React from "react";
import { View, Text, TextInput } from "react-native";
import { Container, BordaInput } from "./styled";

interface LoginData {
  placeholder: string;
}

function InputLogin({ placeholder }: LoginData) {
  return (
    <Container>
      <BordaInput>
        <TextInput placeholder={placeholder}></TextInput>
      </BordaInput>
    </Container>
  );
}

export default InputLogin;
