import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { ImgContainer, ProductImg, TopContainer } from "./styled";

function HeaderProduct() {
  const [isFavourite, setIsFavourite] = useState(false);

  let starColor: string;

  if (isFavourite) {
    starColor = "#FFCE31";
  } else {
    starColor = "#8A7D7D";
  }

  return (
    <TopContainer>
      <TouchableOpacity>
        <View style={{ marginTop: 35 }}>
          <Ionicons name="return-up-back" size={30} color="black" />
        </View>
      </TouchableOpacity>
      <ImgContainer>
        <ProductImg
          source={require("../../../../assets/ImgProductMain/harryPotter.webp")}
        ></ProductImg>
      </ImgContainer>
      <View style={{ marginTop: 35 }}>
        <TouchableOpacity onPress={() => setIsFavourite(!isFavourite)}>
          <Entypo name="star" size={24} style={{ color: `${starColor}` }} />
        </TouchableOpacity>
      </View>
    </TopContainer>
  );
}

export default HeaderProduct;
