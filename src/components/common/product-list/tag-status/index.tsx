import { ProductStatus } from '@/config/graphql-api/generated';
import { ViewStyle } from '@/types';
import clsx from 'clsx';

export type TagStatusProps = {
  status: ProductStatus;
  className?: string;
  view?: ViewStyle;
};
export default function TagStatus({
  status,
  className,
  view = ViewStyle.horizontal
}: TagStatusProps) {
  const isHorizontal = view === 'horizontal';

  return (
    <div
      className={clsx(className, 'font-medium', {
        'text-gray-900 bg-white uppercase': status === ProductStatus.New,
        'text-white bg-gray-900 uppercase': status === ProductStatus.Sale,
        'text-[8px] py-1 px-3': isHorizontal,
        'text-[11px] py-1 px-4': !isHorizontal
      })}
    >
      {status}
    </div>
  );
}
