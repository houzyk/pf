interface ThemeInterface {
  text: string;
  outline: string;
  background: string;
}

const lightTheme: ThemeInterface = {
  text: "#000000",
  outline: "#000000",
  background: "#FFFFFF"
}

const darkTheme: ThemeInterface = {
  text: "#FFFFFF",
  outline: "#FFFFFF",
  background: "#000000"
}

export type { ThemeInterface };
export { lightTheme, darkTheme };