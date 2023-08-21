import { AxiosResponse } from "axios";
import { FormBuscarEspecialistasType } from "../@types/BuscaEspecialistas";
import { EspecialistaDataResponseType } from "../@types/RespostasApi";
import { api } from "./Api";
import { useState } from "react";

export function buscarEspecialistasLocalEspecialidade() {

  const [response, setResponse] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const sendFetch = async ({estado, especialidade}: FormBuscarEspecialistasType) => {

    //Se o parâmetro da função estiver vazio, retornar nulo:
    if (!estado || !especialidade) {
      setError("Necessário preencher estado e especialidade!");
      return;
    }
    //Tentar fazer requisição para API:
    try {
      setIsLoading(true);
      //Requisição do tipo "get" para a rota "especialista/buscar" passando estado e especialidade (por meio de query)
      //para buscar especialistas especificos:
      await api
        .get(`especialista/busca`, {
          params: {
            estado: estado,
            especialidade: especialidade
          }
        })
        //Se der tudo certo, retornar resultado que a API envia:
        .then((response) => {
          setError(null);
          setResponse(response);
        })
        //Se der algo errado com a requisição, retornar esse erro:
        .catch((err) => {
          setResponse(null);
          setError(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (err) {
      //Se der algo errado com o contato com a API, retornar esse erro:
      setResponse(null);
      setIsLoading(false);
      setError(err);
    }
  };

  return {
    response,
    isLoading,
    error,
    sendFetch,
  };
}

export function buscarTodosEspecialistas() {

  const [response, setResponse] = useState<AxiosResponse<any> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosResponse<any> | string | null>(null);

  const sendFetch = async () => {

    //Tentar fazer requisição para API:
    try {
      // apiResponse.isLoading = true;
      setIsLoading(true);
      //Requisição do tipo "get" para a rota "especialista" para buscar todos os especialistas disponíveis:
      await api
        .get(`especialista`)
        //Se der tudo certo, retornar resultado que a API envia:
        .then((response) => {
          setError(null);
          setResponse(response);
        })
        //Se der algo errado com a requisição, retornar esse erro:
        .catch((err) => {
          setResponse(null);
          setError(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (err) {
      //Se der algo errado com o contato com a API, retornar esse erro:
      setResponse(null);
      setIsLoading(false);
      setError(err);
    }
  };

  return {
    response,
    isLoading,
    error,
    sendFetch,
  };
}