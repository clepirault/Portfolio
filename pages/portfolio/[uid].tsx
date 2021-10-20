import Prismic from 'prismic-javascript';
import { client } from '../../prismic-config';
import type { NextPage } from 'next';
import ProjectDescription from '../../components/project/ProjectDescription';
import { useState } from 'react';
import { useRouter } from 'next/router';
import MainLayout from '../../components/layout/MainLayout';

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
    <MainLayout>
      <ProjectDescription
        open={open}
        closeDescription={closeDescription}
        title={project.title[0].text}
        description={project.description1[0].text}
        list={project.list}
        contributions={project.description2[0].text}
        stack={project.stack}
        image={project.image}
        video={project.video.url}
        github={project.github.url}
        website={project.website.url}
      />
    </MainLayout>
  );
};

export async function getStaticProps(context: any) {
  const { params } = context;

  const projectUid = params.uid;

  const res = await client.query(
    Prismic.Predicates.at('document.type', 'project')
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
    Prismic.Predicates.at('document.type', 'project')
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
