// все данные
// Logo images
import logogradient from "./assets/ui/images.jpg";// назад 
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/651787281 (1).jpeg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import axios from "./assets/techstack/axios.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
// Porject Images
import projectImage1 from "./assets/projects/durger.jpg";
import projectImage2 from "./assets/projects/social.jpg";
import projectImage3 from "./assets/projects/React-Pizza.png";
import projectImage4 from "./assets/projects/Axios-user-registration.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// личные данные 
export const personalDetails = {
  name: "Evgenia Starovoitova",
  tagline: "I'm a Front-End Developer React JS",
  img: profile,
  about: `Моя Главная задача фронт-энд разработчика — сделать максимально удобным взаимодействие пользователей с сайтом или веб-приложением`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/%D0%B5%D0%B2%D0%B3%D0%B5%D0%BD%D0%B8%D1%8F-%D1%81%D1%82%D0%B0%D1%80%D0%B0%D0%B2%D0%BE%D0%B9%D1%82%D0%BE%D0%B2%D0%B0-0a2108232/",
  github: "https://github.com/Evgeniya1307",
};

// опыт работы
export const workDetails = [
  {
    Position: "Frontend Web Developer",
    Company: `Индивидуальное предпринимательство / частная практика / фриланс`,
    Location: "Georgia",
    Type: "Full Time",
    Duration: "Des 2021 - Feb 2021",
  },
  {
    Position: "Frontend Web Developer React",
    Company: `Pet Projects`,
    Location: "Georgia",
    Type: "Full Time",
    Duration: "Feb 2021 - Jul 2021",
  },
];

// курсы
export const eduDetails = [
  {
    Position: "Frontend Development React",
    Company: "Udemy, YouTube, Google, Medium",
    Location: "Online",
    Type: "Full Time",
    Duration: "Jan 2022 - Present",
  },
  {
    Position: "Inzhener-stroitel",
    Company: `Polotsk State University`,
    Location: "Novopolotsk",
    Type: "na vremya uchoby",
    Duration: "Aug 2012 - Aug 2018",
  },
];

// Tech Stack 
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  vscode: vscode,
  npm: npm,
  git: git,
  github: github,
  axios: axios,

};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Project title 1",
    image: projectImage1,
    description: `This is an example of a project description for a burger restaurant with a separate entrance.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://react-001-starter-files-2021-main.vercel.app/",
    githubLink: "https://github.com/Evgeniya1307"
  },
  {
    title: "Project title 2",
    image: projectImage2,
    description: `This is an example of a project description social network draw requests`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://github.com/Evgeniya1307/Social-network",
    githubLink: "https://github.com/Evgeniya1307",
  },
  {
    title: "Project title 3",
    image: projectImage3,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript, TS",
    previewLink: "https://github.com/Evgeniya1307/-React-Pizza-",
    githubLink: "https://github.com/Evgeniya1307",
  },
  {
    title: "Project title 4",
    image: projectImage4,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript,Axios",
    previewLink: "https://github.com/Evgeniya1307/Axios-user-registration-and-authentication-form",
    githubLink: "https://github.com/Evgeniya1307",
  },
  {
    title: "Project title 5",
    image: projectImage5,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project title 6",
    image: projectImage6,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "evgeniya_leonova_00@mail.ru",
  phone: "+995574725070",
};
