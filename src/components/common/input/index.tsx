import { RenderIcon } from '@/components/icons';
import React from 'react';
import { Controller } from 'react-hook-form';
import clsx from 'clsx';

export type InputProps = {
  placeholder?: any;
  showSearch?: boolean;
  control?: any;
  name: string;
  className?: string;
};

export default function Input({ placeholder, showSearch, name, control, className }: InputProps) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true }}
      render={({ field, formState: { errors } }) => {
        const errorField: any = errors;
        const errorMss = errorField[`${name}`]?.message;

        return (
          <div className={className}>
            <div className="flex items-center relative">
              <input
                {...field}
                type="text"
                placeholder={placeholder}
                className={clsx(
                  'outline-none py-3 pl-6 pr-16 text-base border-gray-100 border focus:border-gray-900 transition-all w-full',
                  {
                    '!border-danger': errorMss && errorMss.length > 0
                  }
                )}
              />
              {showSearch && (
                <button type="submit" className="absolute right-6 top-1/2 -translate-y-1/2">
                  <RenderIcon name="search" className="!w-4" />
                </button>
              )}
            </div>
            <p className="text-danger">{errorMss}</p>
          </div>
        );
      }}
    />
  );
}
