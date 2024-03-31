import React from 'react'
import styled from 'styled-components'


export const Section1 = () => {
    const onClick = () => {
        window.open(
            "https://drive.google.com/file/d/1ncVWOR8QhXSNCSMW8LVkCQ1Oqxkefx18/view?usp=sharing",
            "_blank"
        );
    };
    return (
        <Section1Wrapper>
            <Section1Container>
                <h1>Hi, I am Abdulmojeed, a Frontend Developer</h1>
                <p>This is my webpage where you can get to know all info about me. I'm a Junior Frontend Developer, 
                    and also a Technical Assistant. I've had a lot of experiences working on many projects and jobs,
                     and also currently an employee @Njoin. To know more kindly check my Resume. </p>
                <Section1Button onClick={onClick}> Download Resume </Section1Button>
            </Section1Container>
            <div>
                <Section1Image src="/Profilepic.jpg"
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