import React from 'react';

import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { styles } from './CIconsStyles';
import colors from '../../styles/colors';
import { Image } from 'react-native';

export function CIcons({icon, size}: {icon: string, size: number}) {
  switch(icon) {
    case "html":
      return <Ionicons name="logo-html5" size={size} color="#e34c26" />
    case "css":
      return <Ionicons name="logo-css3" size={size} color="#264de4" />
    case "javascript":
      return <Ionicons name="logo-javascript" size={size} color="#f7df1e" />
    case "typescript":
      return <MaterialCommunityIcons name="language-typescript" size={37} color="#007acc" />
    case "sass":
      return <Ionicons name="logo-sass" size={size} color="#cc6699" />
    case "git":
      return <Ionicons name="git-branch-outline" size={size} color="#f1502f" />
    case "github":
      return <Ionicons name="logo-github" size={size} color={colors.secondary} />
    case "bootstrap":
      return <FontAwesome5 name="bootstrap" size={size} color="#563d7c" />
    case "react":
      return <Ionicons name="logo-react" size={size} color="#61dbfb" />
    case "nextjs":
      return <Image source={require("../../../assets/nextjs.png")} style={styles.image} />
    case "nodejs":
      return <FontAwesome5 name="node-js" size={size} color="#68a063" />
    case "figma":
      return <FontAwesome6 name="figma" size={size} color={colors.secondary} />
    case "docker":
      return <FontAwesome5 name="docker" size={size} color="#0db7ed" />
    case "angular":
      return <FontAwesome5 name="angular" size={size} color="#dd1b16" />
    default: 
      throw new Error("Icon not found.")
  }
}