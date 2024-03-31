import React from 'react'
import { Section2 } from '../components/Section2'
import styled from 'styled-components';

const jobData = [
    {
        companyName: "Les Gilles Limited",
        date: "05 July 2022",
        position: "Technician",
        description: "Assited in managing inventory of computer hardware, peripherals, and sofware lincenses and also updating records to ensure accurate asset tracking and procurement planning."
    },

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

    {
        companyName: "Njoin",
        date: "17 March 2023",
         position: " Frontend Developer",
        description: "Development and continous integration of the company's existing products using Javascript, Typescript and React."
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