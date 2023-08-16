//Nesse arquivo teremos todas as rotas da nossa aplicação para quando o usuário estiver deslogado

import React from "react";

//Componentes que iremos utilizar para navegação:
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Chamando método que vai ser responsável por criar nossas telas:
const Tab = createNativeStackNavigator();

//Importando telas que iremos utilizar para navegação:
import Login from "../screens/Login";
import Cadastro from "../screens/Cadastro";
import Tabs from './tabs'

//Criando componente de rotas:
export const Rotas = () => {
  return (
    //Container que vai estar por fora de todas as nossas telas:
    <NavigationContainer>
      <Tab.Navigator>
        {/* Criando telas de fato: */}
        {/* Tela de Login: */}
        <Tab.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        {/* Tela de Cadastro: */}
        <Tab.Screen
          name="Cadastro"
          component={Cadastro}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Tabs"
          component={Tabs}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

//Exportando componente de rotas:
export default Rotas;
