import { ImageFragment, ProductStatus } from '@/config/graphql-api/generated';
import { ViewStyle } from '@/types';
import { priceUnit, transformListImage } from '@/utils/common';
import clsx from 'clsx';
import Image from 'next/image';
import TagStatus from '../tag-status';

export type CardProductProps = {
  images?: ImageFragment[];
  name: string;
  price: number;
  promotionPrice?: number | null;
  categoryName?: string;
  view?: ViewStyle;
  status?: ProductStatus | null;
  className?: string;
};

export default function ProductCard({
  images,
  name,
  price,
  promotionPrice,
  categoryName,
  status,
  className,
  view = ViewStyle.horizontal
}: CardProductProps) {
  const imageData = transformListImage(images)[0];
  const isHorizontal = view === 'horizontal';

  return (
    <div
      className={clsx('flex items-center', className, {
        'flex-row': isHorizontal,
        'flex-col': !isHorizontal
      })}
    >
      <div
        className={clsx('relative aspect-auto', {
          'w-1/3 h-28': isHorizontal,
          'w-full h-44': !isHorizontal
        })}
      >
        <Image
          fill
          src={imageData.url}
          alt={imageData.alternativeText || ''}
          className="object-cover aspect-auto"
        />
        {status && (
          <TagStatus
            view={view}
            status={status}
            className={clsx('absolute left-0', {
              'top-3': !isHorizontal,
              'bottom-0': isHorizontal
            })}
          />
        )}
      </div>
      <div
        className={clsx('flex flex-col w-full', {
          'pl-6 w-2/3': isHorizontal,
          'items-start py-6': !isHorizontal
        })}
      >
        <p className="text-grey text-sm">{categoryName}</p>
        <p className="line-clamp-2 font-medium">{name}</p>
        <div className="flex items-end">
          <p
            className={clsx('font-medium', {
              'text-secondary text-sm line-through': promotionPrice,
              'text-grey': !promotionPrice
            })}
          >
            {priceUnit(price)}
          </p>
          {promotionPrice && (
            <p className="text-primary font-medium ml-2">{priceUnit(promotionPrice)}</p>
          )}
        </div>
      </div>
    </div>
  );
}
