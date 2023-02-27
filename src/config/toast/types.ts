import { themeConfig } from '../themes';

export enum ToastType {
  Danger = 'Danger',
  Success = 'Success',
  Info = 'Info',
  Warning = 'Warning'
}

export type ToastPriority = {
  id: number;
  type: ToastType;
  backgroundColor: string;
  description: string;
  title?: string;
};

export const TOAST_PROPERTIES: ToastPriority[] = [
  {
    id: Math.floor(Math.random() * 101 + 1),
    type: ToastType.Success,
    backgroundColor: themeConfig.colors.success?.default || '#33CC7F',
    description: ''
  },
  {
    id: Math.floor(Math.random() * 101 + 1),
    type: ToastType.Danger,
    backgroundColor: themeConfig.colors.danger?.default || '#FF1919',
    description: ''
  },
  {
    id: Math.floor(Math.random() * 101 + 1),
    type: ToastType.Info,
    backgroundColor: themeConfig.colors.info?.default || '#00B2FF',
    description: ''
  },
  {
    id: Math.floor(Math.random() * 101 + 1),
    type: ToastType.Warning,
    backgroundColor: themeConfig.colors.warning?.default || '#FFBE40',
    description: ''
  }
];
