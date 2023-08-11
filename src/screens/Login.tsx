import { VStack, Image, Text, Box, Button, Link } from "native-base";
import { TouchableOpacity } from "react-native";

import Logo from '../assets/Logo.png';
import { Titulo } from "../components/Titulo";
import { EntradaTexto } from "../components/EntradaTexto";
import { Botao } from "../components/Botao";

import { RFValue } from "../utils/RFValue";

type Props = {
    navigation: any
}

const Login = ({navigation}: Props) => {

    return (
        <VStack flex={1} alignItems="center" justifyContent="center" p={RFValue(5)}>
            <Image source={Logo} alt="Logo Voll"></Image>
            <Titulo fontSize={RFValue(24)} mt={RFValue(10)} mb={RFValue(10)}>
                Faça login em sua conta
            </Titulo>
            <Box>
                <EntradaTexto label="Email" type="text" placeholder="Insira seu endereço de -email" />
                <EntradaTexto label="Senha" type="password" placeholder="Insira sua senha" mt={RFValue(4)}/>
            </Box>
            <Botao bg="blue.800" onPress={() => navigation.navigate('Tabs')} mt={RFValue(8)}>Entrar</Botao>
            <Link href="https://alura.com.br" mt={RFValue(2)}>
                Esqueceu sua senha?
            </Link>
            <Box w="100%" flexDirection="row" justifyContent="center" mt={RFValue(8)}>
                <Text>Ainda não tem conta? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                    <Text color="blue.500"> Faça seu cadastro!</Text>
                </TouchableOpacity>
            </Box>
        </VStack>
    )
}

export default Login;