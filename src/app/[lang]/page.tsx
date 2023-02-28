'use client';

import { useToasts } from '@/config/toast';
import {useTranslations} from 'next-intl';

export default async function Home({ params: { lang }}: any) {
  const { success, danger, info, warning } = useToasts();
  const t = useTranslations('common');

  return (
    <div className="font-primary">
      <p>{t('home')}</p>
      <button
        className="border rounded bg-green-500 p-2 text-white"
        onClick={() => success('Test Toast Success')}
      >
        Show Toast Success
      </button>
      <button
        className="border rounded bg-red-500 p-2 text-white"
        onClick={() => danger('Test Toast Danger')}
      >
        Show Toast Danger
      </button>
      <button
        className="border rounded bg-yellow-500 p-2 text-white"
        onClick={() => warning('Test Toast Warning')}
      >
        Show Toast Warning
      </button>
      <button
        className="border rounded bg-blue-500 p-2 text-white"
        onClick={() => info('Test Toast Info')}
      >
        Show Toast Info
      </button>
    </div>
  );
}
