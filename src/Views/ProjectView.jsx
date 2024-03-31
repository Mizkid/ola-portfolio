import React from 'react'
import { Section3 } from '../components/Section3'

const sectionData = [
    {
        imageUrl: "/VsCode.png",
        heading: "Markup",
        year: "2022",
        works: "HTML | HTML5 ",
        paragraph: "This was a project given to me at first after learning about Markup, which basically is about HTML (Hyper Text Markup Language)",
    },
    {
        imageUrl: "/Website.png",
        heading: "Troubleshooting | Training",
        year: "2022",
        works: "Technical Assistant ",
        paragraph: "This was me providing a technical support to users addressing inquiries, troubleshooting hardware and sofware issues. And same time conducting training sessions and workshops in educating users on basic computer skills, software usage and more.",
    },
    {
        imageUrl: "/Javascript.png",
        heading: "Languages",
        year: "2022",
        works: "Javascript | Typescript | C# | Java ",
        paragraph: "This was my first time trying to create something using all different kind of languages in building a webpage and had a great time while on this project. ",
    },
    {
        imageUrl: "/react-icons.png",
        heading: "Updating on React",
        year: "2023",
        works: "React-Dom",
        paragraph: "Updating my webpage trying to use React and React-Router-Dom and this was quite advancing and challenging using typescript/javascript and learning on NPM, NODE, and YARN. ",
    },
    {
        imageUrl: "/Webpage.png",
        heading: "Development - Njoin ",
        year: "2023",
        works: "Frontend",
        paragraph: "Developement and continuous integration of the company's existing products using Javascript, Typescript, and React."},
];

export default function ProjectView() {
    return (
        <Section3 sectionData={sectionData} />
    )
}
