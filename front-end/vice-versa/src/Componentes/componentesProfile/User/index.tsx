import React, { useState } from "react";
import { DivUser , BarraUser , HelloUser , FotoPerfil, EditImage } from "./style";

export function UserComponent() {

    return(
        
    <DivUser>   

        <BarraUser>
            <HelloUser>Olá, Vaca</HelloUser>
        </BarraUser>
        <FotoPerfil> 
            <EditImage source={require('../../../../assets/img/imgEdit/Vector.png')}></EditImage>
        </FotoPerfil>

    </DivUser>


    );
}