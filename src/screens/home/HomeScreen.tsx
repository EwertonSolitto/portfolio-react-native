import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { styles } from './HomeStyles';

import CLinkButton from '../../components/link-button/CLinkButton';
import CTitle from '../../components/title/CTitle';

import colors from '../../styles/colors';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.primary} />
      <CTitle text="Ewerton Silva Solitto" />

      <View style={styles.linkList}>
        <CLinkButton 
          text="GitHub" 
          iconName='github' 
          buttonColor={colors.primary} 
          link='https://github.com/EwertonSolitto'
        />
        <CLinkButton 
          text="LinkedIn" 
          iconName='linkedin' 
          buttonColor={colors.primary}
          link='https://www.linkedin.com/in/ewerton-solitto/'
        />
        <CLinkButton 
          text="WhatsApp" 
          iconName='whatsapp' 
          buttonColor={colors.primary}
          link='https://api.whatsapp.com/send/?phone=5511990250440&text&type=phone_number&app_absent=0'  
        />
      </View>
    </View>
  );
}