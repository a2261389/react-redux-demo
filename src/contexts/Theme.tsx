import { createContext } from 'react';

export interface Theme {
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderTop?: string;
}

export type Themes = {
  dark: Theme;
  light: Theme;
};

export const themes: Themes = {
  light: {
    color: '#000000',
    backgroundColor: '#eeeeee',
    borderColor: '#000000',
    borderTop: '1px solid #000000',
  },
  dark: {
    color: '#ffffff',
    backgroundColor: '#343A40',
    borderColor: '#eeeeee',
  },
};

const change = (): void => {
  //
};
export type ThemeContextProps = { theme: Theme; changeTheme: () => void };
const ThemeContext = createContext<ThemeContextProps>({ theme: themes.dark, changeTheme: change });

export default ThemeContext;
