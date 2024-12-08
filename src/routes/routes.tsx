import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Navigator, Screen } = createBottomTabNavigator();

import HomeScreen from '../screens/home/HomeScreen';
import SkillsScreen from '../screens/skills/SkillsScreen';

export default function Routes() {
  return (
    <Navigator>
      <Screen 
        name="Home" component={HomeScreen} 
        options={{
        headerShown: false
        }}
      />
      <Screen 
        name="Skills" component={SkillsScreen} 
        options={{
        headerShown: false
        }}
      />
    </Navigator>
  );
}