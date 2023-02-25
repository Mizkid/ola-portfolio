import React from 'react'
import { Section1 } from "../components/Section1"
import { Section2 } from "../components/Section2"
import { Section3 } from "../components/Section3"

const jobData = [
  {
    companyName: "Learning about Programing.",
    date: "05 Jan 2015",
    position: "Computer , Literacy",
    description: "I started my learning after secondary school year 2014, i love been a computer programmer and a software developer, then this how my journey been a webpage/sofware developer.",
  },
  {
    companyName: "Creating logo perfect in Afri-Tech",
    date: "17 April 2015",
    position: "Afri-Tech , Logo Design",
    description: "This was about creating my first Logo in my work place @ Afri-Tech, It was very exicting then, creating something meaningful on my fourth months. And then graduated there in September 2015.",
  },
];

const sectionData = [
  {
    imageUrl: "/VsCode.png",
    heading: "Designing a Website",
    year: "2022",
    works: "Worksheet",
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
