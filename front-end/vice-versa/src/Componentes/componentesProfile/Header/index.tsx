import React from "react";
import { TouchableOpacity } from "react-native";
import { ContainerHeader , Logo , Header } from './style'

export function PageHeader() {
  return (
    <ContainerHeader>

        <Header>
            {/* <Logo source={require('../../img/imgHeader/RobaGeek.png')}></Logo>  */}
            <Logo source={require("../../../../assets/img/imgHeader/RobaGeek.png")}></Logo>
        </Header>  

    </ContainerHeader>
  );
}
