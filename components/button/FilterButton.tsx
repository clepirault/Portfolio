import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onClick: (e: any) => void;
  value: string;
  type: 'button' | 'submit';
};

const FilterButton: FC<Props> = (props) => {
  const { children, onClick, type, value } = props;
  return (
    <span className='inline-flex items-center border-none bg-[#b9aa95] bg-opacity-60 rounded-2xl px-2 text-white'>
      <button
        type={type}
        onClick={onClick}
        className='tracking-widest'
        value={value}
      >
        {children}
      </button>
    </span>
  );
};

export default FilterButton;
