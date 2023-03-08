import { CSSProperties, FC } from 'react';
import Cart from './cart';
import Heart from './heart';
import Search from './search';
import User from './user';

export type IconProps = {
  className?: string;
  style?: CSSProperties;
  transform?: string;
  strokeWidth?: number;
};

export type Icon = FC<IconProps>;

export type IconName = 'search' | 'cart' | 'heart' | 'user';

export type IconsType = Record<IconName, Icon>;

export const Icons: IconsType = {
  search: (props: IconProps) => {
    return <Search {...props} />;
  },
  cart: (props: IconProps) => {
    return <Cart {...props} />;
  },
  heart: (props: IconProps) => {
    return <Heart {...props} />;
  },
  user: (props: IconProps) => {
    return <User {...props} />;
  }
};

export const RenderIcon = ({ name, ...reset }: IconProps & { name?: IconName }) => {
  if (!name) {
    return null;
  }
  const Icon = Icons[name];
  return <Icon {...reset} />;
};
