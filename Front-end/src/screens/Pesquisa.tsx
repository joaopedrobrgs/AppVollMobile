import { Box, ScrollView, Text, VStack, useToast } from "native-base";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { EntradaTexto } from "../components/EntradaTexto";
import { Botao } from "../components/Botao";
import { Titulo } from "../components/Titulo";
import CardConsulta from "../components/CardConsulta";
import { RFValue } from "../utils/RFValue";

//Importando componentes do react-hook-form (utilizado para manipularmos um formulário sem precisar de criar estados):
import { Controller, useForm } from "react-hook-form";
import { FormBuscarEspecialistasType } from "../@types/BuscaEspecialistas";
import {
  buscarEspecialistasLocalEspecialidade,
  buscarTodosEspecialistas,
} from "../servicos/EspecialistaServico";
import { EspecialistaDataResponseType } from "../@types/RespostasApi";
import Loading from "../components/Loading";

interface Props {
  navigation: any;
}

const Pesquisa = ({ navigation }: Props) => {
  const { isLoading, response, error, sendFetch } =
    buscarEspecialistasLocalEspecialidade();
  const {
    isLoading: preloadIsLoading,
    response: preloadResponse,
    error: preloadError,
    sendFetch: preloadSendFetch,
  } = buscarTodosEspecialistas();

  const { control, getValues, watch, handleSubmit } = useForm();

  const [especialistas, setEspecialistas] =
    useState<Array<EspecialistaDataResponseType> | null>(null);

  const toast = useToast();

  useLayoutEffect(() => {
    preloadSendFetch();
  }, []);

  async function handleBuscar(data: FormBuscarEspecialistasType) {
    const { estado, especialidade } = data;

    //Checando se usuário digitou um estado:
    if (!estado || estado === "") {
      toast.show({
        title: "Campo estado vazio!",
        description: "Informe um estado para fazer a busca...",
        backgroundColor: "red.500",
        textAlign: "center",
      });
      return;
    }

    //Checando se usuário digitou uma especialidade:
    if (!especialidade || especialidade === "") {
      toast.show({
        title: "Campo especialidade vazio!",
        description: "Informe uma especialidade para fazer a busca...",
        backgroundColor: "red.500",
        textAlign: "center",
      });
      return;
    }

    await sendFetch({ estado, especialidade });
  }

  useEffect(() => {
    if (!!preloadResponse) {
      setEspecialistas(preloadResponse.data);
    }
  }, [preloadResponse]);

  useEffect(() => {
    if (!!response) {
      console.log("Data: ", response.data);
      console.log("Status: ", response.status);
      setEspecialistas(response.data);
    }
  }, [response]);

  useEffect(() => {
    if (!!error) {
      console.log(error);
    }
  });

  return (
    <ScrollView>
      <VStack w="100%" flex="1" alignItems="center" p={RFValue(5)}>
        <Titulo mb={RFValue(5)} color="blue.500" fontSize={RFValue(24)}>
          Buscar especialistas:
        </Titulo>
        <Box
          w="100%"
          backgroundColor="white"
          p={RFValue(5)}
          borderRadius="lg"
          shadow="2"
        >
          <Controller
            name="estado"
            control={control}
            defaultValue={""}
            render={({ field }) => {
              return (
                <EntradaTexto
                  placeholder="Digite o seu estado"
                  type="text"
                  value={field.value}
                  onChangeText={(value) => {
                    field.onChange(value);
                  }}
                />
              );
            }}
          />
          <Controller
            name="especialidade"
            control={control}
            defaultValue={""}
            render={({ field }) => {
              return (
                <EntradaTexto
                  placeholder="Digite a especialidade"
                  type="text"
                  mt={RFValue(5)}
                  value={field.value}
                  onChangeText={(value) => {
                    field.onChange(value);
                  }}
                />
              );
            }}
          />
          <Botao
            mt={RFValue(5)}
            backgroundColor="blue.800"
            onPress={handleSubmit(handleBuscar)}
          >
            Buscar
          </Botao>
        </Box>
        <Loading
          isActive={
            isLoading === true || preloadIsLoading === true ? true : false
          }
        ></Loading>
        <Titulo mt={RFValue(5)} color="blue.500" fontSize={RFValue(24)}>
          Resultados:
        </Titulo>
        {!!especialistas ? (
          especialistas.length === 0 ? (
            <Text mt={RFValue(5)} fontWeight="bold">
              Nenhum especialista encontrado com base nos parâmetros!
            </Text>
          ) : (
            especialistas?.map((especialista, index) => (
              <VStack key={`especialista-${index}`} w="100%">
                <VStack w="100%" mb={RFValue(5)}>
                  <CardConsulta
                    urlFoto={especialista?.imagem}
                    nomeEspecialista={especialista?.nome}
                    especialidade={especialista?.especialidade}
                    mt={RFValue(5)}
                  />
                </VStack>
              </VStack>
            ))
          )
        ) : (
          <></>
        )}
      </VStack>
    </ScrollView>
  );
};

export default Pesquisa;
