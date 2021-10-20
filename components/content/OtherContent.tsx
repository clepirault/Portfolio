import { FC } from 'react';
import MainModal from '../modal/MainModal';
import { AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';
import AboutContent from './AboutContent';

type Props = {
  image: any;
  content: string;
  closeModal: () => void;
  open: boolean;
  list: Array<any>;
};

const OtherContent: FC<Props> = (props) => {
  const { image, content, closeModal, open, list } = props;

  return (
    <MainModal open={open} closeDescription={closeModal}>
      <button onClick={closeModal} className='absolute top-0 right-0 text-2xl'>
        <AiOutlineClose />
      </button>
      <div className='flex flex-col content-center p-8'>
        <AboutContent title='React Developer' content={content} />
        <div className='flex justify-center mt-12'>
          <Image
            src={image}
            alt='react developer'
            quality={100}
            width='450'
            height='300'
          />
        </div>
        <div className='flex justify-center my-12'>
          <ul className='list-disc leading-loose'>
            {list.map((item, index) => (
              <li key={index}>{item.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </MainModal>
  );
};

export default OtherContent;
