import React from 'react';
import styled from 'styled-components';

import Modal from '../Modal/Add';

const Backdrop = styled.div`
 position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.8);
    display: ${props=>props.show ? 'block': 'none'};
`;

const backdrop = (props)=>{
    return(
        <Backdrop show={props.show} onClick={props.hide}/>


    );
};

export default backdrop;