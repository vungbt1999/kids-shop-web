import { CSSProperties, FC } from 'react';
import ArrowRight from './arrow-right';
import Cart from './cart';
import ChevronDown from './chevron-down';
import ChevronLeft from './chevron-left';
import ChevronRight from './chevron-right';
import Close from './close';
import Edit from './edit';
import EyeDisable from './eye-disable';
import EyeEnable from './eye-enable';
import Facebook from './facebook';
import Heart from './heart';
import Instagram from './instagram';
import Lock from './lock';
import Menu from './menu';
import Plus from './plus';
import Repeat from './repeat';
import Search from './search';
import Tag from './tag';
import Truck from './truck';
import User from './user';
import Youtube from './youtube';
import { CartEmpty } from './empties';

export type IconProps = {
  className?: string;
  style?: CSSProperties;
  transform?: string;
  strokeWidth?: number;
};

export type Icon = FC<IconProps>;

export type IconName =
  | 'search'
  | 'cart'
  | 'heart'
  | 'user'
  | 'close'
  | 'plus'
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-down'
  | 'arrow-right'
  | 'eye-enable'
  | 'eye-disable'
  | 'edit'
  | 'facebook'
  | 'youtube'
  | 'instagram'
  | 'menu'
  | 'truck'
  | 'repeat'
  | 'lock'
  | 'tag'
  | 'cart-empty';

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
  },
  close: (props: IconProps) => {
    return <Close {...props} />;
  },
  plus: (props: IconProps) => {
    return <Plus {...props} />;
  },
  'chevron-left': (props: IconProps) => {
    return <ChevronLeft {...props} />;
  },
  'chevron-right': (props: IconProps) => {
    return <ChevronRight {...props} />;
  },
  'chevron-down': (props: IconProps) => {
    return <ChevronDown {...props} />;
  },
  'arrow-right': (props: IconProps) => {
    return <ArrowRight {...props} />;
  },
  'eye-enable': (props: IconProps) => {
    return <EyeEnable {...props} />;
  },
  'eye-disable': (props: IconProps) => {
    return <EyeDisable {...props} />;
  },
  edit: (props: IconProps) => {
    return <Edit {...props} />;
  },
  youtube: (props: IconProps) => {
    return <Youtube {...props} />;
  },
  facebook: (props: IconProps) => {
    return <Facebook {...props} />;
  },
  instagram: (props: IconProps) => {
    return <Instagram {...props} />;
  },
  menu: (props: IconProps) => {
    return <Menu {...props} />;
  },
  truck: (props: IconProps) => {
    return <Truck {...props} />;
  },
  repeat: (props: IconProps) => {
    return <Repeat {...props} />;
  },
  lock: (props: IconProps) => {
    return <Lock {...props} />;
  },
  tag: (props: IconProps) => {
    return <Tag {...props} />;
  },
  'cart-empty': (props: IconProps) => {
    return <CartEmpty {...props} />;
  }
};

export const RenderIcon = ({ name, ...reset }: IconProps & { name?: IconName }) => {
  if (!name) {
    return null;
  }
  const Icon = Icons[name];
  return <Icon {...reset} />;
};
