import React from 'react'
import { Section2 } from '../components/Section2'
import styled from 'styled-components';

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
    {
        companyName: "Designing webpage using HTML/CSS",
        date: "05 August 2022",
        position: "Learning , Creative",
        description: "This was when i read about HTML/CSS in Ws3School and started using the basics to create a self webpage, trying to be a developer and that with the help of a senior developer i'm been creative.",
    },
    {
        companyName: "Upgrading with Javascript",
        date: "25 Octomber 2022",
        position: "Calculating , Updating",
        description: "After been able to use CSS i try more harder in learning Javascript, and was able to update my job using Javascript in calculating and trying some command more advance, and that helps making my webpage look more creative.",
    },
    {
        companyName: "Creating website with React",
        date: "22 Febuary 2023",
        position: "Creating a Webpage",
        description: "Designing a webpage with React and it was quite little challenging but i can be boast of it now showing to the world my very first webpage built using React and Javascript and now becoming a junior developer.",
    },
];

export default function WorksView() {
    return (
        <>
            <Exp>My work Experiences.</Exp>
            <div>
                <Section2 isExperience sectionData={jobData} />
            </div>
        </>

    )
}

const Exp = styled.h1`
color: green;
font: 20px bold;
font-weight: 400px;
align-items: left;
`;