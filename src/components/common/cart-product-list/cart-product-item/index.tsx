import { ImageFragment } from '@/config/graphql-api/generated';
import { priceUnit, transformListImage } from '@/utils/common';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'next-i18next';
import Select from '../../select';
import { RenderIcon } from '@/components/icons';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

export type CartProductItemProps = {
  id: string;
  images?: ImageFragment[];
  showDetail?: boolean;
  name: string;
  color?: string;
  size?: string;
  price: number;
  promotionPrice?: number | null;
  className?: string;
  onRemove: (id: string) => void;
};

export default function CartProductItem({
  id,
  images,
  showDetail = true,
  name,
  color,
  size,
  price,
  promotionPrice,
  className,
  onRemove
}: CartProductItemProps) {
  const { t } = useTranslation();
  const imageData = transformListImage(images)[0];
  const { control } = useForm({
    defaultValues: {
      quantity: ''
    }
  });

  return (
    <div className={clsx('flex items-center py-8', className)}>
      <div className={clsx('relative aspect-auto w-16 h-24 mx-4')}>
        <Image
          fill
          src={imageData.url}
          alt={imageData.alternativeText || ''}
          className="object-cover aspect-auto"
        />
      </div>
      <div className="px-4 flex-1">
        {/** Name + Price */}
        <Link href="/#">
          <p className="line-clamp-1 font-medium mb-2">{name}</p>
        </Link>

        {/** Size */}
        {showDetail && (
          <div className="text-grey text-[15px]">
            {t('size')}:<span className="ml-1">{size}</span>
          </div>
        )}

        {/** Color */}
        {showDetail && (
          <div className="text-grey text-[15px] flex items-center">
            {t('color')}:
            <span style={{ background: color }} className="w-4 h-4 rounded-full block ml-1"></span>
          </div>
        )}

        {/** Price */}
        <div className="flex items-center mt-2">
          <p
            className={clsx({
              'font-medium text-grey text-[15px]': !showDetail,
              'font-medium text-grey line-through': showDetail,
              'text-sm': promotionPrice
            })}
          >
            {priceUnit(price)}
          </p>

          {promotionPrice && (
            <p
              className={clsx({
                hidden: !showDetail,
                'text-primary font-medium ml-2': showDetail
              })}
            >
              {priceUnit(promotionPrice)}
            </p>
          )}
        </div>

        <div className="flex justify-between w-full mt-6">
          <Select
            control={control}
            name="quantity"
            options={[
              { value: '1', title: '1' },
              { value: '2', title: '2' },
              { value: '3', title: '3' }
            ]}
            size="sm"
          />
          <div
            className="flex items-center text-gray-400 cursor-pointer text-sm"
            onClick={() => onRemove(id)}
          >
            <RenderIcon name="close" className="!w-4 !h-4 mr-2" />
            {t('remove')}
          </div>
        </div>
      </div>
    </div>
  );
}
