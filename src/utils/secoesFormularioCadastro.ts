//Array que contém os campos do formulário (vai ser importado na tela Cadastro):
export const SecoesFormularioCadastro = [
  {
    id: 0,
    titulo: "Insira alguns dados básicos",
    entradaTexto: [
      {
        id: 0,
        label: "Nome",
        placeholder: "Digite seu nome completo",
        type: "text",
        name: "nome"
      },
      {
        id: 1,
        label: "Email",
        placeholder: "Insira seu endereço de email",
        type: "text",
        name: "email"
      },
      {
        id: 2,
        label: "CPF",
        placeholder: "Insira seu CPF",
        type: "text",
        name: "cpf"
      },
      {
        id: 3,
        label: "Foto de perfil",
        placeholder: "Insira sua foto de perfil",
        type: "text",
        name: "imagem"
      },
      {
        id: 4,
        label: "Crie uma senha",
        placeholder: "Insira sua senha",
        type: "password",
        name: "senha"
      },
      {
        id: 5,
        label: "Repita a senha",
        placeholder: "Insira sua senha",
        type: "password",
        name: "confirmarSenha"
      },
    ],
    checkboxes: [],
  },
  {
    id: 1,
    titulo: "Agora mais alguns dados sobre você",
    entradaTexto: [
      {
        id: 0,
        label: "CEP",
        placeholder: "Insira seu CEP",
        type: "text",
        name: "cep"
      },
      {
        id: 1,
        label: "Rua",
        placeholder: "Insira o nome da rua",
        type: "text",
        name: "rua"
      },
      {
        id: 2,
        label: "Número",
        placeholder: "Insira seu número",
        type: "text",
        name: "numero"
      },
      {
        id: 3,
        label: "Complemento",
        placeholder: "Insira seu complemento",
        type: "text",
        name: "complemento"
      },
      {
        id: 4,
        label: "Telefone",
        placeholder: "(00) 0 0000-0000",
        type: "text",
        name: "telefone"
      },
      {
        id: 5,
        label: "Estado",
        placeholder: "Insira seu estado",
        type: "text",
        name: "estado"
      },
    ],
    checkboxes: [],
  },
  {
    id: 2,
    titulo: "Para finalizar, qual seu plano de saúde?",
    entradaTexto: [],
    checkboxes: [
      {
        id: 0,
        value: "Sulamerica",
      },
      {
        id: 1,
        value: "Unimed",
      },
      {
        id: 2,
        value: "Bradesco",
      },
      {
        id: 3,
        value: "Amil",
      },
      {
        id: 4,
        value: "Biosaúde",
      },
      {
        id: 5,
        value: "Biovida",
      },
      {
        id: 6,
        value: "Outros",
      },
      {
        id: 7,
        value: "Não tenho plano",
      },
    ],
  },
];
