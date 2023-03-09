import Link from 'next/link';
import React from 'react';

export function HeaderLayout() {
  const items = [
    {
      title: 'Home',
      href: '/'
    },
    {
      title: 'Catalog',
      href: '/'
    },
    {
      title: 'Shop',
      href: '/'
    },
    {
      title: 'Pages',
      href: '/'
    },
    {
      title: 'Blog',
      href: '/'
    },
    {
      title: 'Docs',
      href: '/'
    }
  ];

  return (
    <nav>
      <div className="container flex flex-wrap items-center justify-between">
        <ul>
          {items.map((item, index) => {
            return (
              <li key={index}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <Link href="/">Shopper.</Link>
        <ul></ul>
      </div>
    </nav>
  );
}
