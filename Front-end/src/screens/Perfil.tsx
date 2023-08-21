import React, { useEffect, useLayoutEffect, useState } from "react";

//Componentes:
import { VStack, ScrollView, Avatar, Divider, Text } from "native-base";
import { Titulo } from "../components/Titulo";

//Medidas Responsivas:
import { RFValue } from "../utils/RFValue";
import { StyleSheet } from "react-native";
import { pegarDadosUsuarioLogado } from "../servicos/PacienteServico";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserDataResponseType } from "../@types/RespostasApi";
import { Botao } from "../components/Botao";
import Loading from "../components/Loading";

type Props = {
  navigation: any;
};

const Perfil = ({ navigation }: Props) => {
  const { response, isLoading, error, sendFetch } = pegarDadosUsuarioLogado();

  const [dadosPaciente, setDadosPaciente] = useState<
    UserDataResponseType | undefined
  >(undefined);

  useLayoutEffect(() => {
    async function getDadosUsuario() {
      const idUsuario = await AsyncStorage.getItem("@idUsuario");
      if (!idUsuario) {
        return;
      }
      await sendFetch(idUsuario);
    }
    getDadosUsuario();
  }, []);

  useEffect(() => {
    if (!!response) {
      console.log("Data: ", response.data);
      console.log("Status: ", response.status);
      setDadosPaciente(response.data);
    }
  }, [response]);

  useEffect(() => {
    console.log(error);
  }, [error]);

  async function handleLogout() {
    await AsyncStorage.removeItem("@token");
    await AsyncStorage.removeItem("@idUsuario");
    navigation.replace("Login");
  }

  if (isLoading === true || response === null && error === null) {
    return <Loading isActive={true}></Loading>;
  }

  return (
    <ScrollView flex={1}>
      <VStack flex={1} alignItems="center" p={RFValue(5)} mb={RFValue(10)}>
        <Titulo fontSize={RFValue(24)} mt={RFValue(15)}>
          Meu Perfil
        </Titulo>
        <Avatar
          source={{
            uri: "https://avatars.githubusercontent.com/u/105058887?v=4",
          }}
          my={RFValue(10)}
          size={RFValue(70)}
        />
        <Titulo color={"blue.500"} fontSize={RFValue(18)} mb={RFValue(5)}>
          Informações Pessoais
        </Titulo>
        <Text style={styles.textBold}>{dadosPaciente?.nome ?? ""}</Text>
        <Text style={styles.textNormal}>{dadosPaciente?.email ?? ""}</Text>
        <Text style={styles.textNormal}>{dadosPaciente?.telefone ?? ""}</Text>
        <Divider mt={RFValue(15)} mb={RFValue(5)} />
        <Titulo color={"blue.500"} my={RFValue(4)} fontSize={RFValue(18)}>
          Histórico médico
        </Titulo>
        {dadosPaciente?.historico ? (
          <>
            {dadosPaciente?.historico.map((doenca, index) => (
              <Text
                style={styles.textBold}
                mt={RFValue(1)}
                key={`doenca-${index}`}
              >
                {`• ${doenca}`}
              </Text>
            ))}
          </>
        ) : (
          <>
            <Text>Sem Histórico médico.</Text>
          </>
        )}
        <Divider mt={RFValue(15)} mb={RFValue(5)} />
        <Titulo color={"blue.500"} my={RFValue(4)} fontSize={RFValue(18)}>
          Planos de saúde
        </Titulo>
        {dadosPaciente?.possuiPlanoSaude ? (
          <>
            {dadosPaciente?.planosSaude.map((plano, index) => (
              <Text
                style={styles.textBold}
                mt={RFValue(1)}
                key={`plano-${index}`}
              >
                {`• ${plano}`}
              </Text>
            ))}
          </>
        ) : (
          <>
            <Text>Sem plano de saúde cadastrado.</Text>
          </>
        )}
        <Botao
          w="50%"
          marginTop={RFValue(30)}
          onPress={handleLogout}
          backgroundColor={"blue.800"}
        >
          Deslogar
        </Botao>
      </VStack>
    </ScrollView>
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

export default Perfil;
