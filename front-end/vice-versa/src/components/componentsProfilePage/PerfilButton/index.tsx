import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Conteiner, TextProfile } from "./style";

interface PerfilData {
  placeholder: string;
}

function PerfilButton({ placeholder }: PerfilData) {
  return (
    <Conteiner>
      <TextProfile>{placeholder}</TextProfile>
    </Conteiner>
  );
}

export default PerfilButton;
