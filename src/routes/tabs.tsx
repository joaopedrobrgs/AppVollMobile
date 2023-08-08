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

  //Options do Tab.Navigator
  const screenOptions = {
    tabBarStyle: {
      backgroundColor: "#002851"
    },
    tabBarActiveTintColor: "#339cff",
    tabBarInactiveTintColor: "#FFF"
  }

  const tabs = [
    //Tela Principal
    {
      name: 'Principal',
      component: Principal,
      icon: 'home'
    },
    //Tela de Consultas
    {
      name: 'Consultas',
      component: Consultas,
      icon: 'calendar'
    },
    //Tela de Pesquisa
    {
      name: 'Pesquisa',
      component: Pesquisa,
      icon: 'search'
    },
    //Tela de Perfil
    {
      name: 'Perfil',
      component: Perfil,
      icon: 'person'
    },
  ]

  return (
    <Tab.Navigator
      screenOptions={screenOptions}
    >
      {/* Criando telas de fato: */}
      {
        tabs.map((tab, index)=>(
          <Tab.Screen
            key={`${tab.name}-${index}`}
            name={tab.name}
            component={tab.component}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name={tab.icon} color={color} size={size} />
              )
            }}
          />
        ))
      }
    </Tab.Navigator>
  );
};

//Exportando componente de rotas:
export default Tabs;
