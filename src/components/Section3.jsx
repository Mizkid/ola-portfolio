import React, { Fragment } from 'react'
import styled from 'styled-components'
import { useNavigate, useLocation } from 'react-router-dom';


export const Section3 = ({ sectionData }) => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <Section3Wrapper>
            {location.pathname !== "/projects" && (
                <Section3FirstItem>
                    <Ftp>Featured Projects</Ftp>
                    <Colouredtext onClick={() => navigate("projects")} > View all</Colouredtext>
                </Section3FirstItem>
            )}

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
margin-bottom: 15px;
padding: 0 30px 0 30px
`;

const Ftp = styled.div`
font: 18px bold;
`

const Colouredtext = styled.div`
    color: blue;
    font: 12px;
    padding: 3px 10px;
    border-radius: 30px;
    cursor: pointer;
    background-color: rgb(217, 240, 247);

    @media (max-width: 500px) {
        display: none;
    }
    `;

const Section3SecondItem = styled.div`
    display: flex;
    width: 800px;
    align-items: left;
    text-align: left;
    gap: 16px;
    padding: 0 150px;

    @media (max-width: 500px){
        width: 450px;
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