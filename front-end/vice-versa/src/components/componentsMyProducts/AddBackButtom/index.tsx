import React from "react";
import { View, TouchableOpacity } from "react-native";
import { ButtomContainer } from "./styled";
import { Ionicons } from "@expo/vector-icons";

function AddBackButtom() {
  return (
    <ButtomContainer>
      <View>
        <TouchableOpacity>
          <Ionicons name="return-up-back" size={40} color="black" />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Ionicons name="add-circle-outline" size={40} color="black" />
        </TouchableOpacity>
      </View>
    </ButtomContainer>
  );
}

export default AddBackButtom;
