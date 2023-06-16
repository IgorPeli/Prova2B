import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/Pages/Login';
import Registrar from './src/Pages/Registrar';
import EsqueciSenha from './src/Pages/EsqueciSenha';
import Filme from './src/Pages/ListPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name= "Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name= "Register" component={Registrar} options={{headerShown: false}}/>
        <Stack.Screen name= "ForgotPassword" component={EsqueciSenha} options={{headerShown: false}}/>
        <Stack.Screen name= "RGPlist" component={Filme}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}