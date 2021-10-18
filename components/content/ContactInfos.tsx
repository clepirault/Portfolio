import { FC } from 'react';
import { constants } from '../../utils/constants/constants';
import { FaMapMarkerAlt, FaMobileAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { BiWorld } from 'react-icons/bi';

const ContactInfo: FC = () => {
  const row = 'flex items-center text-lg mb-2';
  const icon = 'mr-4';

  return (
    <div>
      <span className={row}>
        <FaMapMarkerAlt className={icon} />
        {constants.contactInfos.location}
      </span>
      <span className={row}>
        <BiWorld className={icon} />
        {constants.contactInfos.remote}
      </span>
      <span className={row}>
        <GrMail className={icon} />
        {constants.contactInfos.email}
      </span>
      <span className={row}>
        <FaMobileAlt className={icon} />
        {constants.contactInfos.mobile}
      </span>
    </div>
  );
};

export default ContactInfo;
