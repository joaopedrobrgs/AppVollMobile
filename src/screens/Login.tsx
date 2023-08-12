import { VStack, Image, Text, Box, Button, Link } from "native-base";
import { TouchableOpacity } from "react-native";

import Logo from "../assets/Logo.png";
import { Titulo } from "../components/Titulo";
import { EntradaTexto } from "../components/EntradaTexto";
import { Botao } from "../components/Botao";

import { RFValue } from "../utils/RFValue";
import { useState } from "react";

//Importando hook de fazer login
import { fazerLogin } from "../hooks/useAutenticacao";

type Props = {
  navigation: any;
};

const Login = ({ navigation }: Props) => {

  //Criando estados que vão receber os valores dos nossos inputs (email e senha):
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  //Função que é disparada quando pressionamos o botão "Entrar":
  async function handleLogin() {
    //Pegando resultado da requisição:
    const resultado = await fazerLogin({email, senha})
    //Verificando se resultado foi válido e fazendo algo a partir disso:
    if(!!resultado){
        navigation.replace("Tabs")
    }else{
        console.log("Erro")
    }
  }

  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={RFValue(5)}>
      <Image source={Logo} alt="Logo Voll"></Image>
      <Titulo fontSize={RFValue(24)} mt={RFValue(10)} mb={RFValue(10)}>
        Faça login em sua conta
      </Titulo>
      <Box>
        <EntradaTexto
          label="Email"
          type="text"
          placeholder="Insira seu endereço de -email"
          value={email ?? ""}
          onChangeText={setEmail}
        />
        <EntradaTexto
          label="Senha"
          secureTextEntry
          placeholder="Insira sua senha"
          value={senha ?? ""}
          onChangeText={setSenha}
          mt={RFValue(4)}
        />
      </Box>
      <Botao
        bg="blue.800"
        onPress={handleLogin}
        mt={RFValue(8)}
      >
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
