import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './CProjectContainerStyles';

import CLinkButton from '../link-button/CLinkButton';
import colors from '../../styles/colors';
import { CIcons } from '../icons/CIcons';

type TProjectContainer = {
  projectName: string,
  tecnologyList: {name: string, icon: string}[],
  description: string,
  githubLink: string,
  websiteLink?: string
}

export default function CProjectContainer({projectName, tecnologyList, description, githubLink, websiteLink}: TProjectContainer) {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{projectName}</Text>

        <View style={styles.tecnologiesContainer}>
          {
            tecnologyList.map(({name, icon}, i) => {
              return (
                <View key={i} style={styles.tecnologyContainer}>
                  <CIcons icon={icon} size={24} />
                  <Text style={styles.tecnologyText}>{name}</Text>
                </View>
              )
            })
          }
        </View>

        <Text style={styles.description}>{description}</Text>

        <View style={styles.buttonsList}>
          <CLinkButton 
            text='GitHub' 
            iconName='github'
            link={githubLink}
            style={{
              container: styles.buttonContainer, 
              text: styles.buttonText
            }} 
            pressTransition={false} 
            buttonColor={colors.secondary}
          />

          {websiteLink ?
            <CLinkButton
              text='Website' 
              iconName='arrow-right'
              link={websiteLink} 
              style={{
                container: [styles.buttonContainer, styles.websiteButton], 
                text: styles.buttonText
              }} 
              pressTransition={false} 
              buttonColor={colors.secondary}
            /> : undefined
          }
        </View>
      </View>
  );
}