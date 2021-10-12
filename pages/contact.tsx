import type { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import PageTitle from '../components/title/PageTitle';
import { constants } from '../utils/constants/constants';

const Contact: NextPage = () => {
  return (
    <div>
      <Layout>
        <PageTitle>{constants.pages.contact}</PageTitle>
      </Layout>
    </div>
  );
};

export default Contact;
