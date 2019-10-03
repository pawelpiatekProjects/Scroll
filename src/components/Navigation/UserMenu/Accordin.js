import React from 'react';
import styled from 'styled-components';
import * as variables from "../../../utils/variables";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCloudMoon, faCogs, faSignOutAlt, faToggleOff, faToggleOn} from "@fortawesome/free-solid-svg-icons";

const Accordin = styled.ul`
list-style: none;
background: ${variables.primaryGreen};
color: ${variables.white};
padding: 3rem;
position: absolute;
font-size: 1.8rem;
top: 8.5rem;
right: 3rem;
display: ${props=>props.show ? 'block' : 'none'};

li{
margin: 2rem auto;
transition: all .3s;
text-align: left;

&:last-child{
border-top: 1px solid ${variables.white};
padding-top: 1rem;
margin-top: 3rem;
}

&:first-child{
    &:hover{
      color: ${variables.white};
      cursor: default;
    }
}

span{
margin: 0 .5rem;
}

&:hover{
cursor: pointer;
color: ${variables.fontColorFirst};
}
}

`;

const ToggleButton = styled.button`
background:transparent;
border: none;
font-size: 2rem;
margin-top: .5rem;
margin-left: .5rem;
color: ${props=>props.darkMode ? variables.fontColorFirst : variables.white};
transition: all .3s;

&:hover{
color: ${props=>props.darkMode ? variables.white : variables.fontColorFirst};
cursor: pointer;
}

&:focus{
outline: none;
}
`;

const accordin = (props)=>{
    return(
        <Accordin show={props.userMenu}>
            <li>
                <span><FontAwesomeIcon icon={faCloudMoon}/></span>
                <span>Dark Mode</span>
                <ToggleButton
                    onClick={props.toggleDarkMode}
                    darkMode={props.darkMode}>
                    <FontAwesomeIcon icon={props.darkMode ? faToggleOn : faToggleOff}/>
                </ToggleButton>
            </li>
            <li><span><FontAwesomeIcon icon={faCogs}/></span><span>Settings</span></li>

            <li onClick={props.logout}><span><FontAwesomeIcon icon={faSignOutAlt}/></span><span>Sign Out</span></li>
        </Accordin>
    )
};

export default accordin;