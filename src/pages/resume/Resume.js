import React from 'react';
import './Resume.css';
import { skills, certificates } from '../../constants';

const Resume = () => {
  return (
    <div className="resume__parent px-80 py-8">
      <center>
        <h2 className="font-bold text-2xl my-2">RESUME</h2>
      </center>

      <hr />
      <div className="skills__section">
        <h4 className="font-bold my-3 text-xl">Skills set</h4>
        <div className="skills__grid d-flex flex-wrap justify-content-center gap-[1.4rem] mb-3">
          {skills &&
            skills.map((skill, i) => {
              return (
                <div className="Skill__box" key={i}>
                  <span className="icon text-[1.3rem]">{skill.icon}</span>
                  <span className="name">{skill.name}</span>
                </div>
              );
            })}
        </div>
      </div>

      <hr />
      <div className="certificate__section">
        <h4 className="font-bold my-3 text-xl">Certificates & Letters</h4>
        <div className="section__body">
          {certificates.map((data, i) => {
            return (
              <div className="section__info mb-3">
                <strong className="text-[1.1rem] font-semibold">
                  {data.title}
                </strong>
                <p>{data.desc}</p>
                <h5>{data.org}</h5>
              </div>
            );
          })}
        </div>
      </div>

      <div className="intern__section">
        <hr />
        <h4 className="font-bold my-3 text-xl">Internship Trainings</h4>
        <div className="section__body">
          <div className="section__info">
            <strong className="text-[1.1rem] font-semibold">
              MERN Full Stack Internship Program
            </strong>
            <p>May 2023 - July 2023</p>
            <h5>Ethnus</h5>
          </div>
        </div>
      </div>

      <div className="accomplishment__section">
        <hr />
        <h4 className="font-bold my-3 text-xl">Accomplishments</h4>
        <div className="section__body">
          <div className="section__info">
            <strong className="text-[1.1rem] font-semibold">
              Ranked 1st in Senior Vocabulary Bee Competition
            </strong>
            <p>North South Foundation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
