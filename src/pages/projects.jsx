import { useState } from 'react';

import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import ProjectsGrid from "@components/ProjectsGrid";


import { getSortedProjectsData } from "@library/projects";

import Link from "next/link";
import { ProjectsData } from '../data/projects/projectsData';

const Projects = (props) => {
  return (
    <Layouts 
      rightPanelBackground={"/img/person/bg-4.jpg"}
      rightPanelImg={"/img/person/5.png"}
    >
      <PageBanner pageTitle={"Projetos"} breadTitle={"Projects"} align={"center"} />

      <ProjectsGrid projects={ProjectsData} columns={1} />
      
    </Layouts>
  );
};
export default Projects;

export async function getStaticProps() {
  const allProjects = getSortedProjectsData();

  return {
    props: {
      projects: allProjects
    }
  }
}