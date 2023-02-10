import React from 'react'
import styled from "styled-components"
import { useNavigate, useLocation } from 'react-router-dom';

export const Header = ({ navigationData }) => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <HeaderWrapper>
            {navigationData.map(({ name, path }) => (
                <Navigation key={name} isActive={location.pathname === path}
                    onClick={() => navigate(path)}>
                    {name}</Navigation>))}
        </HeaderWrapper>
    );
};

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: flex-end;
    gap: 33px;
    background-color: var(--bg-color);
    height: 80px;
    font-weight: bold;
    font-size: 20px;
    padding: 20px

    @media (max-width: 500px) {
        max-width: 500px;

    }
`;

const Navigation = styled.nav`
color: ${(props) => (props.isActive ? "lightblue" : "default")};
:hover {
    cursor: pointer;
    
}
`