import Input from '@/components/common/input';
import { RenderIcon } from '@/components/icons';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'next-i18next';
import Select from '@/components/common/select';
import { Product, SortOrder } from '@/config/graphql-api/generated';
import { useApiClient } from '@/config/graphql-api/provider';
import { pagingDetect } from '@/utils/common';

export default function SearchPopup() {
  const { t } = useTranslation();
  const [productsRecommend, setProductsRecommend] = useState<Product[]>([]);
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
    const res = await apiClient.all_product({
      ...pagingDetect({ page: 6 }),
      orderBy: { createdAt: SortOrder.Desc }
    });
    const allProductsResult = res.all_product;
    console.log('allProductsResult:', allProductsResult);
  };

  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 w-full h-full bg-white z-[1]">
      {/** Search Header */}
      <div className="flex items-center justify-center px-8 py-6 border-b border-gray-100 relative">
        <p className="text-lg font-medium capitalize">{t('search_products')}</p>
        <div className="absolute top-1/2 right-8 -translate-y-1/2">
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
        <p className="text-base capitalize">{t('search_result')}:</p>
      </div>
    </div>
  );
}
