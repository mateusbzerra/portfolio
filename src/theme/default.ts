import { DefaultTheme } from 'styled-components';

export interface CustomTheme extends DefaultTheme {
  background: string;
  foreground: string;
  blue: string;
  white: string;
}

const theme: CustomTheme = {
  background: '#02102B',
  foreground: '#1E2A40',
  blue: '#3B63AD',
  white: '#fff'
};

export default theme;
