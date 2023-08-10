import {
  VStack,
  Image,
  Text,
  Box,
  Button,
  Link,
  Checkbox,
  ScrollView,
} from "native-base";
import { TouchableOpacity } from "react-native";

import Logo from "../assets/Logo.png";
import { Titulo } from "../components/Titulo";
import { EntradaTexto } from "../components/EntradaTexto";
import { Botao } from "../components/Botao";
import { SecoesFormularioCadastro as secoes } from "../utils/SecoesFormularioCadastro";

import { RFValue } from "../utils/RFValue";

import React, { useState } from "react";

type Props = {}

const Cadastro = ({}: Props) => {
  const [numSecao, setNumSecao] = useState<number>(0);

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
    <ScrollView flex={1} p={5}>
      <Image source={Logo} alt="Logo Voll" alignSelf="center"></Image>
      <Titulo fontSize={RFValue(24)}>{secoes[numSecao].titulo}</Titulo>
      {secoes[numSecao]?.entradaTexto.length > 0 ? (
        <Box>
          {secoes[numSecao]?.entradaTexto?.map((entrada) => (
            <EntradaTexto
              key={entrada.id}
              label={entrada.label}
              placeholder={entrada.placeholder}
              type={"text"}
            />
          ))}
        </Box>
      ) : (
        <Box>
          <Text color="blue.800" fontWeight="bold" fontSize="md" mt="2" mb={2}>Selecione os planos:</Text>
          {secoes[numSecao]?.checkboxes?.map((checkbox) => (
            <Checkbox key={checkbox.id} value={checkbox.value}>
              {checkbox.value}
            </Checkbox>
          ))}
        </Box>
      )}
      {numSecao > 0 && (
        <Botao bg="gray.400" onPress={handleVoltar}>
          Voltar
        </Botao>
      )}
      {numSecao < secoes.length - 1 && (
        <Botao bg="blue.800" mt={4} onPress={handleAvancar} mb={20}>
          Avançar
        </Botao>
      )}
    </ScrollView>
  );
};

export default Cadastro;
