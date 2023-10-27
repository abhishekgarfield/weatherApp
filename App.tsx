import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./Src/Home";


const Stack = createNativeStackNavigator()
export default  function App(){
return(
  <NavigationContainer >
    <Stack.Navigator>
      <Stack.Screen component={Home} name="Home"/>
    </Stack.Navigator>
  </NavigationContainer>
)
}
