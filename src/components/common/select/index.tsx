import React from 'react';
import { Controller } from 'react-hook-form';
import clsx from 'clsx';

export type SelectProps = {
  placeholder?: any;
  defaultValue?: string;
  control?: any;
  name: string;
  options: { title: string; value: string }[];
  className?: string;
  size?: 'sm' | 'md';
};

export default function Select({
  placeholder,
  defaultValue,
  control,
  name,
  options,
  className,
  size = 'md'
}: SelectProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, formState: { errors } }) => {
        const errorField: any = errors;
        const errorMss = errorField[`${name}`]?.message;

        return (
          <div className={className}>
            <select
              {...field}
              placeholder={placeholder}
              name="cars"
              id="cars"
              className={clsx(
                'outline-none pr-16 text-base border-gray-100 border focus:border-gray-900 transition-all w-full',
                {
                  '!border-danger': errorMss && errorMss.length > 0,
                  'select-size-md py-3 pl-[1.3rem]': size === 'md',
                  'select-size-sm py-1 pl-2': size === 'sm'
                }
              )}
            >
              <option value={defaultValue} className="capitalize">
                {placeholder}
              </option>
              {options.map((item, index) => {
                return (
                  <option key={index} value={item.value}>
                    {item.title}
                  </option>
                );
              })}
            </select>
            <p className="text-danger">{errorMss}</p>
          </div>
        );
      }}
    />
  );
}
