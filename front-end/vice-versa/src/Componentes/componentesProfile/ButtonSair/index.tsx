import React from "react";
import { TouchableOpacity } from "react-native";
import { Button , ButtonText} from "./style";


export function BtnSair() {
     return(

    <TouchableOpacity>
        <Button>
            <ButtonText>Sair</ButtonText>
        </Button>
     </TouchableOpacity>
    

     );
 }