import React, { useState, useEffect } from "react";
import {
  Dimensions,
  View,
  Image,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { UserText, CommentText, TExt, TextComm, CommentView } from "./styled";
import { Ionicons } from "@expo/vector-icons";

const SRC_WIDTH = Dimensions.get("window").width;
const CARD_LENGHT = SRC_WIDTH * 0.8;
const CARD_LENGHTINTERNO = SRC_WIDTH * 0.6;
const COMMENT_CARD = SRC_WIDTH * 0.5;

interface commentData {
  placeholder: string;
}
interface itemProps {
  index: number;
  userName: string;
  comment: string;
}

function Item({ index, userName, comment }: itemProps) {
  return (
    <View style={[styles.card]}>
      <UserText>{userName}:</UserText>
      <TExt style={[styles.funcionaPorFavor]}>
        <CommentText>{comment}</CommentText>
      </TExt>
    </View>
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
  ];

  return (
    <View style={styles.container}>
      <View style={{ marginVertical: 25 }}>
        <TextComm>Comentários</TextComm>
      </View>
      <View style={{ height: 250 }}>
        <FlatList
          data={DATA}
          renderItem={({ item, index }) => {
            return (
              <Item
                index={index}
                userName={"User"}
                comment={
                  "Exemplo de comentário para testes, exemplo de comentário para testes.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                }
              />
            );
          }}
        />
      </View>
      <CommentView>
        <View style={[styles.commentCard]}>
          <TextInput placeholder="Digite seu comentario aqui..."></TextInput>
        </View>
        <TouchableOpacity>
          <Ionicons
            name="arrow-forward-circle-outline"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </CommentView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: CARD_LENGHT,

    overflow: "hidden",
    marginHorizontal: 25,
    marginVertical: 15,
    backgroundColor: "#FBFBFB",
    padding: 10,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "baseline",
  },
  container: {
    backgroundColor: "#9B6DE5",
    gap: 20,

    alignItems: "center",
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  funcionaPorFavor: {
    width: CARD_LENGHTINTERNO,
  },
  commentCard: {
    width: COMMENT_CARD,
    marginLeft: 10,
  },
});
