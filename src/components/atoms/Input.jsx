import styled from "styled-components";

const InputStyled = styled.input`
    display: flex;
    padding: 5px;
    width: 400px;
    border-radius: 2px;
    background-color: antiquewhite;
    border-radius: 2px;
`
function Input({value,onChange}){
    return <InputStyled type="range" min="0" max="100" value={value} onChange={onChange}/>
}

export default Input
