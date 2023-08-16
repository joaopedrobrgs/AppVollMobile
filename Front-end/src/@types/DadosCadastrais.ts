
//Tipagem do nosso formulário de dados cadastrais
export type FormDadosCadastraisType = {
  nome?: string,
  email?: string,
  senha?: string,
  confirmarSenha?: string,
  cep?: string,
  // endereco?: EnderecoType,
  rua?: string,
  numero?: string,
  complemento?: string,
  telefone?: string,
  estado?: string,
  planos?: Array<number | string>
}

export type EnderecoType = {
  rua?: string,
  numero?: string,
  complemento?: string,
  telefone?: string,
  estado?: string,
}