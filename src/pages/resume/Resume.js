import React from 'react';
import './Resume.css';
import {
  SiReact,
  SiMongodb,
  SiJavascript,
  SiExpress,
  SiHtml5,
  SiGit,
  SiNpm,
  SiFirebase,
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { IoLogoNodejs } from 'react-icons/io';

const Resume = () => {
  const skills = [
    { icon: <SiMongodb />, name: 'MongoDB' },
    { icon: <SiExpress />, name: 'ExpressJs' },
    { icon: <SiReact />, name: 'ReactJs' },
    { icon: <IoLogoNodejs />, name: 'NodeJs' },
    { icon: <SiJavascript />, name: 'JavaScript' },
    { icon: <DiJava />, name: 'Java' },
    { icon: <SiHtml5 />, name: 'HTML' },
    { icon: <SiGit />, name: 'Git' },
    { icon: <SiNpm />, name: 'npm' },
    { icon: <SiFirebase />, name: 'Firebase' },
  ];

  return (
    <div className="resume__parent">
      <center>
        <h2>RESUME</h2>
      </center>

      <hr />
      <div className="education__section">
        <h4>Education</h4>
        <div className="section__body">
          <div className="section__info">
            <strong>Bachelor of Technology</strong>
            <h5>Computer Science and Technology</h5>
            <p>Vellore Institute of Technology, Amaravati, Andhra Pradesh</p>
            <p>CGPA: 8.97</p>
          </div>

          <div className="section__info">
            <strong>Intermediate</strong>
            <p>Akshara Junior College, Hyderabad</p>
            <p>Perc: 96.8%</p>
          </div>

          <div className="section__info">
            <strong>High School</strong>
            <p>Jawahar Navodaya Vidyalaya, Wargal</p>
            <p>Perc: 81.4%</p>
          </div>
        </div>
      </div>

      <hr />
      <div className="skills__section">
        <h4>Skills set</h4>
        <div className="skills__grid">
          {skills &&
            skills.map((skill, i) => {
              return (
                <div className="Skill__box" key={i}>
                  <span className="icon">{skill.icon}</span>
                  <span className="name">{skill.name}</span>
                </div>
              );
            })}
        </div>
      </div>

      <hr />
      <div className="certificate__section">
        <h4>Certificates & Letters</h4>
        <div className="section__body">
          <div className="section__info">
            <strong>Appreciation Letter</strong>
            <p>NR Kids E-Commerce Shopping website</p>
            <h5>Nischala Reddy Kids</h5>
          </div>

          <div className="section__info">
            <strong>MERN Fullstack Internship Program</strong>
            <p>Completion Certificate</p>
            <h5>Ethnus</h5>
          </div>

          <div className="section__info">
            <strong>MongoDB Node.js Developer Path</strong>
            <p>Completion Certificate</p>
            <h5>MongoDB</h5>
          </div>
        </div>
      </div>

      <div className="intern__section">
        <hr />
        <h4>Internship Trainings</h4>
        <div className="section__body">
          <div className="section__info">
            <strong>MERN Full Stack Internship Program</strong>
            <p>May 2023 - July 2023</p>
            <h5>Ethnus</h5>
          </div>

          <div className="section__info">
            <strong>Verzeo – Web Development with IBM</strong>
            <p>August 2022 - October 2022</p>
            <h5>Verzeo</h5>
          </div>
        </div>
      </div>

      <div className="accomplishment__section">
        <hr />
        <h4>Accomplishments</h4>
        <div className="section__body">
          <div className="section__info">
            <strong>Ranked 1st in Senior Vocabulary Bee Competition</strong>
            <p>North South Foundation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
