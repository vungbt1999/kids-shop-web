import React from 'react';
import { Controller } from 'react-hook-form';
import clsx from 'clsx';

export type SelectProps = {
  placeholder?: any;
  defaultValue?: string;
  control?: any;
  name: string;
  options: { title: string; value: string }[];
};

export default function Select({ placeholder, defaultValue, control, name, options }: SelectProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, formState: { errors } }) => {
        const errorField: any = errors;
        const errorMss = errorField[`${name}`]?.message;

        return (
          <div>
            <select
              {...field}
              placeholder={placeholder}
              name="cars"
              id="cars"
              className={clsx(
                'outline-none py-3 pl-[1.3rem] pr-16 text-base border-gray-100 border focus:border-gray-900 transition-all w-full',
                {
                  '!border-danger': errorMss && errorMss.length > 0
                }
              )}
            >
              <option value={defaultValue}>{placeholder}</option>
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
