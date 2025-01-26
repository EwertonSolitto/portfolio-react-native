type TProjectContainer = {
  projectName: string,
  tecnologyList: {name: string, icon: string}[],
  description: string,
  githubLink: string,
  websiteLink?: string,
  downloadLink?: string
}

export default TProjectContainer