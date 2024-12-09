import React from 'react';
import { Image, ScrollView, StatusBar, Text, View } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { CTitle } from '../../components/title/CTitle';

import { styles } from './SkillsStyles';
import colors from '../../styles/colors';


export default function SkillsScreen() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={colors.primary} />

      <View style={styles.title}>
        <CTitle text="My Skills" />
      </View>
      <View style={styles.skillsContainer}>
        
        <View style={styles.skill}>
          <Ionicons name="logo-html5" size={32} color="#e34c26" />
          <Text style={styles.skillText}>HTML</Text>
        </View>

        <View style={styles.skill}>
          <Ionicons name="logo-css3" size={32} color="#264de4" />
          <Text style={styles.skillText}>CSS</Text>
        </View>

        <View style={styles.skill}>
          <Ionicons name="logo-javascript" size={32} color="#f7df1e" />
          <Text style={styles.skillText}>Javascript</Text>
        </View>

        <View style={styles.skill}>
          <Ionicons name="logo-sass" size={32} color="#cc6699" />
          <Text style={styles.skillText}>Sass</Text>
        </View>

        <View style={styles.skill}>
          <MaterialCommunityIcons name="language-typescript" size={37} color="#007acc" />
          <Text style={styles.skillText}>Typescript</Text>
        </View>

        <View style={styles.skill}>
          <Ionicons name="git-branch-outline" size={32} color="#f1502f" />
          <Text style={styles.skillText}>Git</Text>
        </View>

        <View style={styles.skill}>
          <Ionicons name="logo-github" size={32} color={colors.secondary} />
          <Text style={styles.skillText}>GitHub</Text>
        </View>

        <View style={styles.skill}>
          <FontAwesome5 name="bootstrap" size={32} color="#563d7c" />
          <Text style={styles.skillText}>Bootstrap</Text>
        </View>

        <View style={styles.skill}>
          <Ionicons name="logo-react" size={32} color="#61dbfb" />
          <Text style={styles.skillText}>React JS</Text>
        </View>

        <View style={styles.skill}>
          <Image source={require("../../../assets/nextjs.png")} style={styles.image} />
          <Text style={styles.skillText}>Next.js</Text>
        </View>

        <View style={styles.skill}>
          <Ionicons name="logo-react" size={32} color="#61dbfb" />
          <Text style={styles.skillText}>React Native</Text>
        </View>

        <View style={styles.skill}>
          <FontAwesome5 name="node-js" size={32} color="#68a063" />
          <Text style={styles.skillText}>NodeJS</Text>
        </View>

        <View style={styles.skill}>
          <FontAwesome6 name="figma" size={32} color={colors.secondary} />
          <Text style={styles.skillText}>Figma</Text>
        </View>

        <View style={styles.skill}>
          <FontAwesome5 name="docker" size={32} color="#0db7ed" />
          <Text style={styles.skillText}>Docker</Text>
        </View>

        <View style={styles.skill}>
          <FontAwesome5 name="angular" size={32} color="#dd1b16" />
          <Text style={styles.skillText}>Angular</Text>
        </View>

      </View>
    </ScrollView>
  );
}