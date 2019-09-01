import React from 'react';
import styled from 'styled-components';



const Task = styled.div`
display: grid;
grid-template-columns: 30% 70%;
grid-template-rows: 1fr 1fr;
justify-content: center;
align-content: center;
justify-items: center;
align-items: center;


box-shadow: 0px 7px 5px -8px rgba(0,0,0,0.75);
background: #fff;
margin: 0 auto  3rem auto;
padding: 1rem;
position: relative;
`;

const Title = styled.div`
grid-column: 1/span 1;
text-transform: uppercase;
font-size: 1.6rem;
`;

const Deadline = styled.div`
grid-column: 1/span 1;
`;

const Content = styled.p`
grid-column: 2/span 1;
grid-row: 1/span 2;
`;

const Cross = styled.div`
top: 1rem;
right: 1rem;
width: 1.5rem;
height: 5px;
background: #333;
border-radius: 20rem;
transform: rotate(45deg);
position: absolute;

&::after{
position: absolute;
content: "";
display: block;
width: 1.5rem;
height: 5px;
background: #333;
border-radius: 20rem;
transform: rotate(-90deg);


}

&:hover,
&:hover:after{
cursor: pointer;
background: orangered;
}

`;

const task = (props)=>{
    return(
        <Task>
            <Cross onClick={()=>{props.delete(props.id)}}/>
            <Title>{props.title}</Title>
            <Deadline>{props.deadline}</Deadline>
            <Content>{props.content}</Content>
        </Task>
    );
};

export default task;