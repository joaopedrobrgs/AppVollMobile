import { VStack, Image, Text, Box, Button, Link } from "native-base";
import { TouchableOpacity } from "react-native";

import Logo from '../assets/Logo.png';
import { Titulo } from "../components/Titulo";
import { EntradaTexto } from "../components/EntradaTexto";
import { Botao } from "../components/Botao";

type Props = {
    navigation: any
}

const Login = ({navigation}: Props) => {

    return (
        <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
            <Image source={Logo} alt="Logo Voll"></Image>
            <Titulo>
                Faça login em sua conta
            </Titulo>
            <Box>
                <EntradaTexto label="Email" placeholder="Insira seu endereço de -email" />
                <EntradaTexto label="Senha" placeholder="Insira sua senha" />
            </Box>
            <Botao bg="blue.800" onPress={() => navigation.navigate('Tabs')}>Entrar</Botao>
            <Link href="https://alura.com.br" mt={2}>
                Esqueceu sua senha?
            </Link>
            <Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
                <Text>Ainda não tem cadastro? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                    <Text color="blue.500"> Faça seu cadastro!</Text>
                </TouchableOpacity>
            </Box>
        </VStack>
    )
}

export default Login;