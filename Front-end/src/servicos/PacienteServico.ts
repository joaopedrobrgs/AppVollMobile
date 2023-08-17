import { api } from "./Api";
import { FormCadastroUsuarioType } from "../@types/DadosCadastrais";

//Serviço que iremos utilizar para fazer cadastrar usuario no aplicativo:
export async function cadastrarPaciente(dadosCadastrais: FormCadastroUsuarioType){
  //Se o parâmetro da função estiver vazio, retornar nulo:
  if(!dadosCadastrais){
    return null;
  }
  //Tentar fazer requisição para API:
  try{
    //Requisição do tipo "post" para a rota "paciente" para fazer o cadastro do usuario (que é um paciente):
    const resultado = await api.post('paciente', dadosCadastrais)
    //Se der tudo certo, retornar resultado que a API envia:
    return resultado;
  }
  catch(error){
    console.log(error);
    //Se der algo errado, retornar esse erro:
    return error;
  }
}