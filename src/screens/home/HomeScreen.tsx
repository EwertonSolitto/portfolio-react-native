import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './HomeStyles';
import CLinkButton from '../../components/link-button/CLinkButton';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style= {styles.title}>Ewerton Solitto</Text>

      <View style={styles.linkList}>
        <CLinkButton text="GitHub" iconName='github'/>
        <CLinkButton text="LinkedIn" iconName='linkedin'/>
        <CLinkButton text="WhatsApp" iconName='whatsapp'/>
      </View>
    </View>
  );
}