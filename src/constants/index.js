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

export const Education = [
  {
    qual: 'Graduation - B.Tech',
    institute: 'Vellore Institute of Technology, Amaravati, Andhra Pradesh',
    during: '2020 - 2024',
  },
  {
    qual: 'Intermediate',
    institute: 'Akshara Junior College, Hyderabad',
    during: '2018 - 2020',
  },
  {
    qual: 'High School',
    institute: 'Jawahar Navodaya Vidyalaya, Wargal',
    during: '2013 - 2018',
  },
];

export const skills = [
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

export const certificates = [
  {
    title: 'Appreciation Letter',
    desc: 'NR Kids E-Commerce Shopping website',
    org: 'Nischala Reddy Kids',
  },
  {
    title: 'MERN Fullstack Internship Program',
    desc: 'Completion Certificate',
    org: 'Ethnus',
  },
  {
    title: 'MongoDB Node.js Developer Path',
    desc: 'Completion Certificate',
    org: 'MongoDB',
  },
];
