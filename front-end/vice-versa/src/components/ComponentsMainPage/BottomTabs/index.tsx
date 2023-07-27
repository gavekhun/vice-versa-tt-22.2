import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Container, HomePng } from "./styled";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
function BottomTabs() {
  return (
    <Container>
      <TouchableOpacity>
        <HomePng source={require("../../../../assets/ImgHomePage/homeHP.png")}></HomePng>
      </TouchableOpacity>

      <TouchableOpacity>
        <HomePng
          source={require("../../../../assets/ImgHomePage/cart.png")}
        ></HomePng>
      </TouchableOpacity>

      <TouchableOpacity>
        <HomePng source={require("../../../../assets/ImgHomePage/account.png")}></HomePng>
      </TouchableOpacity>
    </Container>
  );
}

export default BottomTabs;
