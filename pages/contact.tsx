import type { NextPage } from 'next';
import ContactForm from '../components/form/ContactForm';
import MainLayout from '../components/layout/MainLayout';
import PageTitle from '../components/title/PageTitle';
import { constants } from '../utils/constants/constants';
import ContactInfo from '../components/content/ContactInfos';

const Contact: NextPage = () => {
  return (
    <MainLayout>
      <div className='mb-20'>
        <PageTitle>{constants.pages.contact}</PageTitle>
      </div>
      <div className='flex flex-col items-center mb-20 leading-loose'>
        <ContactInfo />
      </div>
      <ContactForm
        firstname={constants.contactForm.firstname}
        lastname={constants.contactForm.lastname}
        email={constants.contactForm.email}
        subject={constants.contactForm.subject}
        message={constants.contactForm.message}
      />
    </MainLayout>
  );
};

export default Contact;
