import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './HomeStyles';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
    </View>
  );
}