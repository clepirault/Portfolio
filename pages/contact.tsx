import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import PageTitle from '../components/title/PageTitle';
import { constants } from '../utils/constants/constants';

const Contact: NextPage = () => {
  return (
    <MainLayout>
      <PageTitle>{constants.pages.contact}</PageTitle>
    </MainLayout>
  );
};

export default Contact;
