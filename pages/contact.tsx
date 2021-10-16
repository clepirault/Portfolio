import type { NextPage } from 'next';
import ContactForm from '../components/form/ContactForm';
import MainLayout from '../components/layout/MainLayout';
import PageTitle from '../components/title/PageTitle';
import { constants } from '../utils/constants/constants';

const Contact: NextPage = () => {
  return (
    <MainLayout>
      <PageTitle>{constants.pages.contact}</PageTitle>
      <ContactForm />
    </MainLayout>
  );
};

export default Contact;
