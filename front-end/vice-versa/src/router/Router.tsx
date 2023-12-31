import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/Login/Login";
import MainPage from "../pages/MainPage";
import Cadastrar from "../telas/Cadastro";

const Stack = createNativeStackNavigator();
//aaaa
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cadastrar"
          component={Cadastrar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainPage"
          component={MainPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
