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
import Spinner from '../components/UI/Spinner';
import Error from '../components/UI/Error/Error';


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

const SpinnerWrapper = styled.div`
grid-column: 2/-1;
margin-top: 8rem;
`;


class Tasks extends Component {

    state = {
        tasks: [],
        notes: [],
        showTaskModal: false,
        showNotesModal: false,
        loading: false,
        error:false
    };

    componentDidMount() {
        this.onGetTaskHandler();
        this.onGetNotesHandler();
    }

    onGetTaskHandler = () => {
        this.setState({loading: true})
        axios.get('http://localhost:8080/tasks/fetchTasks')
            .then(tasksData => {
                const tasks = tasksData.data.tasks.reverse();
                return this.setState({
                    tasks: tasks
                })
            })
            .then(res => {
                this.setState({loading: false});
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    loading: false,
                    error:true
                });
            })
    }

    onGetNotesHandler = () => {
        axios.get('http://localhost:8080/notes/fetchNotes')
            .then(result => {
                const notes = result.data.notes.reverse();

                this.setState({notes: notes});
            })
            .catch(err => console.log(err))
    };

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

    onPostNoteHandler = (values) => {
        axios.post('http://localhost:8080/notes/createNote', {
            title: values.title,
            content: values.content
        })
            .then(response => {
                console.log(response)
                this.onGetNotesHandler();
                this.setState({showNotesModal: false})
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

    onDeleteNoteHandler = (noteId) => {
        axios.get('http://localhost:8080/notes/note/delete' + noteId)
            .then(res => {
                this.onGetNotesHandler()
            })
            .catch(err => console.log(err));
    };

    onShowTaskModalHandler = () => {
        this.setState({showTaskModal: true})
    }

    onShowNotesModalHandler = () => {
        this.setState({showNotesModal: true})
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
        let list;
        if (this.state.loading) {
            list = (
                <SpinnerWrapper>
                    <Spinner/>
                </SpinnerWrapper>
            )
        } else if(this.state.error){
            list=<Error message='Could not connect to database' />
        } else{
            list = (
                <TaskListWrapper>
                    <Switch>
                        <Route path="/dashboard/tasks"
                               component={() => <TaskList
                                   taskList={this.state.tasks}
                                   loading={this.state.loading}
                                   notesList={this.state.notes}
                                   delete={this.onDeleteHandler}
                                   importantAdd={this.onAddImportantHandler}
                                   click={this.onShowTaskModalHandler}/>}
                        />
                        <Route
                            path="/dashboard/important-tasks"
                            component={() => <ImportantTasks
                                taskList={this.state.tasks}
                                loading={this.state.loading}
                                notesList={this.state.notes}
                                delete={this.onDeleteHandler}
                                importantRemove={this.onRemoveImportantHandler}/>}
                        />
                        <Route
                            path="/dashboard/upcoming-tasks"
                            component={() => <UpcomingTasks
                                delete={this.onDeleteHandler}
                                loading={this.state.loading}
                                importantAdd={this.onAddImportantHandler}
                                notesList={this.state.notes}
                                taskList={this.state.tasks}/>}
                        />
                        <Route
                            path="/dashboard/completed-tasks"
                            component={() => <CompletedTask
                                notesList={this.state.notes}
                                loading={this.state.loading}
                                taskList={this.state.tasks}/>}
                        />
                        <Route path="/dashboard/notes"
                               component={() => <Notes
                                   taskList={this.state.tasks}
                                   loading={this.state.loading}
                                   click={this.onShowNotesModalHandler}
                                   notesList={this.state.notes}
                                   delete={this.onDeleteNoteHandler}
                               />}
                        />
                    </Switch>
                </TaskListWrapper>
            )
        }
        return (
            <TasksList>
                <Backdrop submit={this.onPostTaskHandler} show={this.state.showTaskModal} hide={() => {
                    this.setState({showTaskModal: false})
                }}/>
                <Backdrop submit={this.onShowNotesModalHandler} show={this.state.showNotesModal} hide={() => {
                    this.setState({showNotesModal: false})
                }}/>
                {this.state.showTaskModal ?<Modal status='task' submit={this.onPostTaskHandler} show={this.state.showTaskModal}/> : null}
                {this.state.showNotesModal ?<Modal status='notes' submit={this.onPostNoteHandler} show={this.state.showNotesModal}/> :null}
                <GlobalStyle/>
                <TasksWrapper>
                    <Topnav>
                        <TopNav/>
                    </Topnav>
                    <Sidebar>
                        <SideNav/>
                    </Sidebar>
                    {list}

                </TasksWrapper>


            </TasksList>

        )
    }
};

export default Tasks;