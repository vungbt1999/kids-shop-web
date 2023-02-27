'use client';

import { useToasts } from '@/config/toast';

export default function Home() {
  const { success, danger, info, warning } = useToasts();

  return (
    <div className="font-primary">
      <p>Hello Next 13</p>
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
