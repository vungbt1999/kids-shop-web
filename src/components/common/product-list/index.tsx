import { ProductVariantFragment } from '@/config/graphql-api/generated';
import { ViewStyle } from '@/types';
import clsx from 'clsx';
import ProductCard from './product-card';

export type ProductListProps = {
  items: ProductVariantFragment[];
  view?: ViewStyle;
  className?: string;
};

export default function ProductList({
  items,
  view = ViewStyle.horizontal,
  className
}: ProductListProps) {
  const isHorizontal = view === 'horizontal';

  return (
    <div
      className={clsx('grid gap-6', className, {
        'grid-cols-2': !isHorizontal
      })}
    >
      {items.map((item, index) => {
        const product = item.product;
        return (
          <ProductCard
            {...item}
            images={product.images || []}
            promotionPrice={item.promotionPrice}
            price={item.priceAdjustment}
            name={product.name}
            status={product.status}
            categoryName={product.category?.name}
            key={item.id || index}
            view={view}
          />
        );
      })}
    </div>
  );
}
