import React, { Fragment } from 'react'
import styled from 'styled-components'

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
]


export const Section3 = () => {
    return (
        <Section3Wrapper>
            <Section3FirstItem>
                Featured Projects / Works
            </Section3FirstItem>
            {sectionData.map((works) => (
                <Fragment key={works}>
                    <Section3ItemComponent {...works} />
                    <Seperator />
                </Fragment>
            ))}
        </Section3Wrapper>

    );
};

const Section3ItemComponent = ({
    imageUrl,
    heading,
    year,
    works,
    paragraph,
}) => (
    <Section3SecondItem>
        <ImageRepo src={imageUrl}
            alt="My Potrait" />
        <div>
            <SectionHeading>{heading}</SectionHeading>
            <SpanSection >
                <Span> {year}</Span>
                <Paragraph>{works}</Paragraph>
            </SpanSection>
            <p> {paragraph}</p>
        </div>
    </Section3SecondItem>
);

const Seperator = () => <SeperatorWrapper />;

const Section3Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    background-color: var(--bg-color);
    font-family: "Heebo";

    @media (max-width: 500px){
        width: 500px;
    }
    `;

const Section3FirstItem = styled.div`
display: flex;
justify-content: space-between;
text-align: left;
font: 22px bold;
margin-bottom: 15px;
padding-left: 30px;
`;

const Section3SecondItem = styled.div`
    display: flex;
    width: 800px;
    align-items: left;
    text-align: left;
    gap: 16px;
    padding: 0 150px;

    @media (max-width: 500px){
        width: 500px;
        padding: 0 24px;
    }
    `;

const ImageRepo = styled.img`
height: 200px;
width: 240px;
min-width: 240px;

@media (max-width: 500px){
    width: 120px;
    min-width: 120px;
    object-fit: contain;
}
`;

const SectionHeading = styled.h2`
font-weight: 700;
font-size: 26px;
`;

const SpanSection = styled.div`
    display: flex;
    align-items: center;
    gap: 26px;
    `;

const Span = styled.span`
    background-color: black;
    color: white;
    border-radius: 12px;
    padding: 2px 6px;
    font-weight: bold;
    letter-spacing: 1px;
    `;

const Paragraph = styled.p`
    color: rgb(141, 139, 139);
    @media (max-width: 500px){
        width: auto;
    `;

const SeperatorWrapper = styled.div`
border: 1px solid rgb(240, 239, 239);
`;