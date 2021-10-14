import { FC, useState } from 'react';
import MainModal from '../modal/MainModal';
import { useRouter } from 'next/router';
import { AiOutlineClose } from 'react-icons/ai';

type Props = {
  //
};

const SkillsContent: FC<Props> = () => {
  const [open, setOpen] = useState(true);

  const router = useRouter();

  const closeDescription = () => {
    setOpen(false);
    router.push('/about');
  };
  return (
    <MainModal open={open} closeDescription={closeDescription}>
      <button onClick={closeDescription} className='absolute top-0 right-0'>
        <AiOutlineClose />
      </button>
      <h3>Skills</h3>
    </MainModal>
  );
};

export default SkillsContent;
