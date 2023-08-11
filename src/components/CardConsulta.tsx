import React, { ReactNode } from "react";

import { ITextProps, Text, VStack, Avatar } from "native-base";
import { Botao } from "./Botao";
import { StyleSheet } from "react-native";
import { RFValue } from "../utils/RFValue";

interface Props extends ITextProps {
  // children: ReactNode;
  urlFoto: string;
  nomeEspecialista: string;
  especialidade: string;
  data?: string;
  foiAtendido?: boolean;
  foiAgendado?: boolean;
}

const CardConsulta = ({
  urlFoto,
  nomeEspecialista,
  especialidade,
  data,
  foiAtendido = false,
  foiAgendado = false,
  ...rest
}: Props) => {
  return (
    <VStack
      w="100%"
      bg={foiAtendido ? "blue.100" : "white"}
      p={RFValue(5)}
      borderRadius="lg"
      shadow="2"
      {...rest}
    >
      <VStack flexDir="row" alignItems="center">
        <Avatar size="lg" source={{ uri: urlFoto }} />
        <VStack pl={RFValue(4)}>
          <Text style={styles.textBold}>{nomeEspecialista}</Text>
          <Text style={styles.textNormal}>{especialidade}</Text>
          <Text style={styles.textNormal}>{data}</Text>
        </VStack>
      </VStack>
      <VStack>
        <Botao mt={4} backgroundColor="blue.800">
          {!foiAgendado && !foiAtendido && "Agendar Consulta"}
          {foiAgendado && !foiAtendido && "Cancelar"}
          {foiAtendido && "Consultar novamente"}
        </Botao>
      </VStack>
    </VStack>
  );
};

const styles = StyleSheet.create({
  textBold: {
    color: "#6B6E71",
    fontWeight: "bold",
    fontSize: RFValue(16),
  },
  textNormal: {
    color: "#6B6E71",
    fontSize: RFValue(14),
  },
});

export default CardConsulta;
