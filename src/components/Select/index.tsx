import { useRef } from 'react';
import { ChevronDown } from '../../icons';

export interface SelectProps<T> {
  data: T[],
  displayKey: keyof T;
  valueKey: keyof T;
  label: string;
  onSelect: (value: T) => void;
}

const Select = <T,>({ data, displayKey, valueKey, label, onSelect }: SelectProps<T>) => {
  const componentRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={componentRef} className='w-full'>
      <div className='flex flex-column mt-2'>
        <label>{label}</label>

        <div className="relative">
          <div ref={triggerRef}></div>
          <div><ChevronDown height={24} width={24} stroke={'#000'} fill={'#000'} /></div>
        </div>

        <div ref={listRef}></div>
      </div>
    </div>
  );
};

export default Select;