export interface ThemeInterface {
  text: string;
  outline: string;
  background: string;
}

export const lightTheme: ThemeInterface = {
  text: "#000000",
  outline: "#000000",
  background: "#FFFFFF"
}

export const darkTheme: ThemeInterface = {
  text: "#FFFFFF",
  outline: "#FFFFFF",
  background: "#000000"
}
