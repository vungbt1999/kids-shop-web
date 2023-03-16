import { ProductListFragment } from '@/config/graphql-api/generated';
import { ViewStyle } from '@/types';
import clsx from 'clsx';
import ProductCard from './product-card';

export type ProductListProps = {
  items: ProductListFragment[];
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
        return (
          <ProductCard
            {...item}
            images={item.images || []}
            categoryName={item.category?.name}
            key={item.id || index}
            view={view}
          />
        );
      })}
    </div>
  );
}
