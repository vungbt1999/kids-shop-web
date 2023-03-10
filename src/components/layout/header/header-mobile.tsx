import { IconName, RenderIcon } from '@/components/icons';
import Logo from '@/components/logo';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'next-i18next';
import { HeaderLayoutProps } from '.';

export default function HeaderMobile({ navigation }: HeaderLayoutProps) {
  const actionsMenu: IconName[] = ['search', 'user', 'heart', 'cart'];
  const { t } = useTranslation();

  const onClickActionMenu = (name: IconName) => {
    console.log('name:', name);
  };

  return (
    <div className="md:hidden flex items-center justify-between w-full">
      <input id="input_nav_mobile" name="input_nav_mobile" type="checkbox" hidden />

      <Link href="/" className="z-[1]">
        <Logo />
      </Link>

      <label htmlFor="input_nav_mobile" className="icon-nav-mobile cursor-pointer z-[1] block">
        <RenderIcon name="menu" />
      </label>

      <label
        htmlFor="input_nav_mobile"
        className="icon-close-nav-mobile cursor-pointer z-[1] hidden"
      >
        <RenderIcon name="close" />
      </label>

      <label
        htmlFor="input_nav_mobile"
        className="opacity-menu-mobile fixed top-0 right-0 left-0 bottom-0 w-full h-full bg-black opacity-80 mt-20"
      ></label>

      {/** Menu */}
      <div className="menu-mobile fixed top-0 right-0 left-0 bottom-0 w-full h-full bg-white pt-20 translate-x-full overflow-y-auto">
        <ul>
          {navigation.map((item, index) => {
            return (
              <li key={item?.id || index} className="py-2 px-4 text-base font-medium">
                {' '}
                <Link href={item.url}>{item.title}</Link>
              </li>
            );
          })}
        </ul>

        {/** Action Menu */}
        <ul className="flex gap-4 px-4 pt-4">
          {actionsMenu.map((item) => {
            return (
              <li
                key={item}
                className="cursor-pointer relative"
                onClick={() => onClickActionMenu(item)}
              >
                <RenderIcon name={item} className="!w-4 !h-4" />
                {item === 'cart' && (
                  <div className="w-4 h-4 rounded-full bg-primary text-white font-medium text-[10px] flex items-center justify-center absolute -top-2 -right-3">
                    2
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/** Search */}
      <div className="fixed top-0 right-0 left-0 bottom-0 w-full h-full bg-white z-[1]">
        <div className="flex items-center justify-center px-8 py-6 border-b border-gray-100 relative">
          <p className="text-lg font-medium">{t('search_products')}</p>
          <div className="absolute top-1/2 right-8 -translate-y-1/2">
            <RenderIcon name="close" className="text-secondary opacity-50" />
          </div>
        </div>
      </div>
    </div>
  );
}
