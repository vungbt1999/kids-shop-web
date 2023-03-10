import { RenderIcon } from '@/components/icons';
import React from 'react';
import { Controller } from 'react-hook-form';

export type InputProps = {
  placeholder?: string;
  showSearch?: boolean;
  showError?: boolean;
  control?: any;

  onChange?: (value: string) => void;
  onSearch?: () => void;
};

export default function Input({
  placeholder,
  showSearch,
  showError,
  control,
  onChange,
  onSearch
}: InputProps) {
  return (
    <div>
      <div className="flex">
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              onChange={(e) => onChange && onChange(e.target.value)}
              type="text"
              placeholder={placeholder}
            />
          )}
        />
        {onSearch && (
          <div onClick={onSearch}>
            <RenderIcon name="search" />
          </div>
        )}
      </div>
      <p></p>
    </div>
  );
}
function useForm(arg0: { defaultValues: { firstName: string; select: {} } }): {
  control: any;
  handleSubmit: any;
} {
  throw new Error('Function not implemented.');
}
