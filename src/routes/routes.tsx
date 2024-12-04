import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Navigator, Screen } = createBottomTabNavigator();

import HomeScreen from '../screens/home/HomeScreen';

export default function Routes() {
  return (
    <Navigator>
      <Screen 
        name="Home" component={HomeScreen} 
        options={{
        headerShown: false
        }}
      />
    </Navigator>
  );
}