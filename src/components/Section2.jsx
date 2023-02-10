import React from 'react'
import styled from 'styled-components'

const jobData = [
    {
        companyName: "Learning about Programing.",
        date: "05 Jan 2015",
        position: "Computer , Literacy",
        description: "I started my learning after secondary school year 2014, i love been a computer programmer and a software developer, then this how my journey been a programmer and a webpage/sofware developer.",
    },
    {
        companyName: "Creating logo perfect in Afri-Tech",
        date: "17 April 2015",
        position: "Afri-Tech , Logo Design",
        description: "This was about creating my first Logo in my work place @ Afri-Tech, It was very exicting then, creating something meaningful on my fourth months. And then graduated there in September 2015.",
    },
];

export const Section2 = () => {
    const onClick = () => {
        window.open(
            "https://drive.google.com/file/d/19g3gobgGnRJwrjDqp8Z_-_wVLAxiOfhW/view?usp=share_link",
            "_blank"
        );
    };
    return (
        <Section2Wrapper>
            <Section2firstitem>
                <div>Recent Jobs</div>
                <Colouredtext onClick={onClick} > View all</Colouredtext>
            </Section2firstitem>
            <Section2SecondItem>
                {jobData.map((item) => (
                    <Section2ItemComponent key={item} {...item} />
                ))}

            </Section2SecondItem>
        </Section2Wrapper>
    );
};

const Section2ItemComponent = ({ companyName,
    date,
    position,
    description,
}) => (
    <Items>
        <ItemHeading>{companyName}</ItemHeading>
        <ItemParagragh> {date}    |    {position}</ItemParagragh>
        <ItemParagragh>{description}</ItemParagragh>
    </Items>
);

const Section2Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: auto;
    background-color: rgb(217, 240, 247);
    padding: 30px 80px;
    font-family: "Heebo";

    @media (max-width: 500px){
        width: auto;
    }
`;

const Section2firstitem = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: bold;

    @media (max-width: 500px) {
        justify-content: center;
        align-items: center;
    }
    `;

const Colouredtext = styled.div`
    color: blue;
    text-decoration: underline;
    border: hidden;
    background-color: rgb(217, 240, 247);
    cursor: pointer;

    @media (max-width: 500px) {
        display: none;
    }
    `;

const Section2SecondItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: rgb(214, 240, 248);
    gap: 40px;

    @media (max-width: 500px) {
        flex-direction: column;
    }
    `;

const Items = styled.div`
    width: 45.2%;
    background-color: var(--bg-color);
    text-align: left;
    gap: 30px;
    padding: 0 15px 0 15px;

    @media (max-width: 500px){
        width:auto;
    }
    `;

const ItemHeading = styled.h3`
font-weight: 700;
font-size: 26px;
line-height: 38px;
color: #21243d;
margin-top: 0;
`;

const ItemParagragh = styled.p`
font-weight: 400;
font-size: 16px;
line-height: 24px;
`