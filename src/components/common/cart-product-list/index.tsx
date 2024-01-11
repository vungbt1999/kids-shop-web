import { ProductVariantFragment } from '@/config/graphql-api/generated';
import { StyleVariant } from '@/types';
import { priceUnit } from '@/utils/common';
import { useTranslation } from 'next-i18next';
import { ButtonLink } from '../button';
import CartProductItem from './cart-product-item';
import Empty from '../empty';

export type CartProductListProps = {
  items: ProductVariantFragment[];
  onRemoveItem: (id: string) => void;
};

export default function CartProductList({ items, onRemoveItem }: CartProductListProps) {
  const { t } = useTranslation();

  const getTotalPrice = (items: ProductVariantFragment[]) => {
    const fn = (total: number, { priceAdjustment, promotionPrice }: ProductVariantFragment) =>
      total + (promotionPrice ? promotionPrice : priceAdjustment);
    return items.reduce(fn, 0);
  };

  return (
    <div>
      {items.length > 0 ? (
        <div>
          {items.map((item, index) => {
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
                onRemove={onRemoveItem}
              />
            );
          })}
        </div>
      ) : (
        <div>
          <Empty
            title="Your cart is empty"
            subtitle="Check out what's trending"
            ctaButton={{ title: 'Discover Products', onClick: () => alert('button') }}
          />
        </div>
      )}

      {/** Total price */}
      <div className="px-8 py-6 bg-light font-medium flex items-center justify-between text-[15px]">
        <span>{t('subtotal')}</span> <span>{priceUnit(getTotalPrice(items))}</span>
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
