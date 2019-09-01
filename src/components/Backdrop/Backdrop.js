import React from 'react';
import styled from 'styled-components';

import Modal from '../Modal/AddTask';

const Backdrop = styled.div`
width: 100%;
height: 100vh;
background: #333;
position: fixed;
z-index: 10;
opacity: 0.8;
transform: translateX(${props=>props.show ? 0 : -100}%);
`;

const backdrop = (props)=>{
    return(
        <Backdrop show={props.show} onClick={props.hide}/>


    );
};

export default backdrop;