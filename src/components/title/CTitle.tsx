import React from 'react';
import { Text } from 'react-native';

import { styles } from './CTitleStyles';

export function CTitle({text}: {text: string}) {
  return (
    <Text style={styles.container}>{text}</Text>
  );
}