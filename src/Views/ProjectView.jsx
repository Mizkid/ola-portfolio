import React from 'react'
import { Section3 } from '../components/Section3'

const sectionData = [
    {
        imageUrl: "/VsCode.png",
        heading: "Designing a Website",
        year: "2022",
        works: "Sketching",
        paragraph: "This about my first time in building a webpage using HTML, CSS and Javascript, trying to create a site where people could get my info and know much about me."
    },
    {
        imageUrl: "/Webpage.png",
        heading: "Troubleshooting | Training",
        year: "2022",
        works: "Technical Assistant ",
        paragraph: "This was me providing a technical support to users addressing inquiries, troubleshooting hardware and sofware issues. And same time conducting training sessions and workshops in educating users on basic computer skills, software usage and more.",
    },
    {
        imageUrl: "/Sargitarius.png",
        heading: "My Days in Creating my website",
        year: "2022",
        works: "Typography",
        paragraph: "Here comes my days in designing my first website, it was all along reading online about been a Developer, i read about it for like 2 months and then i started my journey been a webpage/software developer and here i am today building my first webpage.",
    },
    {
        imageUrl: "/Javascript.png",
        heading: "Colaboration | Team",
        year: "2023",
        works: "Worksheet",
        paragraph: "Collaborated with the development team to design,  code, and test sofware applications,  ensuring adherence to coding standard."},
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
