import { ImageFragment } from '@/config/graphql-api/generated';
import { transformListImage } from '@/utils/common';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'next-i18next';
import Select from '../../select';
import { RenderIcon } from '@/components/icons';
import { useForm } from 'react-hook-form';

export type CartProductItemProps = {
  images?: ImageFragment[];
};

export default function CartProductItem({ images }: CartProductItemProps) {
  const { t } = useTranslation();
  const imageData = transformListImage(images)[0];
  const { control } = useForm({
    defaultValues: {
      quantity: ''
    }
  });

  return (
    <div className="flex items-center py-8">
      <div className={clsx('relative aspect-auto w-16 h-20 mx-4')}>
        <Image
          fill
          src={imageData.url}
          alt={imageData.alternativeText || ''}
          className="object-cover aspect-auto"
        />
      </div>
      <div className="px-4">
        {/** Name + Price */}
        <p className="line-clamp-1 font-medium">Cotton floral print</p>

        {/** Size */}
        <div>
          {t('size')}
          <span>M</span>
        </div>

        {/** Color */}
        <div>
          {t('color')}
          <span>Red</span>
        </div>

        {/** Price */}
        <div className="flex justify-between">
          <p>$40.00</p>
          <p>$40.00</p>
        </div>

        <div className="flex justify-between">
          <Select
            control={control}
            name="quantity"
            options={[
              { value: '1', title: '1' },
              { value: '2', title: '2' },
              { value: '3', title: '3' }
            ]}
          />
          <div className="flex items-center">
            <RenderIcon name="close" />
            {t('remove')}
          </div>
        </div>
      </div>
    </div>
  );
}
