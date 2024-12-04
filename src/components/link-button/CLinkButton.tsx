import React from 'react';
import { Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { styles } from './CLinkButtonStyles';
import colors from '../../styles/colors';

export default function CLinkButton({text, iconName}: {text: string, iconName: "github" | "whatsapp" | "linkedin"}) {
  function handleButton(link: string) {

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