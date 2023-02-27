import React, { createContext, useCallback, useState } from 'react';
import { ThemeConfig } from '..';

export const getStyle = (themeConfig: ThemeConfig) => {
  let configStyle: any = {
    // --- COLOR ---
    // Primary Color
    '--color-primary': themeConfig.colors.primary.default,
    '--color-primary-100': themeConfig.colors.primary._100,
    '--color-primary-200': themeConfig.colors.primary._200,
    '--color-primary-300': themeConfig.colors.primary._300,
    '--color-primary-400': themeConfig.colors.primary._400,
    '--color-primary-500': themeConfig.colors.primary._500,
    '--color-primary-600': themeConfig.colors.primary._600,
    '--color-primary-700': themeConfig.colors.primary._700,
    '--color-primary-900': themeConfig.colors.primary._900,

    // --- FONT ---
    '--font-primary': themeConfig.font.primary
  };

  if (themeConfig.font.secondary) {
    configStyle = {
      ...configStyle,
      '--font-secondary': themeConfig.font.secondary
    };
  }
  if (themeConfig.font.tertiary) {
    configStyle = {
      ...configStyle,
      '--font-tertiary': themeConfig.font.tertiary
    };
  }

  return configStyle;
};

export type ThemeContextType = {
  theme: ThemeConfig;
  setTheme: (_theme: Partial<ThemeConfig>) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: {
    colors: {
      primary: {
        default: ''
      }
    },
    font: {
      primary: 'sans-serif, serif, monospace, cursive'
    }
  },
  setTheme: (_theme: Partial<ThemeConfig>) => {}
});

export type ThemeProviderProps = {
  config: ThemeConfig;
  children: JSX.Element | React.ReactNode;
};

export function ThemeProvider(props: ThemeProviderProps) {
  const [theme, setThemeState] = useState<ThemeConfig>(props.config);

  const setTheme = useCallback((newTheme: Partial<ThemeConfig>) => {
    setThemeState((theme) => ({ ...theme, ...newTheme }));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <main style={getStyle(theme)} className="h-screen">
        {theme?.stylesheets?.map((stylesheet, index) => (
          <link key={index} rel="stylesheet" href={stylesheet} />
        ))}
        {props.children}
      </main>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => React.useContext(ThemeContext);
