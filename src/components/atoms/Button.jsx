import styled from "styled-components";

const ButtonStyled = styled.button`
    background: none;
    border: none;
    padding: 10px;
    width: 50px;

    #icon{
        width: 60%;
        height: 100%;
    }
`
function Button(props){
    return <ButtonStyled onClick={props.onClick}><img id="icon" src={props.img}/></ButtonStyled>
}

export default Button