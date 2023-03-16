import { All_ProductQuery, SortOrder } from '@/config/graphql-api/generated';
import { useApiClient } from '@/config/graphql-api/provider';
import { pagingDetect } from '@/utils/common';
import React, { useEffect, useState } from 'react';
import CartProductItem from './cart-product-item';

export default function CartProductList() {
  const [productsRecommend, setProductsRecommend] = useState<All_ProductQuery['all_product']>([]);
  const { apiClient } = useApiClient();

  useEffect(() => {
    fetchingProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchingProduct = async () => {
    const res = await apiClient.all_product({
      ...pagingDetect({ page: 1 }),
      orderBy: { createdAt: SortOrder.Desc }
    });
    const allProductsResult = res.all_product;
    setProductsRecommend(allProductsResult || []);
  };

  return (
    <div>
      <div>
        {productsRecommend.map((item, index) => {
          return <CartProductItem {...item} images={item.images || []} key={item.id || index} />;
        })}
      </div>
    </div>
  );
}
