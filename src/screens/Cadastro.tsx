import {
  Image,
  Text,
  Box,
  Checkbox,
  ScrollView,
} from "native-base";

import Logo from "../assets/Logo.png";
import { Titulo } from "../components/Titulo";
import { EntradaTexto } from "../components/EntradaTexto";
import { Botao } from "../components/Botao";

//Importando os campos do nosso formulário de cadastro:
import { SecoesFormularioCadastro as secoes } from "../utils/SecoesFormularioCadastro";

import { RFValue } from "../utils/RFValue";

import React, { useEffect, useState } from "react";

//Importando nossa tipagem do formulário de dados cadastrais:
import { FormDadosCadastraisType } from "../@types/DadosCadastrais";

type Props = {};

const Cadastro = ({}: Props) => {

  const [numSecao, setNumSecao] = useState<number>(0);
  
  //Estado que vai armazenar nossos dados cadastrais:
  const [dadosCadastrais, setDadosCadastrais] = useState<FormDadosCadastraisType>({})

  //Função que vai atualizar nosso estado de dados cadastrais
    //Ela vai ser executada sempre que algo for alterado lá no nosso formulário
    //Ela pega os dados que já estavam armazenado, faz um spread neles dentro do objeto
    //e depois adiciona o valor que está sendo digitado no momento
  function atualizarDados(name: string, text: string): void{
    setDadosCadastrais({
      ...dadosCadastrais,
      [name]: text
    })
  }

  useEffect(()=>{
    console.log(dadosCadastrais)
  }, [dadosCadastrais])

  const handleAvancar = () => {
    if (numSecao < secoes.length - 1) {
      setNumSecao(numSecao + 1);
    }
  };

  const handleVoltar = () => {
    if (numSecao > 0) {
      setNumSecao(numSecao - 1);
    }
  };

  return (
    <ScrollView flex={1} p={RFValue(5)}>
      <Image source={Logo} alt="Logo Voll" alignSelf="center"></Image>
      <Titulo fontSize={RFValue(24)} mt={RFValue(5)}>
        {secoes[numSecao].titulo}
      </Titulo>
      {secoes[numSecao]?.entradaTexto.length > 0 ? (
        <Box>
          {secoes[numSecao]?.entradaTexto?.map((entrada) => (
            <EntradaTexto
              key={entrada.id}
              label={entrada.label}
              placeholder={entrada.placeholder}
              type={entrada.type}
              mt={RFValue(5)}
              //Atrelando valor do input ao valor que está sendo armazenado no estado "dadosCadastrais"
              value={dadosCadastrais[entrada.name]}
              //Executando função de atualizar dados (que atualiza o estados "dadosCadastrais") toda vez que algo é digitado no input:
              onChangeText={(text)=>atualizarDados(entrada.name, text)}
            />
          ))}
        </Box>
      ) : (
        <Box>
          <Text color="blue.800" fontWeight="bold" fontSize={RFValue(16)} mt={RFValue(4)} mb={RFValue(1)}>
            Selecione os planos:
          </Text>
          {secoes[numSecao]?.checkboxes?.map((checkbox) => (
            <Checkbox key={checkbox.id} value={checkbox.value} mt={RFValue(3)}>
              {checkbox.value}
            </Checkbox>
          ))}
        </Box>
      )}
      {numSecao > 0 && (
        <Botao bg="gray.400" onPress={handleVoltar} mt={RFValue(6)}>
          Voltar
        </Botao>
      )}
      {numSecao < secoes.length - 1 && (
        <Botao bg="blue.800" mt={RFValue(6)}  mb={RFValue(20)} onPress={handleAvancar}>
          Avançar
        </Botao>
      )}
    </ScrollView>
  );
};

export default Cadastro;
