import { Box, ScrollView, Text, VStack } from "native-base";
import React from "react";
import { EntradaTexto } from "../components/EntradaTexto";
import { Botao } from "../components/Botao";
import { Titulo } from "../components/Titulo";
import CardConsulta from "../components/CardConsulta";
import { RFValue } from "../utils/RFValue";

interface Props {
  navigation: any;
}

const Pesquisa = ({navigation}: Props) => {
  return (
    <ScrollView>
      <VStack w="100%" flex="1" alignItems="center" p={RFValue(5)}>
        <Box
          w="100%"
          backgroundColor="white"
          p={RFValue(5)}
          borderRadius="lg"
          shadow="2"
        >
          <EntradaTexto placeholder="Digite a especialidade" type="text" />
          <EntradaTexto
            placeholder="Digite sua localização"
            type="text"
            mt={RFValue(5)}
          />
          <Botao mt={RFValue(5)} backgroundColor="blue.800">
            Buscar
          </Botao>
        </Box>
        <Titulo mt={RFValue(5)} color="blue.500" fontSize={RFValue(24)}>
          Resultado da busca
        </Titulo>
        <VStack key="resultados-da-busca" w="100%" mb={RFValue(10)}>
          <CardConsulta
            urlFoto="https://github.com/andreocunha.png"
            nomeEspecialista="Dr. André Cunha"
            especialidade="Cardiologista"
            mt={RFValue(5)}
          />
          <CardConsulta
            urlFoto="https://github.com/andreocunha.png"
            nomeEspecialista="Dr. André Cunha"
            especialidade="Cardiologista"
            mt={RFValue(5)}
          />
          <CardConsulta
            urlFoto="https://github.com/andreocunha.png"
            nomeEspecialista="Dr. André Cunha"
            especialidade="Cardiologista"
            mt={RFValue(5)}
          />
          <CardConsulta
            urlFoto="https://github.com/andreocunha.png"
            nomeEspecialista="Dr. André Cunha"
            especialidade="Cardiologista"
            mt={RFValue(5)}
          />
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default Pesquisa;
