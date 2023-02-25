import React from 'react'
import styled from 'styled-components'


export const Section1 = () => {
    const onClick = () => {
        window.open(
            "https://drive.google.com/file/d/1LDjzZuYbGKtBUBi97Yk1T3uxq4IkDN5X/view?usp=share_link",
            "_blank"
        );
    };
    return (
        <Section1Wrapper>
            <Section1Container>
                <h1>Hi, I am Abdulmojeed, a Webpage Developer</h1>
                <p>This is all about me creating my webpage, and showing to the world that i am a Webpage Developer.
                    I develope and design and create webpages and software applications..</p>
                <Section1Button onClick={onClick}> Download Resume </Section1Button>
            </Section1Container>
            <div>
                <Section1Image src="/mizzy.png"
                    alt="my-picture" />
            </div>
        </Section1Wrapper>
    );
}

const Section1Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;

    @media (max-width: 500px) {
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        padding: 0 24px;
        width: 400px;
    }
`;
const Section1Container = styled.div`
display: flex;
flex-direction: column;
width: 40%;
text-align: left;

@media (max-width: 500px){
    width: 400px;
    padding: 0 24px;
}
`
const Section1Button = styled.button`
background-color: orangered;
    border-radius: 12px;
    border: hidden;
    width: 200px;
    color: #ffff;
    padding: 10px;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
    `
const Section1Image = styled.img`
 border-radius: 155px;
 height: 246px;
 width="200px"
 `   