import React, {Component} from 'react';
import styled from 'styled-components';

import MobileNav from '../../components/Navigation/MobileNav/MobileNav';
import Backdrop from '../../components/Backdrop/Backdrop';
import TopNav from '../../components/Navigation/TopNav/TopNav';
import SideNav from '../../components/Navigation/SideNavigation/SideNavigation';
import ProjectsList from '../../components/Projects/ProjectsList';

const ProjectsWrapper = styled.div`
display: grid;
grid-template-columns: repeat(6,1fr);
`;

const TopNavWrapper = styled.div`
grid-column: 1/-1;
`;

const SideNavWrapper = styled.div`
grid-column: 1/ span 1;
`;

const ProjectsListWrapper = styled.div`
grid-column: 2/-1;
`;

class Projects extends Component {

    state = {
        loading: false,
        error: false,
        mobile: false,
        showUserMenu: false,
        darkMode: false
    };

    onShowUserMenu = () => {
        this.setState(prevState => ({showUserMenu: !prevState.showUserMenu}))
    }

    render() {


        console.log(this.onShowUserMenu)
        return (

            <ProjectsWrapper>
                <TopNavWrapper>
                    <TopNav
                        logout={this.props.logout}
                        userMenu={this.state.showUserMenu}
                        showUserMenu={this.onShowUserMenu}

                    />
                </TopNavWrapper>
                <SideNavWrapper>
                    <SideNav/>
                </SideNavWrapper>
                <ProjectsListWrapper>
                    <ProjectsList/>
                </ProjectsListWrapper>
            </ProjectsWrapper>
        )
    }
}

export default Projects;


