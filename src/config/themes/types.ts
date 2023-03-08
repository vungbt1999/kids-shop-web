export type UIConfig = {
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

  light?: ColorPaletteConfig;
  dark?: ColorPaletteConfig;
  facebook?: ColorPaletteConfig;
  twitter?: ColorPaletteConfig;
  linkedin?: ColorPaletteConfig;
  gray?: ColorPaletteConfig;

  blue?: ColorPaletteConfig;
  indigo?: ColorPaletteConfig;
  purple?: ColorPaletteConfig;
  pink?: ColorPaletteConfig;
  red?: ColorPaletteConfig;
  orange?: ColorPaletteConfig;
  yellow?: ColorPaletteConfig;
  green?: ColorPaletteConfig;
  teal?: ColorPaletteConfig;
  cyan?: ColorPaletteConfig;
  white?: ColorPaletteConfig;
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

export const ScreenConfig = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
  '3xl': 1728
};

export type ScreenConfigKey = keyof typeof ScreenConfig;

export type Screen = {
  sizes: Record<ScreenConfigKey, boolean>;
  width: number;
  height: number;
  isMobile: boolean;
};
