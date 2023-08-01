import { VStack, Image, Text, Box, Button, Link } from "native-base";
import { TouchableOpacity } from "react-native";

import Logo from "../assets/Logo.png";
import { Titulo } from "../components/Titulo";
import { EntradaTexto } from "../components/EntradaTexto";
import { Botao } from "../components/Botao";
import secoes from "../utils/secoes";

import React, {useState} from 'react';

interface Props {}

const Login = (props: Props) => {

  const [numSecao, setNumSecao] = useState<number>(0);

  const handleAvancar = () => {
    if(numSecao < secoes.length - 1 ){
      setNumSecao(numSecao + 1)
    }
  };

  const handleVoltar = () => {
    if(numSecao > 0){
      setNumSecao(numSecao - 1)
    } 
  }

  return (
    <VStack flex={1} alignItems="center" p={5}>
      <Image source={Logo} alt="Logo Voll"></Image>
      <Titulo>{secoes[numSecao].titulo}</Titulo>
      <Box>
        {secoes[numSecao].entradaTexto.map((entrada) => (
          <EntradaTexto
            key={entrada.id}
            label={entrada.label}
            placeholder={entrada.placeholder}
          />
        ))}
      </Box>
      {
        numSecao > 0 
        ? 
        <Botao bg="gray.400" onPress={handleVoltar}>Voltar</Botao>
        :
        <></>
      }
      {
        numSecao < secoes.length - 1 
        ? 
        <Botao bg="blue.800" onPress={handleAvancar}>Avançar</Botao>
        :
        <></>
      }
    </VStack>
  );
};

export default Login;
