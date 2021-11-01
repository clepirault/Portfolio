import { FC } from 'react';
import MainModal from '../modal/MainModal';
import { AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';
import AboutContent from './AboutContent';
import SkillsContent from './SkillsContent';

type Props = {
  image: any;
  content: string;
  closeModal: () => void;
  open: boolean;
  list: Array<any>;
  skills: Array<any>;
  title: string;
};

const OtherContent: FC<Props> = (props) => {
  const { image, content, closeModal, open, list, skills, title } = props;

  return (
    <MainModal open={open} closeDescription={closeModal}>
      <button onClick={closeModal} className='absolute top-0 right-0 text-2xl'>
        <AiOutlineClose />
      </button>
      <div className='flex flex-col content-center p-8 mb-12'>
        <div className='sm:p-12'>
          <AboutContent title={title} content={content} />
        </div>
        <div className='flex justify-center mt-12'>
          <Image
            src={image.url}
            alt={image.alt}
            quality={100}
            width='450'
            height='300'
          />
        </div>
        <div className='flex justify-center my-12'>
          <div className='sm:w-1/2 px-4'>
            <ul className='list-disc'>
              {list.map((item, index) => (
                <li key={index} className='mb-6'>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <SkillsContent skills={skills} />
      </div>
    </MainModal>
  );
};

export default OtherContent;
