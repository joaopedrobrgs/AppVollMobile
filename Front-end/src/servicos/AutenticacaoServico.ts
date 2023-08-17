import { api } from "./Api";

import { FormLoginUsuarioType  } from "../@types/Authentication";
import { LoginResultDataType } from "../@types/RetornoApi";

//Serviço que iremos utilizar para fazer login no aplicativo:
export async function fazerLogin({email, senha}: FormLoginUsuarioType)
// : Promise<LoginResultDataType> | null 
{
  if(!email || !senha){
    return null;
  }
  try{
    const resultado: LoginResultDataType = await api.post('auth/login/',{
      email,
      senha
    })
    return resultado;
  }catch(error){
    console.log(error);
    return error;
  }
}