import React from 'react'
import { Section1 } from "../components/Section1"
import { Section2 } from "../components/Section2"
import { Section3 } from "../components/Section3"

const jobData = [
  {
    companyName: "Les Gilles Limited",
    date: "15 September 2022",
    position: "Technical Support",
    description: "Providing technical support to users addressing inquiries, troubleshooting hardware and sofware issues. And conducting training sessions and workshops to educate users on basic skills."
},

{
    companyName: "Njoin",
    date: "05 December 2022",
     position: "Junior Frontend Developer",
    description: "Actively engage in continous learning and skills developement, staying updated on emerging technologies, programming languages, and sofware developement methodologies."
},
];

const sectionData = [
  {
    imageUrl: "/VsCode.png",
    heading: "Markup",
    year: "2022",
    works: "HTML | HTML5 ",
    paragraph: "This was a project given to me at first after learning about Markup, which basically is about HTML (Hyper Text Markup Language)",
  },
  
  {
    imageUrl: "/Javascript.png",
    heading: "Languages",
    year: "2022",
    works: "Javascript | Typescript | C# | Java ",
    paragraph: "This was my first time trying to create something using all different kind of languages in building a webpage and had a great time while on this project. ",
  },
];

export default function DasbordView() {
  return (
    <>
      <Section1 />
      <Section2 sectionData={jobData} />
      <Section3 sectionData={sectionData} />
    </>
  )
}
