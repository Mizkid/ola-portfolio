import React, { useState } from 'react'
import styled from 'styled-components'

export const Contact = () => {
    const [setFormValue] = useState({
        firstname: "", lastname: "",
        email: "", information: "",
    });

    const onBlur = (fieldName, value) => {
        setFormValue((prevValues) => ({
            ...prevValues,
            [fieldName]: value,
        }));
    };

    const onClick = () => {
        window.open(
            "mailto:ahmedmojeed25@gmail.com",
            "_blank"
        );
    };

    return (
        <Wrapper>
            <FormItem>
                <StyleLabel>Firstname:</StyleLabel>
                <StyledInput type="text"
                    onBlur={(e) => onBlur("firstname", e.target.value)} />
            </FormItem>
            <FormItem>
                <StyleLabel>Lastname:</StyleLabel>
                <StyledInput type="text"
                    onBlur={(e) => onBlur("lastname", e.target.value)} />
            </FormItem>
            <FormItem>
                <StyleLabel>Email:</StyleLabel>
                <StyledInput type="text"
                    onBlur={(e) => onBlur("email", e.target.value)} />
            </FormItem>
            <FormItem>
                <StyleLabel>Information:</StyleLabel>
                <StyledTextArea onBlur={(e) => onBlur("information", e.target.value)} />
            </FormItem>
            <StyledButton onClick={onClick}>Submit request</StyledButton>
        </Wrapper>
    )
}

const Wrapper = styled.div`
display: flex;
flex-direction: column;
border: 2px solid navy;
box-shadow: 0 0 5px navy;
border-radius: 10px;
padding: 14px;
gap:24px;
width: 500px;

@media (max-width: 500px) {
    max-width: 350px;
}
`;

const FormItem = styled.div`
display: grid;
grid-template-columns: 200px 1fr;
gap: 24px;
width: 450px;

@media (max-width: 500px) {
    max-width: 350px;
}
`
const StyleLabel = styled.div`
font-size: 24px;
font-weight: bold;
`;

const StyledInput = styled.input`
min-width: 240px;
min-height: 32px;
border-radius: 6px;
line-height: 20px;
padding: 2px;
text-align: center;

@media (max-width: 500px) {
    min-width: 120px;
}

:focus {
    outline: none !important;
    border: 1px solid lightblue;
    box-shadow: 0 0 5px blue;
}
`;

const StyledTextArea = styled.textarea`
min-width: 240px;
min-height: 80px;
border-radius: 6px;
padding: 2px;
text-align: left;

@media (max-width: 500px) {
    min-width: 120px;
}

:focus {
    outline: none !important;
    border: 1px solid lightblue;
    box-shadow: 0 0 5px blue;
}
`;

const StyledButton = styled.button`
border: 1px solid blue;
background-color: lightblue;
border-radius: 30px;
outline: none;
height: 25px;
width: 120px;
padding: 6px;
align-self: flex-end;

:hover{
    box-shadow: 0 0 5px blue;
    cursor: pointer;
}
`;
