import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { BsCart2 } from "react-icons/bs";
import { Container, HomePng } from "./styled";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
function BottomTabs() {
  return (
    <Container>
      <TouchableOpacity>
        <HomePng
          source={require("../../../../assets/ImgMyProducts/homeHP.png")}
        ></HomePng>
      </TouchableOpacity>
      <TouchableOpacity>
        <HomePng
          source={require("../../../../assets/ImgMyProducts/cart.png")}
        ></HomePng>
      </TouchableOpacity>
      <TouchableOpacity>
        <HomePng
          source={require("../../../../assets/ImgMyProducts/account.png")}
        ></HomePng>
      </TouchableOpacity>
    </Container>
  );
}

export default BottomTabs;
