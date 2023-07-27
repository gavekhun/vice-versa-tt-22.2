import { setStatusBarStyle } from "expo-status-bar";
import React, { useState } from "react";
import { TextInput, TouchableOpacity } from "react-native";
import { DivInput , Input , InputText_1 , InputText_2 , ButtonEdit , ImageEddit , InputContainer  } from "./style";
import { StyleSheet , Text , View  } from "react-native";
import styled from "styled-components/native";



export function InputComponent() {

    const [editName, setEditName] = useState(false)

    const [name , setName] = useState('Vaca')

    const [editBirth , setEditBirth] = useState(false)

    const [birth , setBirth ] = useState('30/02/2001')

    const [editPhone , setEditPhone] = useState(false)

    const [ phone , setPhone ] = useState('(21) 973923884')

    const [editEmail , setEditEmail] = useState(false)

    const [email , setEmail ] = useState('vac****@gmail.com')

    const [ editAdress , setEditAdress ] =useState(false)

    const [ adress , setAdress ] = useState('Rio de janeiro')
  

  return (

<InputContainer>
   
    <DivInput>
    
        <Input>
            <InputText_1>Nome:</InputText_1>
            {editName?<TextInput style={styles.cont} value={name} onChange={(event:any) => setName(event.target.value)} />: <InputText_2>{name}</InputText_2>}
        </Input>

        <ButtonEdit onPress={() => setEditName(!editName)}>
            <ImageEddit source={require('../../../../assets/img/imgEdit/Vector.png')}></ImageEddit>
        </ButtonEdit>

    </DivInput>

    <DivInput>
    
        <Input>
            <InputText_1>Nascimento:</InputText_1>
            {editBirth?<TextInput value={birth} onChange={(event:any) => setBirth(event.target.value)} />: <InputText_2>{birth}</InputText_2>}
        </Input>

        <ButtonEdit onPress={() => setEditBirth(!editBirth)}>
        <ImageEddit source={require('../../../../assets/img/imgEdit/Vector.png')}></ImageEddit>
        </ButtonEdit>

    </DivInput>

    <DivInput>
    
        <Input>
            <InputText_1>Telefone:</InputText_1>
            {editPhone?<TextInput value={phone} onChange={(event:any) => setPhone(event.target.value)} />: <InputText_2>{phone}</InputText_2>}
        </Input>

        <ButtonEdit onPress={() => setEditPhone(!editPhone)}>
        <ImageEddit source={require('../../../../assets/img/imgEdit/Vector.png')}></ImageEddit>
        </ButtonEdit>

    </DivInput>

    <DivInput>
    
        <Input>
            <InputText_1>Email:</InputText_1>
            {editEmail?<TextInput value={email} onChange={(event: any ) => setEmail(event.target.value)} />: <InputText_2>{email}</InputText_2>}
        </Input>

        <ButtonEdit onPress={() => setEditEmail(!editEmail)}>
        <ImageEddit source={require('../../../../assets/img/imgEdit/Vector.png')}></ImageEddit>
        </ButtonEdit>

    </DivInput> 

    <DivInput>
    
        <Input>
           <InputText_1>Endereço:</InputText_1>
           {editAdress?<TextInput value={adress} onChange={(event: any) => setAdress(event.target.value)} />: <InputText_2>{adress}</InputText_2>}
        </Input>

        <ButtonEdit onPress={() => setEditAdress(!editAdress)}>
        <ImageEddit source={require('../../../../assets/img/imgEdit/Vector.png')}></ImageEddit>
        </ButtonEdit>

    </DivInput> 

    </InputContainer>

 
  );
}

const styles = StyleSheet.create({
    cont: {
        outline: 'none',    
        fontSize: 16,
        
    
    }
})

