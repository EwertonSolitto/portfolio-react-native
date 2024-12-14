import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    marginInline: 16,
    backgroundColor: colors.secondary,
    borderWidth: 4,
    borderColor: colors.terciary,
    borderRadius: 16,
    padding: 8
  },
  title: {
    color: colors.primary,
    fontSize: 24,
    fontWeight: 900,
    marginBottom: 2
  },
  tecnologiesContainer: {
    flexDirection: "row",
    gap: 6
  },
  tecnologyContainer: {
    backgroundColor: colors.primary,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.primary,
    alignItems: "center",
    paddingBlock: 1,
    paddingInline: 3,
    gap: 2
  },
  tecnologyText: {
    color: colors.secondary,
    fontSize: 16,
    fontWeight: 700
  },
  description: {
    fontSize: 16,
    marginBlock: 8
  },
  buttonsList: {
    flexDirection: "row",
    gap: 32
  },
  buttonContainer: {
    backgroundColor: colors.primary,
    flexDirection: "row",
    width: 144,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderRadius: 40,
  },
  websiteButton: {
    flexDirection: "row-reverse"
  },
  buttonText: {
    color: colors.secondary,
    fontSize: 18
  },
});