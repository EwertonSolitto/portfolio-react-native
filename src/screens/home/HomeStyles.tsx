import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.primary
  },
  title: {
    color: colors.secondary,
    textAlign: "center",
    fontSize: 40,
  },
  linkList: {
    marginTop: 64,
    gap: 32
  }
});