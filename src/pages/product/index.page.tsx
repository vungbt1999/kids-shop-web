import { Product } from '@/config/graphql-api/generated';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { withTranslations } from '@/middleware/withSSTranslations';
import { withSSAuth } from '@/middleware/withAuth';
import { signOut } from 'next-auth/react';
import { useApiClient } from '@/config/graphql-api/provider';

export default function ProductPage() {
  const router = useRouter();
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { apiClient } = useApiClient();

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
      <div className="max-w-[30%] mx-auto mb-16">
        <h1 className="text-center text-2xl mt-16">Product List</h1>
        <button
          type="submit"
          className="mt-6 text-center border w-full py-3 font-medium bg-gray-900 border-gray-900 text-white"
          onClick={() => {
            signOut();
          }}
        >
          Logout
        </button>
      </div>
      {loading && <>Loading...</>}
      {data.length <= 0 && <h2>Product Empty</h2>}
      <div>{data.map((item) => JSON.stringify(item))}</div>
    </div>
  );
}

export const getServerSideProps = withSSAuth(withTranslations());
