import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import { Container } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import Header from "../../components/componentsMyProducts/Header";
import AddBackButtom from "../../components/componentsMyProducts/AddBackButtom";
import BottomTabs from "../../components/componentsMyProducts/BottomTabs";
import OlaTab from "../../components/componentsMyProducts/OlaTab/Index";
import Products from "../../components/componentsMyProducts/Products";

function Myproducts() {
  return (
    <Container>
      <Header />
      <OlaTab />
      <AddBackButtom />
      <Products
        amount={5}
        name={"Funko Harry Potter"}
        photoUrl={"harryPotter"}
        isMyProduct={true}
        price={0}
      />
      <Products
        amount={5}
        name={"Funko Harry Potter"}
        photoUrl={"harryPotter"}
        isMyProduct={true}
        price={0}
      />
      <Products
        amount={5}
        name={"Funko Harry Potter"}
        photoUrl={"harryPotter"}
        isMyProduct={true}
        price={0}
      />
      <BottomTabs />
    </Container>
  );
}
export default Myproducts;
