import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './CProjectContainerStyles';

import CLinkButton from '../link-button/CLinkButton';
import { CIcons } from '../icons/CIcons';

import TProjectContainer from './TProjectContainer';

import colors from '../../styles/colors';



export default function CProjectContainer({projectName, tecnologyList, description, githubLink, websiteLink, downloadLink}: TProjectContainer) {
  function checkButtons() {
    if(websiteLink) {
      return (
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
        />
      )
    } else if(downloadLink) {
      return (
        <CLinkButton
          text='Download' 
          iconName='arrow-down'
          link={downloadLink} 
          style={{
            container: [styles.buttonContainer, styles.websiteButton], 
            text: styles.buttonText
          }} 
          pressTransition={false} 
          buttonColor={colors.secondary}
        />
      )
    } 
    return undefined
  }



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

          {checkButtons()}

        </View>
      </View>
  );
}