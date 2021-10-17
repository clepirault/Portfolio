import { FC, useState } from 'react';
import MainModal from '../modal/MainModal';
import { useRouter } from 'next/router';
import { AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';
import AboutContent from './AboutContent';

type Props = {
  illustration: any;
  content: string;
};

const OtherContent: FC<Props> = (props) => {
  const { illustration, content } = props;
  const [open, setOpen] = useState(true);

  const router = useRouter();

  const closeDescription = () => {
    setOpen(false);
    router.push('/about');
  };
  return (
    <MainModal open={open} closeDescription={closeDescription}>
      <button
        onClick={closeDescription}
        className='absolute top-0 right-0 text-2xl'
      >
        <AiOutlineClose />
      </button>
      <div className='sm:grid sm:grid-cols-2 p-8'>
        <AboutContent title='JavaScript & React Developer' content={content} />
        <Image
          src={illustration}
          alt='react developer'
          quality={100}
          width={450}
          height={300}
        />
      </div>
      <div className='sm:flex sm:justify-center my-12 p-8'>
        <ul>
          <li>I code in TypeScript</li>
          <li>I prefer backend development</li>
          <li>tree</li>
          <li>four</li>
        </ul>
      </div>
      <div className='sm:grid sm:grid-cols-2 p-8'>
        <Image
          src={illustration}
          alt='react developer'
          quality={100}
          width={450}
          height={300}
        />
        <AboutContent title='How I imagine my career' content={content} />
      </div>
    </MainModal>
  );
};

export default OtherContent;
