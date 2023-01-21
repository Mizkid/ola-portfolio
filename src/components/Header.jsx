import React from 'react'
import styled from "styled-components"

export const Header = ({ navigationData }) => (
    <HeaderWrapper>
        {navigationData.map((navigation) => <nav>{
            navigation}</nav>)}
    </HeaderWrapper>
);

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: flex-end;
    gap: 33px;
    background-color: var(--bg-color);
    height: 80px;
    font-weight: bold;
    font-size: 20px;
    padding: 20px;
`;