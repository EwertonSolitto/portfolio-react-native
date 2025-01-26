type TLinkButton = {
  text: string, 
  iconName: "github" | "whatsapp" | "linkedin" | "arrow-right" | "arrow-down", 
  style?: {
    container: Object | Object[],
    text: Object
  },
  pressTransition?: boolean,
  buttonColor: string,
  link: string
}

export default TLinkButton