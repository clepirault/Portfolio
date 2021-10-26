import { FC, ReactNode } from 'react';
import { RiCloseLine } from 'react-icons/ri';

type Props = {
  children: ReactNode;
  onClick: (e: any) => void;
  value?: string;
  type: 'button' | 'submit';
  variant?: 'filter' | 'selectedFilter';
};

const FilterButton: FC<Props> = (props) => {
  const { children, onClick, type, value, variant } = props;
  const filters =
    'inline-flex items-center border-none bg-[#b9aa95] bg-opacity-60 rounded-2xl px-2 text-white';
  const selectedFilter =
    'inline-flex items-center border-none bg-[#b9aa95] bg-opacity-20 rounded-2xl px-2 text-white';
  return (
    <span className={variant === 'filter' ? filters : selectedFilter}>
      <button
        type={type}
        onClick={onClick}
        className='tracking-widest flex items-center text-white'
        value={value}
      >
        {children}
        {variant === 'selectedFilter' && <RiCloseLine />}
      </button>
    </span>
  );
};

export default FilterButton;
