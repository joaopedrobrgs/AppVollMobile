import { EnderecoType } from "./Endereco"

//Tipagem do nosso formulário de dados cadastrais:
export type FormCadastroUsuarioType = {
  nome?: string,
  email?: string,
  cpf?: string,
  imagem?: string,
  senha?: string,
  confirmarSenha?: string,
  cep?: string,
  rua?: string,
  numero?: string,
  complemento?: string,
  estado?: string,
  telefone?: string,
}

//Tipagem do nosso formulário de dados cadastrais adaptado para o que a API pede:
export type ApiDataCadastroUsuarioType = {
  cpf: string,
  nome: string,
  email: string,
  endereco: EnderecoType,
  senha: string,
  telefone: string,
  possuiPlanoSaude: boolean,
  planosSaude: Array<number | string>,
  imagem: string,
  estaAtivo: boolean
}
