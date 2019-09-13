import styled from 'styled-components';

//Add Button Right Bottom absolute
export const AddButton = styled.button`
position: absolute;
right: ${props=>props.right}rem;
bottom: ${props=>props.bottom}rem;
width: 30%;
padding: .5rem;
background: #fff;
border: 1px solid #8EC06C;
border-radius: 2rem;
color: #8EC06C;
font-size: ${props=>props.fontSize}rem;
transition: all .3s;

&:hover,
&:focus{
cursor: pointer;
outline: none;
background: #8EC06C;
color: #fff;
}

`;