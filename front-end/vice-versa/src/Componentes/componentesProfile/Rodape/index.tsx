import React from "react";
import { TouchableOpacity } from "react-native";
import { Container, Icone } from './style'

export function MenuRodape() {
   return (
      <Container>
       
      <TouchableOpacity>
         <Icone source={require("../../../../assets/img/imgRodape/Home.png")}></Icone>
      </TouchableOpacity>
  
      <TouchableOpacity>
         <Icone source={require("../../../../assets/img/imgRodape/carrinho.png")}></Icone>
      </TouchableOpacity>
    
      <TouchableOpacity>
        <Icone source={require("../../../../assets/img/imgRodape/perfil.png")}></Icone>
      </TouchableOpacity>
  
    </Container>

    );
  }