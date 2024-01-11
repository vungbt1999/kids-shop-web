import CartProductList from '@/components/common/cart-product-list';
import ProductList from '@/components/common/product-list';
import { RenderIcon } from '@/components/icons';
import { AllProductVariantQuery, SortOrder } from '@/config/graphql-api/generated';
import { useApiClient } from '@/config/graphql-api/provider';
import { ViewStyle } from '@/types';
import { pagingDetect } from '@/utils/common';
import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export type SearchPopupProps = {
  isActive?: boolean;
  onClosePopup: () => void;
};
export default function CartPopup({ isActive = false, onClosePopup }: SearchPopupProps) {
  const { t } = useTranslation();

  const [productsRecommend, setProductsRecommend] = useState<
    AllProductVariantQuery['all_product_variant']
  >([]);
  const { apiClient } = useApiClient();

  useEffect(() => {
    fetchingProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchingProduct = async () => {
    const res = await apiClient.allProductVariant({
      ...pagingDetect({ page: 1, limit: 5 }),
      orderBy: { createdAt: SortOrder.Desc }
    });
    const allProductsResult = res.all_product_variant;
    setProductsRecommend(allProductsResult || []);
  };

  return (
    <div
      className={clsx(
        'fixed top-0 right-0 left-0 bottom-0 w-full h-full bg-white z-[1] overflow-auto transition-all duration-300',
        {
          'translate-x-full': !isActive,
          'translate-x-0': isActive
        }
      )}
    >
      {/** Search Header */}
      <div className="flex items-center justify-center px-8 py-6 border-b border-gray-100 relative">
        <p className="text-lg font-medium capitalize">
          {t('your_cart')}
          <span className="ml-2">({productsRecommend.length})</span>
        </p>
        <div className="absolute top-1/2 right-8 -translate-y-1/2" onClick={onClosePopup}>
          <RenderIcon name="close" className="text-secondary opacity-50" />
        </div>
      </div>

      {/** Product Cart List */}
      <CartProductList
        items={productsRecommend}
        onRemoveItem={(id) => setProductsRecommend(productsRecommend.filter((x) => x.id !== id))}
      />
    </div>
  );
}
