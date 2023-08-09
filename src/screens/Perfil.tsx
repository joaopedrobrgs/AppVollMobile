import React from "react";

//Componentes:
import { VStack, ScrollView, Avatar, Divider, Text } from "native-base";
import { Titulo } from "../components/Titulo";

//Medidas Responsivas:
import { RFValue } from "../utils/RFValue";
import { StyleSheet } from "react-native";

type Props = {};

const Perfil = (props: Props) => {
  return (
    <ScrollView flex={1}>
      <VStack flex={1} alignItems='center' p={RFValue(5)}>
        <Titulo fontSize={RFValue(24)}>Meu Perfil</Titulo>
        <Avatar
          source={{
            uri: "https://avatars.githubusercontent.com/u/105058887?v=4",
          }}
          mt={RFValue(5)}
        />
        <Titulo color={"blue.500"} fontSize={RFValue(18)}>Informações Pessoais</Titulo>
        <Text style={styles.textBold} m={RFValue(1)}>João Pedro Borges Santos</Text>
        <Text style={styles.textNormal}>18/01/1996</Text>
        <Text style={styles.textNormal}>Uberlândia/MG</Text>
        <Divider mt={RFValue(5)}/>
        <Titulo color={"blue.500"} mb={RFValue(1)} fontSize={RFValue(18)}>Histórico médico</Titulo>
        <Text style={styles.textBold} m={RFValue(1)}>• Bronquite</Text>
        <Text style={styles.textBold} m={RFValue(1)}>• Sinusite</Text>
      </VStack>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textBold: {
    color: '#6B6E71',
    fontWeight: 'bold',
    fontSize: RFValue(16)
  },
  textNormal: {
    color: '#6B6E71',
    fontSize: RFValue(14)
  }
})

export default Perfil;
