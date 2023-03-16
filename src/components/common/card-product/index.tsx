import { ImageObj } from '@/types';
import React from 'react';

export type CardProductProps = {
  image: ImageObj;
  name: string;
  price: number;
  promotionPrice?: number;
  categoryName?: string;
};
export default function CardProduct({
  image,
  name,
  price,
  promotionPrice,
  categoryName
}: CardProductProps) {
  return <div>CardProduct</div>;
}
