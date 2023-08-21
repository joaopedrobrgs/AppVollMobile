import { api } from "./Api";
import {
  ApiDataCadastroUsuarioType,
  FormCadastroUsuarioType,
} from "../@types/Cadastro";
import { useState } from "react";

//Serviço que iremos utilizar para fazer cadastrar usuario no aplicativo:
export function cadastrarUsuario() {

  const [response, setResponse] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const sendFetch = async (dadosCadastrais: ApiDataCadastroUsuarioType) => {
    //Se o parâmetro da função estiver vazio, retornar nulo:
    if (!dadosCadastrais) {
      setError("Necessário preencher todos os dados obrigatórios!");
      return;
    }
    //Tentar fazer requisição para API:
    try {
      // apiResponse.isLoading = true;
      setIsLoading(true);
      //Requisição do tipo "post" para a rota "paciente" para fazer o cadastro do usuario (que é um paciente):
      await api
        .post("paciente", dadosCadastrais)
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

//Serviço que iremos utilizar para buscar dados do usuario logado no aplicativo:
export function pegarDadosUsuarioLogado(){

  const [response, setResponse] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const sendFetch = async (idUsuario: string) => {
    if(!idUsuario){
      setError("Usuário não encontrado!");
      return;
    }
    try{
      setIsLoading(true)
      await api.get(`paciente/${idUsuario}`)
      .then((response)=>{
        setError(null)
        setResponse(response)
      })
      .catch((err)=>{
        setResponse(null)
        setError(err)
      })
      .finally(()=>{
        setIsLoading(false);
      })
    }
    catch(err){
      setResponse(null);
      setIsLoading(false);
      setError(err);
    }
  }

  return {
    response,
    isLoading,
    error,
    sendFetch
  }

}