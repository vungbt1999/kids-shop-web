import Input from '@/components/common/input';
import ProductList from '@/components/common/product-list';
import Select from '@/components/common/select';
import { RenderIcon } from '@/components/icons';
import { AllProductVariantQuery, SortOrder } from '@/config/graphql-api/generated';
import { useApiClient } from '@/config/graphql-api/provider';
import { ViewStyle } from '@/types';
import { pagingDetect } from '@/utils/common';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

export type SearchPopupProps = {
  isActive?: boolean;
  onClosePopup: () => void;
};
export default function SearchPopup({ isActive = false, onClosePopup }: SearchPopupProps) {
  const { t } = useTranslation();
  const [productsRecommend, setProductsRecommend] = useState<
    AllProductVariantQuery['all_product_variant']
  >([]);
  const { apiClient } = useApiClient();

  useEffect(() => {
    fetchingProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const schema = yup
    .object({
      param: yup.string().required('Input search must be required.'),
      category: yup.string().required('Input search must be required.')
    })
    .required();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      param: '',
      category: 'all'
    },
    resolver: yupResolver(schema)
  });

  const onSubmit: SubmitHandler<{ param: string }> = (data) => {
    console.log(data);
  };

  const fetchingProduct = async () => {
    const res = await apiClient.allProductVariant({
      ...pagingDetect({ page: 1 }),
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
        <p className="text-lg font-medium capitalize">{t('search_products')}</p>
        <div className="absolute top-1/2 right-8 -translate-y-1/2" onClick={onClosePopup}>
          <RenderIcon name="close" className="text-secondary opacity-50" />
        </div>
      </div>

      {/** Search Content */}
      <form onSubmit={handleSubmit(onSubmit)} className="p-8 border-b border-solid border-gray-100">
        <Select
          name="category"
          placeholder={t('all_categories')}
          control={control}
          defaultValue="all"
          options={[
            {
              title: 'Women',
              value: 'women'
            },
            {
              title: 'Men',
              value: 'men'
            },
            {
              title: 'Kids',
              value: 'kids'
            }
          ]}
          className="mb-6"
        />
        <Input showSearch name="param" control={control} placeholder={t('search')} />
      </form>

      {/** Search Recommend */}
      <div className="p-8">
        <p className="text-base capitalize mb-6">{t('search_results')}:</p>
        <ProductList items={productsRecommend} view={ViewStyle.horizontal} />
        <Link href="/#" className="flex items-center text-gray-900 font-medium capitalize mt-6">
          {t('view_all')}
          <RenderIcon name="arrow-right" className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  );
}
