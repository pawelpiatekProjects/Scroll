import React, {Component} from 'react';
import axios from 'axios';
import styled, {createGlobalStyle} from 'styled-components';
import {Route, Switch, withRouter} from "react-router";

import Notes from '../components/Notes/Notes';
import SideNav from '../components/Navigation/SideNavigation/SideNavigation';
import TopNav from '../components/Navigation/TopNav/TopNav';
import Modal from '../components/Modal/Add';
import Backdrop from '../components/Backdrop/Backdrop';
import TaskList from '../components/Tasks/TaskList/TaskList';
import ImportantTasks from '../components/Tasks/ImportantTasks/ImportantTasks';
import UpcomingTasks from '../components/Tasks/UpcomingTasks/UpcomingTasks';
import CompletedTask from '../components/Tasks/CompletedTasks/CompletedTasks';


const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before{
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
body{
  box-sizing: border-box;
 font-family: 'Roboto', sans-serif;

}
`;

const TasksWrapper = styled.div`
display: grid;
grid-template-columns: repeat(6,1fr);
`;

const TasksList = styled.div`

`;

const TaskListWrapper = styled.div`
grid-column: 2/-1;
`;

const Sidebar = styled.div`

`;

const Topnav = styled.div`
grid-column: 1/-1;
`;


class Tasks extends Component {

    state = {
        tasks: [],
        showTaskModal: false,
        showNotesModal: false
    };

    componentDidMount() {
        this.onGetTaskHandler();
    }

    onGetTaskHandler = () => {
        axios.get('http://localhost:8080/tasks/fetchTasks')
            .then(tasksData => {
                const tasks = tasksData.data.tasks.reverse();
                this.setState({tasks: tasks})
            })
            .catch(err => console.log(err))
    }

    onPostTaskHandler = (values) => {

        axios.post('http://localhost:8080/tasks/createTask', {
            title: values.title,
            deadline: values.deadline,
            content: values.content
        })
            .then(response => {
                console.log(response);

                this.onGetTaskHandler();
                this.setState({showTaskModal: false});
            })
            .catch(err => console.log(err))
    }

    onDeleteHandler = (taskId) => {

        axios.get('http://localhost:8080/tasks/task/completed/' + taskId)
            .then(res => {
                console.log(res);
                this.onGetTaskHandler()
            })
            .catch(err => console.log(err))
    };

    onShowTaskModalHandler = () => {
        this.setState({showTaskModal: true})
    }

    onShowNotesModalHandler = ()=>{
        this.setState({showNotesModal:true})
    }

    onAddImportantHandler = (taskId) => {

        axios.get('http://localhost:8080/tasks/fetchTask/' + taskId)
            .then(res => {
                this.onGetTaskHandler();
            })
            .catch(err => {
                console.log(err);
            });
    }

    onRemoveImportantHandler = (taskId) => {
        axios.get('http://localhost:8080/tasks/task/importantRemove/' + taskId)
            .then(res => {
                this.onGetTaskHandler();
            })
            .catch(err => {
                console.log(err);
            });
    };


    render() {

        return (
            <TasksList>
                <Backdrop submit={this.onPostTaskHandler} show={this.state.showTaskModal} hide={() => {
                    this.setState({showTaskModal: false})
                }}/>
                <Backdrop submit={this.onShowNotesModalHandler} show={this.state.showNotesModal} hide={() => {
                    this.setState({showNotesModal: false})
                }}/>
                <Modal status='task'submit={this.onPostTaskHandler} show={this.state.showTaskModal}/>
                <Modal status='notes'submit={this.onPostTaskHandler} show={this.state.showNotesModal}/>
                <GlobalStyle/>
                <TasksWrapper>
                    <Topnav>
                        <TopNav/>
                    </Topnav>
                    <Sidebar>
                        <SideNav/>
                    </Sidebar>
                    <TaskListWrapper>
                        <Switch>
                            <Route path="/dashboard/tasks"
                                   component={() => <TaskList
                                       taskList={this.state.tasks}
                                       delete={this.onDeleteHandler}
                                       importantAdd={this.onAddImportantHandler}
                                       click={this.onShowTaskModalHandler}/>}
                            />
                            <Route
                                path="/dashboard/important-tasks"
                                component={() => <ImportantTasks
                                    taskList={this.state.tasks}
                                    delete={this.onDeleteHandler}
                                    importantRemove={this.onRemoveImportantHandler}/>}
                            />
                            <Route
                                path="/dashboard/upcoming-tasks"
                                component={() => <UpcomingTasks
                                    delete={this.onDeleteHandler}
                                    importantAdd={this.onAddImportantHandler}
                                    taskList={this.state.tasks}/>}
                            />
                            <Route
                                path="/dashboard/completed-tasks"
                                component={() => <CompletedTask
                                    taskList={this.state.tasks}/>}
                            />
                            <Route path="/dashboard/notes"
                                   component={()=><Notes
                                       taskList = {this.state.tasks}
                                       click={this.onShowNotesModalHandler}
                                   />}
                            />
                        </Switch>
                    </TaskListWrapper>

                </TasksWrapper>


            </TasksList>

        )
    }
};

export default Tasks;