import React from 'react';
import { Image, ScrollView, StatusBar, Text, View } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import CTitle from '../../components/title/CTitle';

import { styles } from './SkillsStyles';
import colors from '../../styles/colors';
import { CIcons } from '../../components/icons/CIcons';


export default function SkillsScreen() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={colors.primary} />

      <View style={styles.title}>
        <CTitle text="My Skills" />
      </View>
      <View style={styles.skillsContainer}>
        
        <View style={styles.skill}>
          <CIcons icon='html' size={32} />
          <Text style={styles.skillText}>HTML</Text>
        </View>

        <View style={styles.skill}>
          <CIcons icon='html' size={32} />
          <Text style={styles.skillText}>CSS</Text>
        </View>

        <View style={styles.skill}>
          <CIcons icon='css' size={32} />
          <Text style={styles.skillText}>Javascript</Text>
        </View>

        <View style={styles.skill}>
          <CIcons icon='javascript' size={32} />
          <Text style={styles.skillText}>Sass</Text>
        </View>

        <View style={styles.skill}>
          <CIcons icon='typescript' size={32} />
          <Text style={styles.skillText}>Typescript</Text>
        </View>

        <View style={styles.skill}>
          <CIcons icon='git' size={32} />
          <Text style={styles.skillText}>Git</Text>
        </View>

        <View style={styles.skill}>
          <CIcons icon='github' size={32} />
          <Text style={styles.skillText}>GitHub</Text>
        </View>

        <View style={styles.skill}>
          <CIcons icon='bootstrap' size={32} />
          <Text style={styles.skillText}>Bootstrap</Text>
        </View>

        <View style={styles.skill}>
          <CIcons icon='react' size={32} />
          <Text style={styles.skillText}>React JS</Text>
        </View>

        <View style={styles.skill}>
          <CIcons icon='nextjs' size={32} />
          <Text style={styles.skillText}>Next.js</Text>
        </View>

        <View style={styles.skill}>
          <CIcons icon='react' size={32} />
          <Text style={styles.skillText}>React Native</Text>
        </View>

        <View style={styles.skill}>
          <CIcons icon='nodejs' size={32} />
          <Text style={styles.skillText}>NodeJS</Text>
        </View>

        <View style={styles.skill}>
          <CIcons icon='figma' size={32} />
          <Text style={styles.skillText}>Figma</Text>
        </View>

        <View style={styles.skill}>
          <CIcons icon='docker' size={32} />
          <Text style={styles.skillText}>Docker</Text>
        </View>

        <View style={styles.skill}>
          <CIcons icon='angular' size={32} />
          <Text style={styles.skillText}>Angular</Text>
        </View>

        <View style={styles.skill}>
          <CIcons icon='tailwind' size={32} />
          <Text style={styles.skillText}>TailwindCSS</Text>
        </View>

      </View>
    </ScrollView>
  );
}