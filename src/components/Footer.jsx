import React from 'react'
import styled from 'styled-components';

const imageData = [
    {
        imageUrl: "/github.PNG",
        altName: "github",
        linkTo: "https://www.github.com/Mizkid"
    },
    {
        imageUrl: "/Facebook.PNG",
        altName: "facebook",
        linkTo: "https://www.facebook.com/ahmedmojeed.mizkid"
    },
    {
        imageUrl: "/instagram.PNG",
        altName: "instagram",
        linkTo: "https://www.instagram.com/____eleha"
    },
    {
        imageUrl: "/Twitter.PNG",
        altName: "twitter",
        linkTo: "https://www.twitter.com/Mizkid_BabaNla"
    },
    {
        imageUrl: "/Linkedin.PNG",
        altName: "linkedin",
        linkTo: "https://www.linkedin.com/in/ahmed-abdulmojeed-aa11a8259/"
    },
];

export const Footer = () => {
    const onClick = (linkTo) => {
        window.open(linkTo);
    };
    return (
        <FooterWrapper>
            <FooterImage key={"Footer"} >
                {imageData.map(({ imageUrl, altName, linkTo }) => (
                    <Image
                        src={imageUrl}
                        alt={altName}
                        onClick={() => onClick(linkTo)} {...Footer}
                    />
                ))}
            </FooterImage>
            <div><h3>Copyright @2022 All rights reserved</h3> </div>
        </FooterWrapper>
    )
}



const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--bg-color);
    color: var(--text-color);
    padding-top: 70px;
    width: 100%;
    height: 180px;
    gap: 20px;
`;

const FooterImage = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    gap: 18px;
    `;

const Image = styled.img`
width: 35px;
height: 35px;
cursor: pointer;
`;