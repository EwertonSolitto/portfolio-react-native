import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    width: 256,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    marginInline: "auto",
    borderRadius: 24,
    
  },
  text: {
    color: colors.primary,
    fontSize: 28,
    fontWeight: 700
  }
});