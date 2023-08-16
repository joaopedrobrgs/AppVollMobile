import React from "react";

import { Text, VStack, ScrollView, Image, Box, Divider } from "native-base";
import { Titulo } from "../components/Titulo";

import Logo from "../assets/Logo.png";
import { RFValue } from "../utils/RFValue";
import { EntradaTexto } from "../components/EntradaTexto";
import { Botao } from "../components/Botao";

import { DepoimentosPacientes as depoimentos } from "../utils/ResultadoBuscaAPIFicticia";
import { StyleSheet } from "react-native";

type Props = {};

const Principal = (props: Props) => {
  return (
    <ScrollView flex={1}>
      <VStack w="100%" key="cabecalho">
        <Image source={Logo} alt="Logo Voll" m={RFValue(5)} />
        <Titulo
          color={"blue.500"}
          textAlign="left"
          marginX={RFValue(5)}
          fontSize={RFValue(24)}
        >
          Boas-Vindas!
        </Titulo>
      </VStack>
      <VStack flex={1} alignItems={"center"} m={RFValue(5)} key="pesquisa">
        <Box
          w="100%"
          p={RFValue(5)}
          shadow="2"
          backgroundColor="white"
          borderRadius="lg"
        >
          <EntradaTexto type="text" placeholder="Digite a especialidade" />
          <EntradaTexto
            type="text"
            placeholder="Digite sua localização"
            mt={RFValue(5)}
          />
          <Botao backgroundColor="blue.800" mt={RFValue(5)}>
            Buscar
          </Botao>
        </Box>
        <VStack w="100%" mt={RFValue(5)} key="depoimentos" mb={RFValue(10)}>
          <Titulo fontSize={RFValue(24)} color={"blue.800"}>
            Depoimentos
          </Titulo>
          {depoimentos.map((depoimento, index) => (
            <>
              <VStack
                key={`depoimento-${depoimento.id}`}
                style={styles.containerDepoimento}
                mt={RFValue(5)}
              >
                <Text style={styles.textoDepoimento}>{depoimento.texto}</Text>
                <Text style={styles.textoUsuario}>
                  {depoimento.nome}, {depoimento.idade} anos,{" "}
                  {depoimento.cidade}/{depoimento.estado}.
                </Text>
              </VStack>
              <Divider />
            </>
          ))}
        </VStack>
      </VStack>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerDepoimento: {
    margin: RFValue(5),
  },
  textoDepoimento: {
    color: "#90989F",
    textAlign: "justify",
    padding: RFValue(5),
  },
  textoUsuario: {
    color: "#6B6E71",
    fontWeight: "bold",
    textAlign: "center",
    padding: RFValue(5),
  },
});

export default Principal;
