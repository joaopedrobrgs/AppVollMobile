import {
  Image,
  Text,
  Box,
  Checkbox,
  ScrollView,
  FormControl,
  Select,
  VStack,
  Switch,
  useToast,
} from "native-base";

import Logo from "../assets/Logo.png";
import { Titulo } from "../components/Titulo";
import { EntradaTexto } from "../components/EntradaTexto";
import { Botao } from "../components/Botao";

//Importando os campos do nosso formulário de cadastro:
import { SecoesFormularioCadastro as secoes } from "../utils/SecoesFormularioCadastro";

import { RFValue } from "../utils/RFValue";

import React, { useEffect, useState } from "react";

//Importando nossa tipagem do formulário de dados cadastrais:
import { FormCadastroUsuarioType } from "../@types/Cadastro";
import { cadastrarUsuario } from "../servicos/PacienteServico";

type Props = {
  navigation: any;
};

const Cadastro = ({ navigation }: Props) => {
  const [numSecao, setNumSecao] = useState<number>(0);

  const toast = useToast();

  //Estado que vai armazenar nossos dados cadastrais:
  const [dadosCadastrais, setDadosCadastrais] =
    useState<FormCadastroUsuarioType>({});

  const [possuiPlano, setPossuiPlano] = useState<boolean>(false);

  const [planos, setPlanos] = useState<Array<number | string>>([]);

  //Função que vai atualizar nosso estado de dados cadastrais
  //Ela vai ser executada sempre que algo for alterado lá no nosso formulário
  //Ela pega os dados que já estavam armazenado, faz um spread neles dentro do objeto
  //e depois adiciona o valor que está sendo digitado no momento
  function atualizarDados(name: string, text: string): void {
    setDadosCadastrais({
      ...dadosCadastrais,
      [name]: text,
    });
  }

  const handleAvancar = () => {
    if (numSecao === 0) {
      if (!dadosCadastrais.nome) {
        toast.show({
          title: 'Campo "Nome" obrigatório!',
          backgroundColor: "red.500",
          textAlign: "center",
        });
        return;
      }
      if (!dadosCadastrais.email) {
        toast.show({
          title: 'Campo "Email" obrigatório!',
          backgroundColor: "red.500",
          textAlign: "center",
        });
        return;
      }
      if (!dadosCadastrais.cpf) {
        toast.show({
          title: 'Campo "CPF" obrigatório!',
          backgroundColor: "red.500",
          textAlign: "center",
        });
        return;
      }
      if (!dadosCadastrais.senha) {
        toast.show({
          title: "Senha obrigatória!",
          backgroundColor: "red.500",
          textAlign: "center",
        });
        return;
      }
      if (!dadosCadastrais.confirmarSenha) {
        toast.show({
          title: "Deve confirmar a senha!",
          backgroundColor: "red.500",
          textAlign: "center",
        });
        return;
      }
      if (dadosCadastrais.senha !== dadosCadastrais.confirmarSenha) {
        toast.show({
          title: "Senhas não correspondem!",
          backgroundColor: "red.500",
          textAlign: "center",
        });
        return;
      }
    }
    if (numSecao === 1) {
      if (!dadosCadastrais.cep) {
        toast.show({
          title: 'Campo "CEP" obrigatório!',
          backgroundColor: "red.500",
          textAlign: "center",
        });
        return;
      }
      if (!dadosCadastrais.rua) {
        toast.show({
          title: 'Campo "Rua" obrigatório!',
          backgroundColor: "red.500",
          textAlign: "center",
        });
        return;
      }
      if (!dadosCadastrais.numero) {
        toast.show({
          title: 'Campo "Número" obrigatório!',
          backgroundColor: "red.500",
          textAlign: "center",
        });
        return;
      }
      if (!dadosCadastrais.telefone) {
        toast.show({
          title: 'Campo "Telefone" obrigatório!',
          backgroundColor: "red.500",
          textAlign: "center",
        });
        return;
      }
      if (!dadosCadastrais.estado) {
        toast.show({
          title: 'Campo "Estado" obrigatório!',
          backgroundColor: "red.500",
          textAlign: "center",
        });
        return;
      }
    }
    if (numSecao < secoes.length - 1) {
      setNumSecao(numSecao + 1);
    }
  };

  const handleVoltar = () => {
    if (numSecao > 0) {
      setNumSecao(numSecao - 1);
    }
  };

  //Pegando estados e métodos da nossa função de cadastrar paciente:
  const { response, error, isLoading, sendFetch } = cadastrarUsuario();

  //Verificando se requisição está sendo processada:
  useEffect(() => {
    if (!!isLoading) {
      console.log("Enviando requisição...");
    }
  }, [isLoading]);

  useEffect(() => {
    if (!!response) {
      console.log("Status: ", response.status);
      console.log("Data: ", response.data);
      console.log("Error: ", error)
      if (response.status !== 202) {
        toast.show({
          title: "Algo deu errado!",
          description: "Tente novamente mais tarde...",
          backgroundColor: "red.500",
          textAlign: "center",
        });
        return;
      }
      toast.show({
        title: "Cadastro realizado com sucesso",
        description: "",
        backgroundColor: "green.500",
        textAlign: "center",
      });
      setDadosCadastrais({});
      setPossuiPlano(false);
      setPlanos([]);
      navigation.replace("Login");
    }
  }, [response]);

  useEffect(() => {
    if (!!error) {
      console.log("Data: ", response);
      console.log("Error: ", error);
      toast.show({
        title: "Algo deu errado!",
        description: "Tente novamente mais tarde...",
        backgroundColor: "red.500",
        textAlign: "center",
      });
    }
  }, [error]);

  async function handleCadastro() {
    await sendFetch({
      nome: dadosCadastrais.nome,
      cpf: dadosCadastrais.cpf,
      email: dadosCadastrais.email,
      senha: dadosCadastrais.senha,
      imagem: dadosCadastrais.imagem ?? "",
      estaAtivo: true,
      endereco: {
        cep: dadosCadastrais.cep,
        rua: dadosCadastrais.rua,
        numero: dadosCadastrais.numero,
        complemento: dadosCadastrais?.complemento ?? "",
        estado: dadosCadastrais.estado,
      },
      possuiPlanoSaude: possuiPlano,
      planosSaude: planos ?? [],
      telefone: dadosCadastrais.telefone,
    });
  }

  return (
    <ScrollView flex={1} p={RFValue(5)}>
      <Image source={Logo} alt="Logo Voll" alignSelf="center"></Image>
      <Titulo fontSize={RFValue(24)} mt={RFValue(5)}>
        {secoes[numSecao].titulo}
      </Titulo>
      {secoes[numSecao]?.entradaTexto.length > 0 ? (
        <Box>
          {secoes[numSecao]?.entradaTexto?.map((entrada) => (
            <EntradaTexto
              key={entrada.id}
              label={entrada.label}
              placeholder={entrada.placeholder}
              type={entrada.type}
              mt={RFValue(5)}
              //Atrelando valor do input ao valor que está sendo armazenado no estado "dadosCadastrais"
              value={dadosCadastrais[entrada.name]}
              //Executando função de atualizar dados (que atualiza o estados "dadosCadastrais") toda vez que algo é digitado no input:
              onChangeText={(text) => atualizarDados(entrada.name, text)}
            />
          ))}
        </Box>
      ) : (
        <Box>
          <VStack alignItems="center">
            <Text
              color="blue.800"
              fontWeight="bold"
              fontSize={RFValue(16)}
              mt={RFValue(4)}
              mb={RFValue(1)}
            >
              Você possui plano de saúde?
            </Text>
            <Switch
              size="sm"
              isChecked={possuiPlano}
              onChange={() => setPossuiPlano(!possuiPlano)}
            />
          </VStack>
          {possuiPlano ? (
            <VStack>
              <Text
                color="blue.800"
                fontWeight="bold"
                fontSize={RFValue(16)}
                mt={RFValue(4)}
                mb={RFValue(1)}
              >
                Selecione os planos:
              </Text>
              {secoes[numSecao]?.checkboxes?.map((checkbox) => (
                <Checkbox
                  key={checkbox.id}
                  value={checkbox.value}
                  mt={RFValue(3)}
                  onChange={() => {
                    setPlanos((idsPlanos) => {
                      //O array de planos começa vazio e os checkboxes desmarcados
                      //Se no array de planos já estava incluido o ID do plano que foi clicado, significa que o checkbox já havia sido marcado
                      //e agora está sendo desmarcado, então vamos retirar o plano do array de planos:
                      if (idsPlanos.includes(checkbox.id)) {
                        return idsPlanos.filter((id) => id !== checkbox.id);
                      }
                      //Se no array de planos ainda não estava incluido o ID do plano que foi clicado, significa que o checkbox ainda não havia sido marcado
                      //e agora está sendo marcado, então vamos adicionar o plano do array de planos:
                      else {
                        return [...idsPlanos, checkbox.id];
                      }
                    });
                  }}
                  //Aqui estamos setando o valor padrão de "isChecked". Ele está sendo condicionado ao "id" do campo estar presente no nosso array de planos ou não.
                  //Se ele estiver no array de planos, o resultado desse "includes()" será true, então significa que o checkbox deve começar marcado. Se o id não estiver
                  //no array de planos, o resultado vai ser "false", então o checkbox deve começar desmarcado:
                  isChecked={planos.includes(checkbox.id)}
                >
                  {checkbox.value}
                </Checkbox>
              ))}
            </VStack>
          ) : (
            <></>
          )}
        </Box>
      )}
      {numSecao > 0 && (
        <Botao bg="gray.400" onPress={handleVoltar} mt={RFValue(6)}>
          Voltar
        </Botao>
      )}
      {numSecao < secoes.length - 1 ? (
        <Botao
          bg="blue.800"
          mt={RFValue(6)}
          mb={RFValue(20)}
          onPress={handleAvancar}
        >
          Avançar
        </Botao>
      ) : (
        <Botao
          bg="blue.800"
          mt={RFValue(6)}
          mb={RFValue(20)}
          onPress={() => handleCadastro()}
        >
          Finalizar Cadastro
        </Botao>
      )}
    </ScrollView>
  );
};

export default Cadastro;
