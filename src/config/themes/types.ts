export type ThemeConfig = {
  colors: ColorPalette;
  font: {
    primary: string;
    secondary?: string;
    tertiary?: string;
  };
  stylesheets?: string[];
};

export type ColorPalette = {
  primary: ColorPaletteConfig;
  secondary?: ColorPaletteConfig;
  tertiary?: ColorPaletteConfig;

  success?: ColorPaletteConfig;
  warning?: ColorPaletteConfig;
  danger?: ColorPaletteConfig;
  info?: ColorPaletteConfig;
};

export type ColorPaletteConfig = {
  default: string;
  _50?: string;
  _100?: string;
  _200?: string;
  _300?: string;
  _400?: string;
  _500?: string;
  _600?: string;
  _700?: string;
  _800?: string;
  _900?: string;
};
