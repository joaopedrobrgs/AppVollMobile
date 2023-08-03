//Nesse arquivo teremos todas as rotas da nossa aplicação

import React from "react";

//Componentes que iremos utilizar para navegação:
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Chamando método que vai ser responsável por criar nossas telas:
const Tab = createNativeStackNavigator();

//Importando telas que iremos utilizar para navegação:
import Login from "../screens/Login";
import Cadastro from "../screens/Cadastro";

//Criando componente de rotas:
export const Rotas = () => {
  return (
    //Container que vai estar por fora de todas as nossas telas:
    <NavigationContainer>
        {/* Criando telas de fato: */}
        <Tab.Navigator>
            {/* Tela de Login: */}
            <Tab.Screen 
                name="Login"
                component={Login}
                options={{
                    headerShown: false
                }}
            />
            {/* Tela de Cadastro: */}
            <Tab.Screen
                name="Cadastro"
                component={Cadastro}
                options={{
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    </NavigationContainer>
  )
}

//Exportando componente de rotas:
export default Rotas;