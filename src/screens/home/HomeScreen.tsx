import React from 'react';
import { Text, View } from 'react-native';
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
        <CLinkButton text="GitHub" iconName='github'/>
        <CLinkButton text="LinkedIn" iconName='linkedin'/>
        <CLinkButton text="WhatsApp" iconName='whatsapp'/>
      </View>
    </View>
  );
}