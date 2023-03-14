import { RenderIcon } from '@/components/icons';
import Link from 'next/link';
import React from 'react';
import { HeaderLayoutProps } from '.';

export default function HeaderDesktop({ navigation }: HeaderLayoutProps) {
  return (
    <div className="hidden md:block">
      <ul className="hidden">
        {navigation.map((item, index) => {
          return (
            <li key={item?.id || index}>
              <Link href={item.url}>{item.title}</Link>
            </li>
          );
        })}
      </ul>

      <div>
        <RenderIcon name="menu" />
      </div>

      <ul></ul>
    </div>
  );
}
