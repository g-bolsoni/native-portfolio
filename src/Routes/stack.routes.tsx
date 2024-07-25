import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../Screens/Home';
import { Skils } from '../Screens/Skils';
import { StatusBar } from 'react-native';


const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {

  return (
    <Navigator>
      <Screen name="Home" component={Home} options={{ headerShown: false, }} />
      <Screen name="Skils" component={Skils} options={{ headerShown: false, }} />
    </Navigator>
  );
}