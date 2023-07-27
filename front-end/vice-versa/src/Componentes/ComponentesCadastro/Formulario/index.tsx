import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextInputMask } from "react-native-masked-text";
import {
  Titulos,
  Caixa,
  Formulario,
  InputForm,
  Botão,
  TextoBotão,
  TextoError,
  Caixa2,
  TextoError2,
  CaixaTexto,
} from "./style";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

type Botao = {
  onPress?: any;
};

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
      <Formulario>
        <Titulos>Nome Completo:</Titulos>
        <Controller
          control={control}
          name="nome"
          render={({ field: { onBlur, onChange, value } }) => (
            <InputForm
              onBlur={onBlur}
              onChangeText={(value: any) => onChange(value)}
              value={value}
              maxLength={40}
            />
          )}
          rules={{
            required: "É obrigatório cadastrar um nome",
            pattern: {
              value: /^[a-zA-Z- ]+$/i,
              message: "Um nome só pode possuir letras",
            },
            minLength: {
              value: 10,
              message: "Insira seu nome completo",
            },
          }}
          defaultValue=""
        />
        {errors.nome && <TextoError>{errors.nome.message}</TextoError>}

        <Titulos>Endereço de e-mail:</Titulos>
        <Controller
          control={control}
          name="email"
          render={({ field: { onBlur, onChange, value } }) => (
            <InputForm
              onBlur={onBlur}
              onChangeText={(value: any) => onChange(value)}
              value={value}
              maxLength={50}
            />
          )}
          rules={{
            required: "É obrigátorio cadastrar um e-mail",
            pattern: {
              value: /^[A-Z0-9._-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Formato de e-mail inválido",
            },
          }}
          defaultValue=""
        />
        {errors.email && <TextoError>{errors.email.message}</TextoError>}

        <Titulos>Senha:</Titulos>
        <Controller
          control={control}
          name="senha"
          render={({ field: { onBlur, onChange, value } }) => (
            <InputForm
              onBlur={onBlur}
              onChangeText={(value: any) => onChange(value)}
              value={value}
              secureTextEntry={true}
            />
          )}
          rules={{
            required: "É obrigatório cadastrar uma senha",
            minLength: {
              value: 6,
              message: "Senha curta",
            },
          }}
          defaultValue=""
        />
        {errors.senha && <TextoError>{errors.senha.message}</TextoError>}

        <Titulos>Confirme sua senha:</Titulos>
        <Controller
          control={control}
          name="confirmaSenha"
          render={({ field: { onBlur, onChange, value } }) => (
            <InputForm
              onBlur={onBlur}
              onChangeText={(value: any) => onChange(value)}
              value={value}
              secureTextEntry={true}
            />
          )}
          rules={{
            validate: {
              confirmasenha: (value) => {
                const { senha } = getValues();
                return (
                  senha === value ||
                  "A confirmação de senha é diferente da senha"
                );
              },
            },
          }}
          defaultValue=""
        />
        {errors.confirmaSenha && (
          <TextoError>{errors.confirmaSenha.message}</TextoError>
        )}

        <Titulos>Endereço:</Titulos>
        <Controller
          control={control}
          name="endereço"
          render={({ field: { onBlur, onChange, value } }) => (
            <InputForm
              onBlur={onBlur}
              onChangeText={(value: any) => onChange(value)}
              value={value}
            />
          )}
          rules={{
            required: "É obrigatório cadastrar um endereço",
          }}
          defaultValue=""
        />
        {errors.endereço && <TextoError>{errors.endereço.message}</TextoError>}

        <CaixaTexto>
          <Titulos>Nascimento:</Titulos>
          <Titulos>Telefone:</Titulos>
        </CaixaTexto>
        <Caixa>
          <Caixa2>
            <Controller
              control={control}
              name="nascimento"
              render={({ field: { onBlur, onChange, value } }) => (
                <TextInputMask
                  style={styles.inputNasc}
                  type={"datetime"}
                  options={{
                    format: "DD/MM/YYYY",
                  }}
                  onBlur={onBlur}
                  onChangeText={(value: any) => onChange(value)}
                  value={value}
                />
              )}
              rules={{
                required: "Data obrigatória",
                minLength: {
                  value: 10,
                  message: "Nascimento inválido",
                },
              }}
              defaultValue=""
            />
            {errors.nascimento && (
              <TextoError>{errors.nascimento.message}</TextoError>
            )}
          </Caixa2>
          <Caixa2>
            <Controller
              control={control}
              name="telefone"
              render={({ field: { onBlur, onChange, value } }) => (
                <TextInputMask
                  style={styles.inputTel}
                  type={"cel-phone"}
                  options={{
                    maskType: "BRL",
                    withDDD: true,
                    dddMask: "(99)",
                  }}
                  onBlur={onBlur}
                  onChangeText={(value: any) => onChange(value)}
                  value={value}
                />
              )}
              rules={{
                required: "Telefone é obrigatório",
                minLength: {
                  value: 14,
                  message: "Telefone inválido",
                },
              }}
              defaultValue=""
            />
            {errors.telefone && (
              <TextoError2>{errors.telefone.message}</TextoError2>
            )}
          </Caixa2>
        </Caixa>
      </Formulario>
      <Botão
        onPress=/*{handleSubmit(onSubmit)}*/ {() =>
          navigation.navigate("MainPage")
        }
      >
        <TextoBotão>Cadastrar</TextoBotão>
      </Botão>
    </>
  );
}

/*A estilização dos inputs de nascimento e telefone foram feitas usando o stylesheet pois aparentemente importações da biblioteca "react native masked text" não são estilizáveis pelo styled components.*/

const styles = StyleSheet.create({
  inputNasc: {
    backgroundColor: "white",
    width: 110,
    height: 43,
    borderRadius: 8,
    fontSize: 20,
    color: "black",
    fontFamily: "Calibri",
    paddingLeft: 10,
  },

  inputTel: {
    backgroundColor: "white",
    width: 178,
    height: 43,
    borderRadius: 8,
    fontSize: 20,
    color: "black",
    fontFamily: "Calibri",
    paddingLeft: 10,
  },
});
