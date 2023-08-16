import { api } from "./useApi";

import { FormDataLogin  } from "../@types/Authentication";
import { LoginResultDataType } from "../@types/RetornoApi";

//Hook que iremos utilizar para fazer login no aplicativo:
export async function fazerLogin({email, senha}: FormDataLogin)
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