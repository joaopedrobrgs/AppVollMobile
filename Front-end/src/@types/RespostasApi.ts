import { EnderecoType } from "./Endereco"

//Tipagem dos dados que serão retornados pela API quando fizermos login:
export type LoginResponseType = {
  data: LoginResponseDataType
  status: string
  // message?: "string"
}
export type LoginResponseDataType = {
  auth: boolean,
  token: string,
  rota: string 
}

//Tipagem dos dados que são retornados pelo token:
export type TokenResponseDataType = {
  "id": string,
  "role": string,
  "iat"?: number | string,
  "exp"?: number | string
}

//Tipagem dos dados que serão retornador quando usuário fizer logout:
export type LogoutResponseType = {
  auth: boolean,
  token: null | string
}

//Tipagem dos dados do usuario logado que serão retornados pela API:
export type UserDataResponseType = {
  cpf: string,
  nome: string,
  email: string,
  endereco: EnderecoType,
  senha: string,
  telefone: string,
  possuiPlanoSaude: boolean,
  planosSaude: Array<number | string>,
  imagem: string,
  estaAtivo: boolean,
  historico: any,
}

//Tipagem dos dados do especialista que serão retornados pela API:
export type EspecialistaDataResponseType = {
  nome: string,
  crm: string,
  imagem: string,
  estaAtivo: boolean,
  especialidade: string,
  email: string,
  telefone: string,
  possuiPlanoSaude: boolean,
  planosSaude: Array<string>,
  role: string,
  id: string,
  endereco: EnderecoType,
  avaliacoes: Array<any>
}