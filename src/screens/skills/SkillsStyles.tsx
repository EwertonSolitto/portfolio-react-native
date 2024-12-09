import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingBlock: 32,
  },
  title: {
    marginBlock: 32,
    marginInline: "auto"
  },
  skillsContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    paddingBottom: 64,
    flexWrap: "wrap",
    flexDirection: "row"
  },
  skill: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: colors.secondary,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    paddingInline: 16,
    paddingBlock: 8,
    gap: 4
  },
  skillText: {
    fontSize: 28,
    color: colors.secondary,
  },
  image: {
    width: 32,
    height: 32,
    backgroundColor: colors.secondary,
    borderRadius: 16
  }
});