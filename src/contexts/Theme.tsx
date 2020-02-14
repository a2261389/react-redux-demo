import { createContext } from 'react';

const themes = {
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

const ThemeContext = createContext(themes);

export default ThemeContext;
