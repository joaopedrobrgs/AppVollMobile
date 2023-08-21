import {
  VStack,
  Image,
  Text,
  Box,
  Button,
  Link,
  View,
  useToast,
} from "native-base";
import { TouchableOpacity } from "react-native";

import Logo from "../assets/Logo.png";

import { useEffect, useLayoutEffect, useState } from "react";

//Importando componentes personalizados que nós criamos:
import { Titulo } from "../components/Titulo";
import { EntradaTexto } from "../components/EntradaTexto";
import { Botao } from "../components/Botao";

//Importando componentes do react-hook-form (utilizado para manipularmos um formulário sem precisar de criar estados):
import { Controller, useForm } from "react-hook-form";

//Importando hook de fazer login
import { fazerLogin } from "../servicos/AutenticacaoServico";

//Importando AsyncStorage (utilizado para salvar dados no celular do usuário):
import AsyncStorage from "@react-native-async-storage/async-storage";

//Importando jwtDecode (utilizado para pegar dados através do token retornado pelo Back-end):
import jwtDecode from "jwt-decode";

//Importando utilitários:
//Função que nós criamos para validar se e-mail é válido:
import ValidateEmail from "../utils/ValidateEmail";
//Função que criamos para dar responsividade à tela:
import { RFValue } from "../utils/RFValue";

//Importando tipos que utilizares aqui na tela de Login:
import { FormLoginUsuarioType } from "../@types/Login";
import {
  LoginResponseType,
  LoginResponseDataType,
  TokenResponseDataType,
} from "../@types/RespostasApi";
import { AxiosResponse } from "axios";

type Props = {
  navigation: any;
};

const Login = ({ navigation }: Props) => {

  // Apagando token para testes:
  // useLayoutEffect(() => {
  //   async function removeToken() {
  //     await AsyncStorage.removeItem("@token");
  //   }
  //   removeToken();
  // }, []);

  const toast = useToast();
  const [carregando, setCarregando] = useState<boolean>(true);

  useEffect(() => {
    async function verificarLogin() {
      const token = await AsyncStorage.getItem("@token");
      if (!!token) {
        navigation.replace("Tabs");
      }
      setCarregando(false);
    }
    verificarLogin();
  }, []);

  const { response, error, isLoading, sendFetch } = fazerLogin();

  useEffect(() => {
    if (!!isLoading) {
      console.log("Enviando requisição...");
    }
  }, [isLoading]);

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

  useEffect(() => {
    if (!!response) {
      console.log("Status: ", response.status);
      console.log("Data: ", response.data);
      console.log("Error: ", error);
      if (response.status !== 200) {
        toast.show({
          title: "Algo deu errado!",
          description: "Tente novamente mais tarde...",
          backgroundColor: "red.500",
          textAlign: "center",
        });
        return;
      }
      toast.show({
        title: "Login realizado com sucesso",
        description: "",
        backgroundColor: "green.500",
        textAlign: "center",
      });
      async function loginSuccess() {
        //Pegando token no resultado da requisição:
        const { token } = response.data;
        //Salvando esse token no armazenamento local com AsyncStorage:
        await AsyncStorage.setItem("@token", token);
        //Pegando esse token decodificado:
        const tokenDecodificado: TokenResponseDataType = jwtDecode(token);
        //Token decodificado retorna: id, role e outros dois dados. Vamos pegar apenas "id":
        const { id } = tokenDecodificado;
        //Salvando "id" do usuário no armazenamento local:
        await AsyncStorage.setItem("@idUsuario", id);
        //Navegando para tela pós login:
        navigation.replace("Tabs");
      }
      loginSuccess();
    }
  }, [response]);

  //Função que é disparada quando pressionamos o botão "Entrar":
  async function handleLogin(data: FormLoginUsuarioType) {
    //Pegando dados digitados no formulário da página:
    const { email, senha } = data;

    //Checando se usuário digitou um e-mail:
    if (!email || email === "") {
      toast.show({
        title: "Campo e-mail vazio!",
        description: "Informe seu e-mail...",
        backgroundColor: "red.500",
        textAlign: "center",
      });
      return;
    }

    //Checando se e-mail digitado é válido:
    if (!ValidateEmail(email)) {
      toast.show({
        title: "E-mail inválido!",
        description: "Digite um e-mail válido...",
        backgroundColor: "red.500",
        textAlign: "center",
      });
      return;
    }

    //Checando se usuário digitou uma senha:
    if (!senha || senha === "") {
      toast.show({
        title: "Campo senha vazio!",
        description: "Informe sua senha...",
        backgroundColor: "red.500",
        textAlign: "center",
      });
      return;
    }

    await sendFetch({ email, senha });
  }

  const {
    control,
    getValues,
    setValue,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormLoginUsuarioType>();

  if (!!carregando) {
    return <></>;
  }

  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={RFValue(5)}>
      <Image source={Logo} alt="Logo Voll"></Image>
      <Titulo fontSize={RFValue(24)} mt={RFValue(10)} mb={RFValue(10)}>
        Faça login em sua conta
      </Titulo>
      <Box>
        <Controller
          name="email"
          control={control}
          defaultValue={""}
          render={({ field }) => {
            return (
              <EntradaTexto
                label="Email"
                type="text"
                placeholder="Insira seu endereço de -email"
                value={field.value}
                onChangeText={(value) => {
                  field.onChange(value);
                }}
              />
            );
          }}
        />
        <Controller
          name="senha"
          control={control}
          defaultValue={""}
          render={({ field }) => {
            return (
              <EntradaTexto
                label="Senha"
                secureTextEntry
                placeholder="Insira sua senha"
                value={field.value}
                onChangeText={(value) => {
                  field.onChange(value);
                }}
                mt={RFValue(4)}
              />
            );
          }}
        />
      </Box>
      <Botao bg="blue.800" onPress={handleSubmit(handleLogin)} mt={RFValue(8)}>
        Entrar
      </Botao>
      <Link href="https://alura.com.br" mt={RFValue(2)}>
        Esqueceu sua senha?
      </Link>
      <Box w="100%" flexDirection="row" justifyContent="center" mt={RFValue(8)}>
        <Text>Ainda não tem conta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
          <Text color="blue.500"> Faça seu cadastro!</Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
};

export default Login;
