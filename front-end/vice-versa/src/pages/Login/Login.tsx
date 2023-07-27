import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { createGlobalStyle } from "styled-components";
import ResponderForm from "../../components/componentsLogin/LoginInput";
import Register from "../../components/componentsLogin/Register";

import { InputView, LogoContanier } from "./styled";

const GlobalStyle = createGlobalStyle`
  body {
    background: #DDD8E4;
  }
`;

function Login() {
  const navigation = useNavigation();
  return (
    <>
      <GlobalStyle />
      <LogoContanier>
        <Image
          source={require("../../../assets/componentsLogin/imagemLogo.png")}
          style={{ width: 253, height: 173 }}
        ></Image>
      </LogoContanier>
      <InputView style={styles.form}>
        <ResponderForm />
        <Register onPress={() => navigation.navigate("Cadastrar")} />
      </InputView>
    </>
  );
}
const styles = StyleSheet.create({
  form: { alignItems: "center", marginTop: 40 },
});

export default Login;
