import React from 'react';
import { Linking, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { styles } from './CLinkButtonStyles';
import colors from '../../styles/colors';

export default function CLinkButton({
  text, 
  iconName, 
  style, 
  pressTransition = true, 
  buttonColor, 
  link
}: TLinkButton) {
  function handleButton(link: string) {
    Linking.openURL(link)
  }
  
  return (
    <Pressable style={({pressed}) => [
      style ? style.container : styles.container,
      pressTransition ? {backgroundColor: pressed ? colors.white : colors.secondary} : undefined
    ]} 
      onPress={() => handleButton(link)}
    >
      <FontAwesome name={iconName} size={30} color={buttonColor} />
      <Text style={style ? style.text : styles.text}>{text}</Text>
    </Pressable>
  );
}