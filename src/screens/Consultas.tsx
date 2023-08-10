import { Text, VStack } from "native-base";
import React from "react";
import CardConsulta from "../components/CardConsulta";
import { Titulo } from "../components/Titulo";
import { Botao } from "../components/Botao";
import { RFValue } from "../utils/RFValue";

type Props = {};

const Consultas = (props: Props) => {
  return (
    <VStack alignItems="center" p={5}>
      <Titulo color="blue.500">Minhas consultas</Titulo>
      <Botao backgroundColor="blue.800">Agendar outra consulta</Botao>
      <VStack>
        <Titulo>Próximas Consultas</Titulo>
      </VStack>
      <CardConsulta
        urlFoto="https://github.com/andreocunha.png"
        nomeEspecialista="Dr. André Cunha"
        especialidade="Cardiologista"
        data="20/04/2023"
        foiAgendado={true}
        foiAtendido={false}
      />
      <CardConsulta
        urlFoto="https://github.com/andreocunha.png"
        nomeEspecialista="Dr. André Cunha"
        especialidade="Cardiologista"
        data="20/04/2023"
        foiAgendado={true}
        foiAtendido={true}
      />
      <CardConsulta
        urlFoto="https://github.com/andreocunha.png"
        nomeEspecialista="Dr. André Cunha"
        especialidade="Cardiologista"
        data="20/04/2023"
        foiAgendado={true}
        foiAtendido={true}
      />
      <CardConsulta
        urlFoto="https://github.com/andreocunha.png"
        nomeEspecialista="Dr. André Cunha"
        especialidade="Cardiologista"
        data="20/04/2023"
        foiAgendado={true}
        foiAtendido={true}
      />
    </VStack>
  );
};

export default Consultas;
