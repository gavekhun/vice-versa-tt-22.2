import React from 'react'
import { TextInput } from 'react-native'
import { BtnSair } from '../../../componentes/componentesProfile/ButtonSair'
import { PageHeader } from '../../../componentes/componentesProfile/Header'
import { InputComponent } from '../../../componentes/componentesProfile/Input'
import { MenuRodape } from '../../../componentes/componentesProfile/Rodape'
import { UserComponent } from '../../../componentes/componentesProfile/User'
import { Container, ImageVoltar } from './style'


    
export function TelaProfile() {


   return(
        
         <Container>

         <PageHeader/>  

         <UserComponent/>

         <ImageVoltar source={require('../../../../assets/img/imgVoltar/voltar.png')}/>

         <InputComponent/>

         <BtnSair></BtnSair>

         <MenuRodape/>
          
         </Container>
            
   ) 
}

