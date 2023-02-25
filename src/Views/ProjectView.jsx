import React from 'react'
import { Section3 } from '../components/Section3'

const sectionData = [
    {
        imageUrl: "/VsCode.png",
        heading: "Designing a Website",
        year: "2022",
        works: "Sketching",
        paragraph: "This about my first text in building a webpage using CSS and Javascript, trying to create a site where people could get my info and know much about me. i created this arond september year 2022.",
    },
    {
        imageUrl: "/Potrait.png",
        heading: "Vibrant Potrait of 2021",
        year: "2021",
        works: "Potrait",
        paragraph: "This was only created to be my Potrait in illustrating my works/designs in building my webpage in year 2021, before i could learn on how to use Javascript and CSS in year 2022.",
    },
    {
        imageUrl: "/Sargitarius.png",
        heading: "My Days in Creating my website",
        year: "2023",
        works: "Typography",
        paragraph: "Here comes my days in designing my first website, it was all along reading online about been a Developer, i read about it for like 2 months and then i started my journey been a webpage/software developer and here i am today building my first webpage.",
    },
    {
        imageUrl: "/Javascript.png",
        heading: "Developing Webpage",
        year: "2022",
        works: "Worksheet",
        paragraph: "This was the project given to me after learning more about Javascript in building up and updating my webpage using Javascript and it was quite lite and more advanced to CSS and pure HTML.",
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
        heading: "Development and Creativity ",
        year: "2023",
        works: "Creating Webpage",
        paragraph: "This is all about showing out my project and success in building up my webpage, it was all quite challenging but interesting and using CSS, Javascript and React.",
    },
];

export default function ProjectView() {
    return (
        <Section3 sectionData={sectionData} />
    )
}
