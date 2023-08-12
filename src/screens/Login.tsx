import { VStack, Image, Text, Box, Button, Link, View } from "native-base";
import { TouchableOpacity } from "react-native";

import Logo from "../assets/Logo.png";
import { Titulo } from "../components/Titulo";
import { EntradaTexto } from "../components/EntradaTexto";
import { Botao } from "../components/Botao";

import { RFValue } from "../utils/RFValue";
import { useState } from "react";

import { Controller, useForm } from "react-hook-form";

//Importando hook de fazer login
import { fazerLogin } from "../hooks/useAutenticacao";
import { FormDataLogin } from "../@types/Authentication";

type Props = {
  navigation: any;
};

const Login = ({ navigation }: Props) => {
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  //Função que é disparada quando pressionamos o botão "Entrar":
  async function handleLogin(data: FormDataLogin) {

    //Pegando dados digitados no formulário da página:
    const { email, senha } = data;

    //Checando se e-mail digitado é válido:
    if (!email || email === "") {
      setErrorMessage('Informe um e-mail')
      return;
    }

    //Checando se senha digitada é válida:
    if (!senha || senha === "") {
      setErrorMessage('Informe uma senha')
      return;
    }

    //Enviando requisição e pegando resultado da requisição:
    const resultado = await fazerLogin({ email, senha });
    //Verificando se resultado foi válido e fazendo algo a partir disso:
    if (!!resultado) {
      navigation.replace("Tabs");
      console.log(resultado)
    } else {
      console.log("Erro");
    }

  }

  const {
    control,
    getValues,
    setValue,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormDataLogin>();

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
      {!!errorMessage && (
        <View>
          <Text style={{color: 'red'}}>{errorMessage}</Text>
        </View>
      )}
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
