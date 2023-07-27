import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  ButtonInfoContainer,
  Container,
  ImgContainer,
  InfoContainer,
  InfoText,
  InfoText1,
  ProductImg,
  TextInfoContainer,
} from "./styled";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

type ProductsInfo = {
  amount: number;
  name: string;
  photoUrl: string;
  isMyProduct: boolean;
  price: number;
};

function Products({
  amount,
  name,
  photoUrl,
  isMyProduct,
  price,
}: ProductsInfo) {
  return (
    <Container>
      <ImgContainer>
        <ProductImg
          source={require(`../../../../assets/ImgCart/${photoUrl}.webp`)}
        ></ProductImg>
      </ImgContainer>
      <InfoContainer>
        <TextInfoContainer>
          <View>
            <InfoText>{name}</InfoText>
          </View>

          {isMyProduct ? (
            <View>
              <InfoText1> Quantidade: {amount}</InfoText1>
            </View>
          ) : (
            <View>
              <InfoText1> Preço: {price}</InfoText1>
            </View>
          )}
        </TextInfoContainer>
        <ButtonInfoContainer>
          {isMyProduct && (
            <TouchableOpacity>
              <FontAwesome5 name="edit" size={30} color="black" />
            </TouchableOpacity>
          )}

          <TouchableOpacity>
            <Ionicons name="ios-trash-outline" size={35} color="black" />
          </TouchableOpacity>
        </ButtonInfoContainer>
      </InfoContainer>
    </Container>
  );
}
export default Products;
