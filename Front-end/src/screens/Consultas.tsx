import { Divider, ScrollView, Text, VStack } from "native-base";
import React from "react";
import CardConsulta from "../components/CardConsulta";
import { Titulo } from "../components/Titulo";
import { Botao } from "../components/Botao";
import { RFValue } from "../utils/RFValue";

interface Props {
  navigation: any;
}

const Consultas = ({ navigation }: Props) => {
  return (
    <ScrollView>
      <VStack alignItems="center" p={RFValue(5)}>
        <Titulo color="blue.500" fontSize={RFValue(24)}>
          Minhas consultas
        </Titulo>
        <Botao
          backgroundColor="blue.800"
          mt={RFValue(5)}
          mb={RFValue(5)}
          onPress={() => navigation.navigate("Pesquisa")}
        >
          Agendar outra consulta
        </Botao>
        <VStack w="100%" key="proximas-consultas" mb={RFValue(6)}>
          <Titulo
            alignSelf="flex-start"
            color="blue.500"
            mb={RFValue(4)}
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
        <VStack key="consultas-passadas" w="100%" mt={RFValue(4)} mb={RFValue(10)}>
          <Titulo
            alignSelf="flex-start"
            color="blue.500"
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
            mt={RFValue(4)}
          />
          <CardConsulta
            urlFoto="https://github.com/andreocunha.png"
            nomeEspecialista="Dr. André Cunha"
            especialidade="Cardiologista"
            data="20/04/2023"
            // foiAgendado
            foiAtendido
            mt={RFValue(4)}
          />
          <CardConsulta
            urlFoto="https://github.com/andreocunha.png"
            nomeEspecialista="Dr. André Cunha"
            especialidade="Cardiologista"
            data="20/04/2023"
            // foiAgendado
            foiAtendido
            mt={RFValue(4)}
          />
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default Consultas;
