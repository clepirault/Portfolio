import type { NextPage } from 'next';
import ContactForm from '../components/form/ContactForm';
import MainLayout from '../components/layout/MainLayout';
import PageTitle from '../components/title/PageTitle';
import { constants } from '../utils/constants/constants';

const Contact: NextPage = () => {
  return (
    <MainLayout>
      <div className='mb-20'>
        <PageTitle>{constants.pages.contact}</PageTitle>
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
