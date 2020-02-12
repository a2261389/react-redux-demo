import { createContext } from 'react';

const themes = {
  light: {
    color: '#000000',
    backgroundColor: '#eeeeee',
  },
  dark: {
    color: '#ffffff',
    backgroundColor: '#343A40',
  },
};

const ThemeContext = createContext(themes);

export default ThemeContext;
