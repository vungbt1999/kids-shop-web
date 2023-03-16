import Input from '@/components/common/input';
import { withTranslations } from '@/middleware/withSSTranslations';
import { withSSUnAuth } from '@/middleware/withSSUnAuth.ts';
import { yupResolver } from '@hookform/resolvers/yup';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

export default function LoginPage() {
  const router = useRouter();
  const schema = yup
    .object({
      email: yup.string().required('Email must be required.'),
      password: yup.string().required('Password must be required.')
    })
    .required();

  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(schema)
  });

  const onSubmit: SubmitHandler<{ email: string; password: string }> = async (data) => {
    const result = await signIn('credentials', { ...data, redirect: false });
    if (result?.ok && result.status === 200) router.replace('/');
  };

  return (
    <div>
      <h1 className="text-center text-4xl mt-10">Login Page</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-[30%] mx-auto mt-16">
        <Input name="email" control={control} placeholder="Email" />
        <Input name="password" control={control} placeholder="Password" className="mt-6" />
        <button
          type="submit"
          className="mt-6 text-center border w-full py-3 font-medium bg-gray-900 border-gray-900 text-white"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export const getServerSideProps = withSSUnAuth(withTranslations());
