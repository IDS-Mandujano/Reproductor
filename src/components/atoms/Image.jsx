import styled from "styled-components";

const ImageStyled = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 5px;
`
function Image({image}){
    return <ImageStyled src={image}></ImageStyled>
}

export default Image