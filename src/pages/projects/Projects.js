import React from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce website',
      client: 'NR Kids',
      link: 'https://github.com/vamshidhar644/nrkids',
      image: 'nrkids.jpg',
      desc: 'Developed a solo E-commerce website using MERN stack in 6 months. Improved site architecture, reducing load times. Seamlessly integrated secure payment gateways. Enhanced UI/UX, resulting in higher conversions and lower mobile bounce rates. Achieved a high uptime rate of 99.99%. Increased organic traffic, boosting online visibility for NRKids Clothing E-Commerce.',
    },
    {
      title: 'Lost & Found web portal',
      client: 'VIT-AP',
      link: 'https://github.com/vamshidhar644/Lost_and_Found',
      image: 'lostfound.jpg',
      desc: "I'm currently developing an intuitive application to streamline lost and found management for 3500+ university students. It simplifies item reporting, reduces resolution time, and lowers unclaimed items, promoting a cleaner campus. Real-time updates enhance user satisfaction, and analytics provide valuable insights for reducing lost item incidents.",
    },
  ];
  return (
    <div className="projects__parent">
      <center>
        <h2>PROJECTS</h2>
      </center>

      <hr />
      <div className="projects__container">
        {projects.map((project, i) => {
          return (
            <div className="project__box" key={i}>
              <div className="project_box__1">
                <div className="project__header">
                  <h2>{project.title}</h2>
                  <h3>{project.client}</h3>
                  <Link to={project.link}>Link</Link>
                </div>

                <p>{project.desc}</p>
              </div>
              <div className="project_box__2">
                <img src={process.env.PUBLIC_URL + '/assets/' +project.image} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
