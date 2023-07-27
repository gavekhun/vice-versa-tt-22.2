import React, { useState, useEffect } from "react";
import {
  Dimensions,
  View,
  Image,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import DropShadow from "react-native-drop-shadow";

interface itemProps {
  index: number;
}

function Item({ index }: itemProps) {
  return (
    // <DropShadow style={styles.shadowProp}>
    <TouchableOpacity>
      <View style={[styles.card]}>
        <Image
          source={require("../../../../assets/ImgHomePage/harryPotter.webp")}
          style={{
            width: 35,
            height: 45,
          }}
        />
        <View>
          <Text style={{ fontSize: 7, fontWeight: "bold", marginBottom: 3 }}>
            Nome
          </Text>
          <Text style={{ fontSize: 6, fontWeight: "bold" }}>Preco</Text>
        </View>
      </View>
      {/* </DropShadow> */}
    </TouchableOpacity>
  );
}

export default function Carousel() {
  const DATA = [
    {
      id: "asasasasasa",
      title: "a",
    },
    {
      id: "asasasasas4a",
      title: "b",
    },
    {
      id: "asasasasasa5",
      title: "c",
    },
    {
      id: "asasasasasa45",
      title: "d",
    },
    {
      id: "asasasasasdsa45",
      title: "e",
    },
    {
      id: "asasasasssssasa45",
      title: "f",
    },
  ];

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={DATA}
          horizontal={true}
          renderItem={({ item, index }) => {
            return <Item index={index} />;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 75,
    height: 70,
    overflow: "hidden",
    marginHorizontal: 25,
    marginVertical: 15,
    backgroundColor: "#FBFBFB",
    alignItems: "center",
    borderRadius: 18,
  },
  container: {
    backgroundColor: "#BDCBFC",
    margin: 15,
    borderRadius: 17,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
});
