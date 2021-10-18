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
      <div className='sm:grid sm:grid-cols-2 p-8 items-center'>
        <AboutContent title='React Developer' content={content} />
        <Image
          src={image}
          alt='react developer'
          quality={100}
          width={450}
          height={300}
        />
      </div>
      <div className='sm:flex sm:justify-center my-12 p-8'>
        <ul className='list-disc leading-loose'>
          <li>{list[0].text}</li>
          <li>{list[1].text}</li>
          <li>{list[2].text}</li>
        </ul>
      </div>
    </MainModal>
  );
};

export default OtherContent;
