import { FC, ReactNode } from 'react';

type Props = {
  title: string;
  content: string;
};

const AboutContent: FC<Props> = (props) => {
  const { title, content } = props;
  return (
    <div>
      <h3 className='mb-8'>{title}</h3>
      <p className='break-words text-justify font-description text-gray-400 leading-loose'>
        {content}
      </p>
    </div>
  );
};

export default AboutContent;
