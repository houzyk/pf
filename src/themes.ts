interface ThemeInterface {
  text: string;
  outline: string;
  background: string;
  progressBar: string;
}

const lightTheme: ThemeInterface = {
  text: "#000000",
  outline: "#000000",
  background: "#FFFFFF",
  progressBar: "#ed33b9"
}

const darkTheme: ThemeInterface = {
  text: "#FFFFFF",
  outline: "#FFFFFF",
  background: "#000000",
  progressBar: "#FFFFFF"
}

export type { ThemeInterface };
export { lightTheme, darkTheme };