//Nesse arquivo teremos todas as rotas da nossa aplicação para quando o usuário estiver deslogado

import React from "react";

//Componentes que iremos utilizar para navegação:
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Biblioteca de icones:
import Ionicons from 'react-native-vector-icons/Ionicons'

//Chamando método que vai ser responsável por criar nossas telas:
const Tab = createBottomTabNavigator();

//Importando telas que iremos utilizar para navegação:
import Principal from "../screens/Principal";
import Consultas from "../screens/Consultas";
import Pesquisa from "../screens/Pesquisa";
import Perfil from "../screens/Perfil";

//Criando componente de rotas:
export const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#002851"
        },
        tabBarActiveTintColor: "#339cff",
        tabBarInactiveTintColor: "#FFF"
      }}
    >
      {/* Criando telas de fato: */}
      {/* Tela Principal: */}
      <Tab.Screen
        name="Principal"
        component={Principal}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home" color={color} size={size} />
          )
        }}
      />
      {/* Tela de Consultas: */}
      <Tab.Screen
        name="Consultas"
        component={Consultas}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Ionicons name="calendar" color={color} size={size} />
          )
        }}
      />
      {/* Tela de Pesquisa: */}
      <Tab.Screen
        name="Pesquisa"
        component={Pesquisa}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Ionicons name="search" color={color} size={size} />
          )
        }}
      />
      {/* Tela de Pesquisa: */}
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Ionicons name="person-outline" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

//Exportando componente de rotas:
export default Tabs;
