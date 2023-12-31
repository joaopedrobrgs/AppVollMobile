import { api } from "./Api";

import { FormLoginUsuarioType } from "../@types/Login";
import { LoginResponseDataType, LogoutResponseType } from "../@types/RespostasApi";
import { useState } from "react";
import { AxiosResponse } from "axios";

//Serviço que iremos utilizar para fazer login no aplicativo:
export function fazerLogin() {
  const [response, setResponse] = useState<AxiosResponse<LoginResponseDataType> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const sendFetch = async ({ email, senha }: FormLoginUsuarioType) => {
    if (!email || !senha) {
      setError("Necessário preencher os campos email e senha!")
      return;
    }
    //Tentar fazer requisição para API:
    try {
      // apiResponse.isLoading = true;
      setIsLoading(true);
      //Requisição do tipo "post" para a rota "paciente" para fazer o cadastro do usuario (que é um paciente):
      await api
        .post("auth/login/", {
          email,
          senha,
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
      setError(err);
      setResponse(null);
      setIsLoading(false);
    }
  };

  return {
    response,
    isLoading,
    error,
    sendFetch,
  };
}

//Serviço que iremos utilizar para fazer logout no aplicativo:
export function fazerLogout() {
  
  const [response, setResponse] = useState<AxiosResponse<LogoutResponseType> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const sendFetch = async ({ email, senha }: FormLoginUsuarioType) => {
    if (!email || !senha) {
      setError("Necessário preencher os campos email e senha!")
      return;
    }
    //Tentar fazer requisição para API:
    try {
      // apiResponse.isLoading = true;
      setIsLoading(true);
      //Requisição do tipo "post" para a rota "paciente" para fazer o cadastro do usuario (que é um paciente):
      await api
        .post("auth/login/", {
          email,
          senha,
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
      setError(err);
      setResponse(null);
      setIsLoading(false);
    }
  };

  return {
    response,
    isLoading,
    error,
    sendFetch,
  };
}
