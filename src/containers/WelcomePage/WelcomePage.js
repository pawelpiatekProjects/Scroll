import React, {Component} from 'react';
import styled from 'styled-components';

import TopNav from '../../components/Navigation/TopNav/TopNav';

const WelcomePgeWrapper = styled.div`

`;

class WelcomePage extends Component{
    render() {
        return(
            <WelcomePgeWrapper>
                <TopNav/>
                Welcome Page
            </WelcomePgeWrapper>
        )
    }
}

export default WelcomePage;