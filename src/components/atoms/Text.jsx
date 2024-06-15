import styled from "styled-components";

const TextStyled = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    color: white;
`
function Text({text}){
    return <TextStyled>{text}</TextStyled>
}

export default Text