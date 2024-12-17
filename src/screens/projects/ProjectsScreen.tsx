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

      <View style={styles.projectsContainer}>
        <CProjectContainer
          projectName='Portfolio (web)'
          tecnologyList={[{icon: "nextjs", name: "Next.js"}, {icon: "sass", name: "Sass"}, {icon: "typescript", name: "Typescript"}]}
          description="Portfolio is one of my most dedicated projects, in general, there is everything you need to know about me."
          githubLink='https://github.com/EwertonSolitto/Portfolio'
          websiteLink='https://portfolio-ewertonsolitto.vercel.app/'
        />

        <CProjectContainer
          projectName='The Blog'
          tecnologyList={[{icon: "html", name: "HTML"}, {icon: "css", name: "CSS"}, {icon: "javascript", name: "Javascript"}]}
          description="The Blog is a Front End application built on a challenge made by Rocketseat. It's a blog for developers, with publications to the most advanced."
          githubLink='https://github.com/EwertonSolitto/The-Blog'
          websiteLink='https://ewertonsolitto.github.io/The-Blog/'
        />

        <CProjectContainer
          projectName='Rocket NFTs'
          tecnologyList={[{icon: "react", name: "ReactJS"}, {icon: "typescript", name: "Typescript",}, {icon: "tailwind", name: "TailwindCSS"}]}
          description="Rocket-NFTs is a website where you buy, sell and collect cryptos and non-fungible tokens (NFT), and made to discover unique digital assets."
          githubLink='https://github.com/EwertonSolitto/Rocket-NFTs'
          websiteLink='https://rocket-nfts-ewertonsolitto.vercel.app/'
        />

        <CProjectContainer
          projectName='GiordanoFettuccine'
          tecnologyList={[{icon: "html", name: "HTML"}, {icon: "css", name: "CSS"}, {icon: "javascript", name: "Javascript"}]}
          description="GiordanoFettuccine is a landing page of a fictional restaurant."
          githubLink='https://github.com/EwertonSolitto/GiordanoFettuccine'
          websiteLink='https://ewertonsolitto.github.io/GiordanoFettuccine/'
        />

        <CProjectContainer
          projectName='OneBitX'
          tecnologyList={[{icon: "html", name: "HTML"}, {icon: "sass", name: "Sass"}, {icon: "bootstrap", name: "Bootstrap"}]}
          description="Exercise of OneBitCode course to train Bootstrap and Sass, remaking a website with 3 pages, also using the Animate on Scroll Library."
          githubLink='https://github.com/EwertonSolitto/OneBitX'
          websiteLink='https://ewertonsolitto.github.io/OneBitX/pages/index.html'
        />

        <CProjectContainer
          projectName='Pokedex'
          tecnologyList={[{icon: "nextjs", name: "Next.js"}, {icon: "tailwind", name: "TailwindCSS"}, {icon: "typescript", name: "Typescript"}]}
          description="Pokedex is a single application that simulates a pokedex getting pokemon from pokeapi."
          githubLink='https://github.com/EwertonSolitto/Pokedex'
          websiteLink='https://pokedex-eight-lyart.vercel.app/'
        />

        <CProjectContainer
          projectName='Login App 💻'
          tecnologyList={[{icon: "react", name: "React Native"}, {icon: "typescript", name: "Typescript"}]}
          description="Login App is a React Native app to create account and log into the app."
          githubLink='https://github.com/EwertonSolitto/login-app'
        />

        <CProjectContainer
          projectName='Spaceship Security 🛡️'
          tecnologyList={[{icon: "react", name: "React Native"}, {icon: "typescript", name: "Typescript"}]}
          description="Spaceship Security is a React Native app that creates strong password."
          githubLink='https://github.com/EwertonSolitto/spaceship-security'
        />
      </View>

    </ScrollView>
  );
}