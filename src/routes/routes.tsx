import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Navigator, Screen } = createBottomTabNavigator();

import HomeScreen from '../screens/home/HomeScreen';
import SkillsScreen from '../screens/skills/SkillsScreen';

import Ionicons from '@expo/vector-icons/Ionicons';

import colors from '../styles/colors';

export default function Routes() {
  return (
    <Navigator 
    screenOptions={{
      headerShown: false,
      headerBackgroundContainerStyle: {
        backgroundColor: colors.terciary
      },
      tabBarStyle: {
        height: 64,
        borderTopWidth: 0
      },
      tabBarLabelStyle: {
        fontSize: 16,
        fontWeight: 300,
      },
      tabBarInactiveTintColor: "#2D4062",
      tabBarActiveTintColor: colors.terciary,
      tabBarInactiveBackgroundColor: colors.primary,
      tabBarActiveBackgroundColor: "#202E46",
    }}
    >
      <Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home" size={size} color={color}/>
          )
        }}
      />
      <Screen 
        name="Skills" 
        component={SkillsScreen} 
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="build" size={size} color={color}/>
          )
        }}
      />
    </Navigator>
  );
}