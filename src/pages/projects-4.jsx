import React from "react";
import Layouts from "@layouts/Layouts";
import { ProjectsData } from "../data/projects/projectsData";
import PageBanner from "@components/PageBanner";
import ProjectsGrid from "@components/ProjectsGrid";

const projects = (props) => {
  return (
    <Layouts fullWidth>
      <PageBanner
        pageTitle={"Projetos"}
        breadTitle={"Projects"}
        align={"center"}
      />

      <ProjectsGrid projects={ProjectsData} columns={1} />
    </Layouts>
  );
};
export default projects;
