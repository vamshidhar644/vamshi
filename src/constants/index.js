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

export const projects = [
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
    image: 'lostfound.png',
    desc: "I'm currently developing an intuitive application to streamline lost and found management for 3500+ university students. It simplifies item reporting, reduces resolution time, and lowers unclaimed items, promoting a cleaner campus. Real-time updates enhance user satisfaction, and analytics provide valuable insights for reducing lost item incidents.",
  },
  {
    title: 'CSV to GoogleSheets Importer',
    link: 'https://github.com/vamshidhar644/CSV_Importer',
    client: 'Frontend - React.js',
    image: 'csv.png',
    desc: 'Introducing the CSV Importer for Google Sheets: A game-changer for data analysts. With drag-and-drop ease, it imports CSV files, lets you choose columns, and even apply filters before import. Say goodbye to tedious data structuring and hello to efficient insights extraction. Boost your productivity and streamline your workflow with our user-friendly tool.',
  },
  {
    title: 'Library Management',
    link: 'https://github.com/vamshidhar644/library_management',
    client: 'Backend - Node, Express',
    image: 'library.png',
    desc: 'Created a secure library management system with user registration, admin access, and book management using NodeJS and MySQL. Developed APIs for adding books, searching, checking availability, and booking with authentication. Ensured admin endpoints are protected with a secret key. System is tested, documented, and deployed for college library operations.',
  },
  {
    title: 'Quizzy App',
    link: 'https://github.com/vamshidhar644/quizzy-mernstack',
    client: 'MERN Stack',
    image: 'quizzy.jpg',
    desc: "As the team lead for Quizzy, I spearheaded the development of our MERN stack quiz app, and we executed it excellently. The project was a resounding success, reflecting our team's dedication and delivering a high-quality product. I'm incredibly proud of our achievement.",
  },
];
