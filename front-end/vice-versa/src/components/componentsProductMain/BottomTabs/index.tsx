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
          source={require("../../../../assets/ImgProfilePage/homeHP.png")}
        ></HomePng>
      </TouchableOpacity>
      <TouchableOpacity>
        {/* <Feather name="shopping-cart" size={55} color="black" /> */}
        <HomePng

          source={require("../../../../assets/ImgProfilePage/cart.png")}

        ></HomePng>
      </TouchableOpacity>
      <TouchableOpacity>
        {/* <MaterialCommunityIcons name="account" size={60} color="black" /> */}
        <HomePng


          source={require("../../../../assets/ImgProfilePage/account.png")}

        ></HomePng>
      </TouchableOpacity>
    </Container>
  );
}

export default BottomTabs;
