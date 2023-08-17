//Tipagem do nosso formulário de dados cadastrais
export type FormCadastroUsuarioType = {
  cpf: string,
  nome: string,
  email: string,
  endereco: EnderecoType,
  senha: string,
  telefone: string,
  possuiPlanoSaude: boolean,
  planosSaude?: Array<number | string>,
  imagem?: string,
}

export type EnderecoType = {
  cep: string,
  rua: string,
  numero: string,
  complemento?: string,
  estado: string,
}