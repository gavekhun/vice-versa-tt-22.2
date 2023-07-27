import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ProductImg } from "./src/components/componentsCart/Products/styled";
import Carrinho from "./src/pages/Carrinho";
import Login from "./src/pages/Login/Login";
import MainPage from "./src/pages/MainPage";
import Myproducts from "./src/pages/MyProducts";
import ProductMain from "./src/pages/ProductMain";
import ProfilePage from "./src/pages/ProfilePage";
import Router from "./src/router/Router";
import { TelaProfile } from "./src/screens/tela/Profile";
import Atualizar from "./src/telas/Atualizar";
import Cadastro from "./src/telas/Cadastro";
import Favoritos from "./src/telas/Favoritos";
import Publicar from "./src/telas/Publicar";

export default function App() {
  return <Router />;
}
//export
