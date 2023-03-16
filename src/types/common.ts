import { User } from '@/config/graphql-api/generated';

export type Format = 'thumbnail' | 'medium';

export type ImageFormat = Record<
  Format,
  {
    ext: string;
    url: string;
    mime: string;
    name: string;
    width: number;
    height: number;
  }
>;

export type ImageObj = {
  id?: string;
  formats?: ImageFormat | null;
  url: string;
  alternativeText?: string | null;
  mime?: string | null;
  width?: number | null;
  height?: number | null;
};

export enum ViewStyle {
  horizontal = 'horizontal',
  vertical = 'vertical'
}

export enum StyleVariant {
  style_1 = 'style_1',
  style_2 = 'style_2'
}
