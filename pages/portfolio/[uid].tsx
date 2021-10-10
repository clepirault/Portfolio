import Prismic from 'prismic-javascript';
import { client } from '../../prismic-config';
import type { NextPage } from 'next';
import ProjectDescription from '../../components/project/ProjectDescription';
import { useState } from 'react';
import Layout from '../../components/layout/Layout';
import { useRouter } from 'next/router';

type Props = {
  project: any;
};

const Project: NextPage<Props> = (props) => {
  const { project } = props;
  const [open, setOpen] = useState(true);

  const router = useRouter();

  const closeDescription = () => {
    setOpen(false);
    router.push('/portfolio');
  };

  return (
    <Layout>
      <ProjectDescription
        open={open}
        closeDescription={closeDescription}
        title={project.title[0].text}
      />
    </Layout>
  );
};

export async function getStaticProps(context: any) {
  const { params } = context;

  const projectUid = await params.uid;

  const res = await client.query(
    Prismic.Predicates.at('document.type', 'project-test')
  );

  const projectDetail = await res.results.find(
    (project) => projectUid === project.uid
  );

  const project = await projectDetail?.data;

  return {
    props: {
      project,
    },
  };
}

export async function getStaticPaths() {
  const res = await client.query(
    Prismic.Predicates.at('document.type', 'project-test')
  );

  const paths = await res.results.map((project) => ({
    params: {
      uid: project.uid,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default Project;
