import React from 'react'
import styled from 'styled-components'
import { useNavigate, useLocation } from 'react-router-dom';


export const Section2 = ({ sectionData, isExperience }) => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Section2Wrapper>
            {location.pathname !== "/works" && (
                <Section2firstitem>
                    <div>Recent Jobs</div>
                    <Colouredtext onClick={() => navigate("works")} > View all</Colouredtext>
                </Section2firstitem>
            )}

            <Section2SecondItem isExperience={isExperience}>
                {sectionData.map((item) => (
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
    flex-direction: ${props => props.isExperience ? "column" : "row"};
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: rgb(214, 240, 248);
    gap: 40px;
    flex-basis: 0;

    @media (max-width: 500px) {
        flex-direction: column;
    }
    `;

const Items = styled.div`
    background-color: var(--bg-color);
    text-align: initial;
    gap: 30px;
    padding: 24px;

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