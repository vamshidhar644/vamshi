import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../../constants';

const Projects = () => {
  return (
    <div className="projects__parent gap-8 px-48 py-8">
      <center>
        <h2 className="font-bold text-2xl my-2">PROJECTS</h2>
      </center>

      <hr />
      <div className="d-flex flex-column gap-8">
        {projects.map((project, i) => {
          return (
            <div
              className="project__box grid grid-cols-[7fr_5fr] min-h-[20rem] shadow-[0px_0px_9px_1px_var(--primary-bg)]"
              key={i}
            >
              <div className="project_box__1 d-flex justify-content-around flex-column">
                <div className="px-3 border-l-[color:var(--primary-bg)] mx-0 my-[1.6rem] border-l-[12px] border-solid">
                  <h2 className="m-0 text-[color:var(--secondary-bg)] text-2xl font-medium text-[color:var(--primary-bg)]">
                    {project.title}
                  </h2>
                  <h3 className="m-0 font-semibold text-xl text-[color:var(--secondary-bg)]">
                    {project.client}
                  </h3>
                  <Link
                    to={project.link}
                    className="text-[color:var(--primary-bg)] tracking-[1px]"
                  >
                    Link
                  </Link>
                </div>

                <p className="px-5 text-center mb-3">{project.desc}</p>
              </div>
              <img
                src={process.env.PUBLIC_URL + '/assets/' + project.image}
                alt=""
                className="h-100 w-100"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
