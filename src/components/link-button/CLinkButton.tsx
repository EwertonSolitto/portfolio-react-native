import React from 'react';
import { Linking, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { styles } from './CLinkButtonStyles';
import colors from '../../styles/colors';

export default function CLinkButton({text, iconName}: {text: string, iconName: "github" | "whatsapp" | "linkedin"}) {
  function handleButton(link: string) {
    switch(link) {
      case "github": 
        Linking.openURL('https://github.com/EwertonSolitto')
        break
      case "linkedin":
        Linking.openURL('https://www.linkedin.com/in/ewerton-solitto/')
        break
      case "whatsapp":
        Linking.openURL('https://api.whatsapp.com/send/?phone=5511990250440&text&type=phone_number&app_absent=0')
        break
      default:
        throw new Error("Link undefined.");
    }
  }
  
  return (
    <Pressable style={({pressed}) => [
        styles.container,
        {backgroundColor: pressed ? colors.white : colors.secondary}
      ]} 
      onPress={() => handleButton(iconName)}
    >
      <FontAwesome name={iconName} size={30} color={colors.primary} />
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}