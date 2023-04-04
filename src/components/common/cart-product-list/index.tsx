import { ProductVariantFragment, SortOrder } from '@/config/graphql-api/generated';
import { useApiClient } from '@/config/graphql-api/provider';
import { pagingDetect, priceUnit } from '@/utils/common';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import CartProductItem from './cart-product-item';
import { Button, ButtonLink } from '../button';
import { StyleVariant } from '@/types';

export type CartProductListProps = {
  items: ProductVariantFragment[];
};

export default function CartProductList({ items }: CartProductListProps) {
  const { t } = useTranslation();
  const [newItems, setNewItems] = useState<ProductVariantFragment[]>([]);

  useEffect(() => {
    setNewItems(items);
  }, [items]);

  const getTotalPrice = (items: ProductVariantFragment[]) => {
    const fn = (total: number, { priceAdjustment, promotionPrice }: ProductVariantFragment) =>
      total + (promotionPrice ? promotionPrice : priceAdjustment);
    return items.reduce(fn, 0);
  };

  return (
    <div>
      <div>
        {newItems.map((item, index) => {
          const product = item.product;
          return (
            <CartProductItem
              {...item}
              images={product.images || []}
              key={item.id || index}
              name={product.name}
              color={item.color}
              size={item.size}
              price={item.priceAdjustment}
              promotionPrice={item.promotionPrice}
              className="border-b border-gray-100 last:border-b-0"
              onRemove={(id) => setNewItems(newItems.filter((x) => x.id !== id))}
            />
          );
        })}
      </div>

      {/** Total price */}
      <div className="px-8 py-6 bg-light font-medium flex items-center justify-between text-[15px]">
        <span>{t('subtotal')}</span> <span>{priceUnit(getTotalPrice(newItems))}</span>
      </div>

      {/** Buttons */}
      <div className="p-8">
        <ButtonLink href="/#">{t('continue_to_checkout')}</ButtonLink>
        <ButtonLink href="/#" style={StyleVariant.style_2} className="mt-2">
          {t('view_cart')}
        </ButtonLink>
      </div>
    </div>
  );
}
