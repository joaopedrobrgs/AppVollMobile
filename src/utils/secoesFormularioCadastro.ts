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
      },
      {
        id: 1,
        label: "Email",
        placeholder: "Insira seu endereço de email",
      },
      {
        id: 2,
        label: "Crie uma senha",
        placeholder: "Insira sua senha",
      },
      {
        id: 3,
        label: "Repita a senha",
        placeholder: "Insira sua senha",
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
      },
      {
        id: 1,
        label: "Endereço",
        placeholder: "Insira seu endereço",
      },
      {
        id: 2,
        label: "Número",
        placeholder: "Insira seu número",
      },
      {
        id: 3,
        label: "Complemento",
        placeholder: "Insira seu complemento",
      },
      {
        id: 4,
        label: "Telefone",
        placeholder: "(00) 0 0000-0000",
      },
      {
        id: 5,
        label: "Cidade",
        placeholder: "Insira sua cidade",
      },
      {
        id: 6,
        label: "Estado",
        placeholder: "Insira seu estado",
      },
      {
        id: 7,
        label: "País",
        placeholder: "Insira seu país",
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
