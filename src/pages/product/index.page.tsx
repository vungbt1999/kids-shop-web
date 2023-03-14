import { useAuth } from '@/config/auth';
import { withAuthClient } from '@/middleware/withAuthClient';
import { useApiClient } from '@/utils/graphql-api';
import { Product } from '@/utils/graphql-api/generated';
import { useEffect, useState } from 'react';

function ProductPage() {
  const { apiClient } = useApiClient();
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    fetchListProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchListProduct = async () => {
    try {
      if (loading) return;
      setLoading(true);
      const res = await apiClient.all_product();
      if (res && res.all_product) {
        setData(res.all_product || []);
      }
      setLoading(false);
    } catch {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-center text-2xl mt-16">Product List</h1>
      {loading && <>Loading...</>}
      {data.length <= 0 && <h2>Product Empty</h2>}
      <div>{data.map((item) => JSON.stringify(item))}</div>
    </div>
  );
}

ProductPage.withPageLayout = true;
export default withAuthClient(ProductPage);
