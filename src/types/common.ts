import { User } from '@/utils/graphql-api/generated';

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
  formats?: ImageFormat | null;
  url: string;
  alternativeText?: string | null;
  mime?: string | null;
  width?: number | null;
  height?: number | null;
};
