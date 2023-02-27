import { ThemeConfig } from './types';

export const themeConfig: ThemeConfig = {
  colors: {
    primary: {
      default: '#E84142',
      _100: '#ECFFF3',
      _300: '#79FFAA',
      _500: '#E84142',
      _700: '#00A93E',
      _900: '#009336'
    }
  },
  font: {
    primary: "'Poppins', sans-serif"
  },
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
  ]
};
