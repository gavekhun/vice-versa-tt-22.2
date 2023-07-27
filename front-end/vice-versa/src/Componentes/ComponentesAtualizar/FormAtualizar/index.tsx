import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import { TextInputMask } from 'react-native-masked-text';
import { Titulos, Caixa, Formulario, InputFormNome, Botão, TextoBotão, TextoError, Caixa2, TextoError2, CaixaTexto, InputFormDesc, InputFormCategoria } from "./style";
import { StyleSheet } from 'react-native';

interface formatoDados {
    novoNomeProduto: string,
    novoPreco: string,
    novaCategoria: string,
    novaDescricao: string,
}

export default function ResponderForm(){
 const { control, handleSubmit, formState: {errors}, getValues } = useForm<formatoDados> ({mode: 'onTouched'});

 const onSubmit = (data: formatoDados) =>{
    console.log(data)
 }
    return(
        <><Formulario>
            <Titulos>Novo nome do produto:</Titulos>
            <Controller
                control={control}
                name='novoNomeProduto'
                render={({ field: { onBlur, onChange, value } }) => (
                    <InputFormNome
                        onBlur={onBlur}
                        onChangeText={(value: any) => onChange(value)}
                        value={value}
                        maxLength={40} />
                )}
                rules={{
                    required: "É obrigatório colocar um nome em seu produto",
                }}
                defaultValue='' />
            {errors.novoNomeProduto && <TextoError>{errors.novoNomeProduto.message}</TextoError>}

            <CaixaTexto>
                <Titulos>Preço:</Titulos>
                <Titulos>Categoria:</Titulos>
            </CaixaTexto>
            <Caixa>
                <Caixa2>
                    <Controller
                        control={control}
                        name='novoPreco'
                        render={({ field: { onBlur, onChange, value } }) => (
                            <TextInputMask
                                style={styles.InputFormPreco}
                                type={'money'}
                                options={{
                                    precision: 2,
                                    separator: ',',
                                    delimiter: '.',
                                    unit: 'R$',
                                    suffixUnit: ''
                                }}
                                onBlur={onBlur}
                                onChangeText={(value: any) => onChange(value)}
                                value={value}
                            />
                        )}
                        rules={{
                            required: "Preço é obrigatório",
                        }}
                        defaultValue='' />
                    {errors.novoPreco && <TextoError>{errors.novoPreco.message}</TextoError>}
                </Caixa2>
                <Caixa2>
                    <Controller
                        control={control}
                        name='novaCategoria'
                        render={({ field: { onBlur, onChange, value } }) => (
                            <InputFormCategoria
                                onBlur={onBlur}
                                onChangeText={(value: any) => onChange(value)}
                                value={value}
                            />
                        )}
                        rules={{
                            required: "Categoria é obrigatória",
                        }}
                        defaultValue='' />
                    {errors.novaCategoria && <TextoError2>{errors.novaCategoria.message}</TextoError2>}
                </Caixa2>
            </Caixa>
            <Titulos>Descrição:</Titulos>
            <Controller
                control={control}
                name='novaDescricao'
                render={({ field: { onBlur, onChange, value } }) => (
                    <InputFormDesc
                        multiline
                        onBlur={onBlur}
                        onChangeText={(value: any) => onChange(value)}
                        value={value}
                        maxLength={200} />
                )}
                rules={{
                    required: "É obrigatório colocar uma descrição",
                }}
                defaultValue='' />
            {errors.novaDescricao&& <TextoError>{errors.novaDescricao.message}</TextoError>}
        </Formulario>
        <Botão onPress={handleSubmit(onSubmit)}>
            <TextoBotão>Atualizar</TextoBotão>
        </Botão></>
    )             
}
       
/*A estilização do input de preço foi feita usando o stylesheet pois aparentemente importações da biblioteca "react native masked text" não são estilizáveis pelo styled components.*/

const styles = StyleSheet.create({
    InputFormPreco:{
        backgroundColor: '#D7F1E4',
        width: 115,
        height: 38,
        borderRadius: 8,
        fontSize: 20,
        color: 'black',
        fontFamily: 'Calibri',
        paddingLeft: 10,
    },

})
