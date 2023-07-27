import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import { Texto1, Texto2, ViewTexto } from "./styled";

type Botao = {
  onPress?: any;
};

function Register({ onPress }: Botao) {
  return (
    <ViewTexto>
      <Texto1>Não possui uma conta?</Texto1>
      <TouchableOpacity onPress={onPress}>
        <Texto2>Cadraste-se</Texto2>
      </TouchableOpacity>
    </ViewTexto>
  );
}

export default Register;
