type TLinkButton = {
  text: string, 
  iconName: "github" | "whatsapp" | "linkedin" | "arrow-right", 
  style?: {
    container: Object | Object[],
    text: Object
  },
  pressTransition?: boolean,
  buttonColor: string,
  link: string
}