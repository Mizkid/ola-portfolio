import React from 'react'
import { Section2 } from '../components/Section2'
import styled from 'styled-components';

const jobData = [
    {
        companyName: "Learning about Programing.",
        date: "05 Jan 2022",
        position: "Computer , Literacy",
        description: "I started my learning after secondary school year 2022, i love been a computer programmer and a software developer, then this how my journey been a webpage/sofware developer.",
    },
    {
        companyName: "Creating logo perfect in Afri-Tech",
        date: "17 Mar 2022",
        position: "Afri-Tech , Logo Design",
        description: "This was about creating my first Logo in my work place @ Afri-Tech, It was very exicting then, creating something meaningful on my third months.",
    },
    {
        companyName: "Designing webpage using HTML/CSS",
        date: "05 August 2022",
         position: "Learning , Creative",
        description: "This was when i read about HTML/CSS in Ws3School and started using the basics to create a self webpage, trying to be a developer and that with the help of a senior developer.",
    },
    {
        companyName: "Les Gilles Limited",
        date: "05 July 2022",
        position: "Troubleshooting",
        description: "Assited in managing inventory of computer hardware, peripherals, and sofware lincenses and also updating records to ensure accurate asset tracking and procurement planning."},
    {
        companyName: "Les Gilles Limited",
        date: "15 September 2022",
        position: "Technical Support",
        description: "Providing technical support to users addressing inquiries, troubleshooting hardware and sofware issues."},
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