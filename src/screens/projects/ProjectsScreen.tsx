import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { styles } from './ProjectsStyles';

import colors from '../../styles/colors';
import CTitle from '../../components/title/CTitle';
import CProjectContainer from '../../components/project-container/CProjectContainer';

export default function ProjectsScreen() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={colors.primary} />
      
      <View style={styles.title}>
        <CTitle text="Projects" />
      </View>

      <CProjectContainer
        tecnologyList={[{icon: "html", name: "HTML"}, {icon: "css", name: "CSS"}, {icon: "javascript", name: "Javascript"}]}
        description="The Blog is a Front End application built on a challenge made by Rocketseat. It's a blog for developers, with publications to the most advanced."
        githubLink='https://github.com/EwertonSolitto/The-Blog'
        websiteLink='https://ewertonsolitto.github.io/The-Blog/'
      />
    </ScrollView>
  );
}