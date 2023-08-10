import { Divider, ScrollView, Text, VStack } from "native-base";
import React from "react";
import CardConsulta from "../components/CardConsulta";
import { Titulo } from "../components/Titulo";
import { Botao } from "../components/Botao";
import { RFValue } from "../utils/RFValue";

type Props = {};

const Consultas = (props: Props) => {
  return (
    <ScrollView>
      <VStack alignItems="center" p={5}>
        <Titulo color="blue.500" fontSize={RFValue(24)}>
          Minhas consultas
        </Titulo>
        <Botao backgroundColor="blue.800" mt="5" mb="5">
          Agendar outra consulta
        </Botao>
        <VStack w="100%" key="proximas-consultas" mb="6">
          <Titulo
            alignSelf="flex-start"
            color="blue.500"
            mb="4"
            fontSize={RFValue(18)}
          >
            Próximas Consultas
          </Titulo>
          <CardConsulta
            urlFoto="https://github.com/andreocunha.png"
            nomeEspecialista="Dr. André Cunha"
            especialidade="Cardiologista"
            data="20/04/2023"
            foiAgendado
          />
        </VStack>
        <Divider />
        <VStack key="consultas-passadas" w="100%" mt="4">
          <Titulo
            alignSelf="flex-start"
            color="blue.500"
            mb="4"
            mt="0"
            fontSize={RFValue(18)}
          >
            Consultas Passadas
          </Titulo>
          <CardConsulta
            urlFoto="https://github.com/andreocunha.png"
            nomeEspecialista="Dr. André Cunha"
            especialidade="Cardiologista"
            data="20/04/2023"
            // foiAgendado
            foiAtendido
            mb="4"
          />
          <CardConsulta
            urlFoto="https://github.com/andreocunha.png"
            nomeEspecialista="Dr. André Cunha"
            especialidade="Cardiologista"
            data="20/04/2023"
            // foiAgendado
            foiAtendido
            mb="4"
          />
          <CardConsulta
            urlFoto="https://github.com/andreocunha.png"
            nomeEspecialista="Dr. André Cunha"
            especialidade="Cardiologista"
            data="20/04/2023"
            // foiAgendado
            foiAtendido
            mb="4"
          />
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default Consultas;
