import React from 'react';
import styled from 'styled-components';

import Form from '../../containers/Form/Form';

const Modal = styled.div`
 background: #eee;
 width: 50%;

 margin: 0 auto;
 height: 60vh;
 position: fixed;
 top: 50%;
 left: 50%;
 //transform: translate(-50%,-50%);
 z-index: 11;
 // opacity: ${props=>props.show ? 1 : 0};
 transform: scale(${props=>props.show ? 1 : 0}) translate(-50%,-50%);
 transform-origin: left center;
 transition: all .3s ease-out;
`;

const modal = (props)=>{
    return(
        <Modal show={props.show}>
            <Form submit={props.submit}/>
        </Modal>

    );
};

export default modal;