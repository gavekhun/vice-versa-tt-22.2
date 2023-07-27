import React from "react";
import { useForm, Controller } from "react-hook-form";
import { View, Text, TextInput } from "react-native";
import {
  Buttom,
  Form,
  InputForm,
  TextButton,
  TextLogin,
  TextLogin2,
  TextoError,
} from "./styled";
import { TextInputMask } from "react-native-masked-text";
import { useNavigation } from "@react-navigation/native";

interface formatoDados {
  nome: string;
  email: string;
  senha: string;
  confirmaSenha: string;
  endereço: string;
  nascimento: string;
  telefone: string;
}

export default function ResponderForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<formatoDados>({ mode: "onTouched" });

  const navigation = useNavigation();
  const onSubmit = (data: formatoDados) => {
    console.log(data);
  };

  return (
    <>
      <Form>
        <TextLogin>E-mail ou nº de celular:</TextLogin>
        <Controller
          control={control}
          name="email"
          //@ts-ignore
          render={({ field: { onBlur, onChange, value } }) => (
            <InputForm
              onBlur={onBlur}
              onChangeText={(value: any) => onChange(value)}
              value={value}
              maxLength={50}
            />
          )}
          rules={{
            required: "É obrigátorio inserir um e-mail ou telefone",
            pattern: {
              value:
                /^([_a-z0-9]+(\.[_a-z0-9]+)@[a-z0-9-]+(\.[a-z0-9-]+)(\.[a-z]{2,5}))|(\d+$)$/,
              message: "Formato de e-mail ou telefone Inválido",
            },
          }}
          defaultValue=""
        />
        {errors.email && <TextoError>{errors.email.message}</TextoError>}

        <TextLogin2>Senha:</TextLogin2>
        <Controller
          control={control}
          name="senha"
          //@ts-ignore
          render={({ field: { onBlur, onChange, value } }) => (
            <InputForm
              onBlur={onBlur}
              onChangeText={(value: any) => onChange(value)}
              value={value}
              secureTextEntry={true}
            />
          )}
          rules={{
            required: "É obrigatório inserir uma senha",
            minLength: {
              value: 6,
              message: "Senha Inválida",
            },
          }}
          defaultValue=""
        />
        {errors.senha && <TextoError>{errors.senha.message}</TextoError>}
      </Form>
      <Buttom
        onPress=/*{handleSubmit(onSubmit)}*/ {() =>
          navigation.navigate("MainPage")
        }
      >
        <TextButton>Cadastrar</TextButton>
      </Buttom>
    </>
  );
}
