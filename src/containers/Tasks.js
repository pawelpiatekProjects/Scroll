import React, {Component} from 'react';
import axios from 'axios';
import styled, {createGlobalStyle} from 'styled-components';
import {Route, Switch, withRouter} from "react-router";

import Notes from '../components/Notes/Notes';
import SideNav from '../components/Navigation/SideNavigation/SideNavigation';
import TopNav from '../components/Navigation/TopNav/TopNav';
import MobileNav from '../components/Navigation/MobileNav/MobileNav'
import Modal from '../components/Modal/Add';
import Backdrop from '../components/Backdrop/Backdrop';
import TaskList from '../components/Tasks/TaskList/TaskList';
import ImportantTasks from '../components/Tasks/ImportantTasks/ImportantTasks';
import UpcomingTasks from '../components/Tasks/UpcomingTasks/UpcomingTasks';
import CompletedTask from '../components/Tasks/CompletedTasks/CompletedTasks';
import Spinner from '../components/UI/Spinner';
import Error from '../components/UI/Error/Error';

//todo : Base url


const TasksWrapper = styled.div`
display: grid;
grid-template-columns: repeat(6,1fr);

`;

const TasksList = styled.div`

`;

const TaskListWrapper = styled.div`
grid-column: 2/-1;

@media(max-width: 1000px){
  grid-column: 1/-1;
 
  margin: 0 auto;
  }
  
  @media(max-width: 900px){
  grid-column: 1/-1;
  width: 80%;
  margin: 0 auto;
  }
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

const baseUrl = 'http://localhost:8080';

class Tasks extends Component {

    state = {
        tasks: [],
        notes: [],
        showTaskModal: false,
        showNotesModal: false,
        showEditTasksModal: false,
        loading: false,
        error: false,
        mobile:false,
        showUserMenu: false,
        darkMode: false
    };

    componentDidMount() {
        this.onGetTaskHandler();
        this.onGetNotesHandler();
    }

    onGetTaskHandler = () => {
        this.setState({loading: true})
        const token = localStorage.getItem('token');
        axios.get(`${baseUrl}/tasks/fetchTasks`, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }
        )
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
                    error: true
                });
            })
    }

    onGetNotesHandler = () => {
        const token = localStorage.getItem('token');
        axios.get(`${baseUrl}/notes/fetchNotes`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then(result => {
                const notes = result.data.notes.reverse();

                this.setState({notes: notes});
            })
            .catch(err => console.log(err))
    };

    onPostTaskHandler = (values) => {
        const token = localStorage.getItem('token');
        axios.post(`${baseUrl}/tasks/createTask`, {
                title: values.title,
                deadline: values.deadline,
                content: values.content,

            },
            {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            .then(response => {
                console.log(response);

                this.onGetTaskHandler();
                this.setState({showTaskModal: false});
            })
            .catch(err => console.log(err))
    }

    onPostNoteHandler = (values) => {
        const token = localStorage.getItem('token');
        axios.post(`${baseUrl}/notes/createNote`, {
                title: values.title,
                content: values.content
            },
            {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            .then(response => {
                console.log(response)
                this.onGetNotesHandler();
                this.setState({showNotesModal: false})
            })
            .catch(err => console.log(err))
    }

    onUpdateTaskHandler = (values,taskId)=>{

        const token = localStorage.getItem('token');
        axios.post(`${baseUrl}/tasks/update/${taskId}`,{
            title: values.title,
            deadline: values.deadline,
            content: values.content
        },
            {
                headers:{
                    Authorization: 'Bearer ' + token
                }
            })
            .then(response=>{
                console.log(response);
                this.onGetTaskHandler();
                this.setState({showEditTasksModal:false})
            })
            .catch(err=>console.log(err));
    }

    onDeleteHandler = (taskId) => {
        const token = localStorage.getItem('token');
        axios.get(`${baseUrl}/tasks/task/completed/${taskId}`, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }
        )
            .then(res => {
                console.log(res);
                this.onGetTaskHandler()
            })
            .catch(err => console.log(err))
    };

    onDeleteNoteHandler = (noteId) => {
        const token = localStorage.getItem('token');
        axios.get(`${baseUrl}/notes/note/delete/` + noteId, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
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

    onshowEditTasksModalHandler =()=>{
        this.setState({showEditTasksModal:true})
    }

    onAddImportantHandler = (taskId) => {
        const token = localStorage.getItem('token');
        axios.get(`${baseUrl}/tasks/fetchTask/` + taskId, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then(res => {
                this.onGetTaskHandler();
            })
            .catch(err => {
                console.log(err);
            });
    }

    onRemoveImportantHandler = (taskId) => {
        const token = localStorage.getItem('token');
        axios.get(`${baseUrl}/tasks/task/importantRemove/` + taskId, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then(res => {
                this.onGetTaskHandler();
            })
            .catch(err => {
                console.log(err);
            });
    };

    onOpenMobileNavHandler = ()=>{
        this.setState({mobile:true})
    };

    onShowUserMenu = ()=>{
        this.setState(prevState=>({showUserMenu: !prevState.showUserMenu}))
    }



    toggleDarkMode = ()=>{
        this.setState(prevState=>({darkMode: !prevState.darkMode}))
    }


    render() {
        let list;
        if (this.state.loading) {
            list = (
                <SpinnerWrapper>
                    <Spinner/>
                </SpinnerWrapper>
            )
        } else if (this.state.error) {
            list = <Error message='Could not connect to database'/>
        } else {
            list = (
                <TaskListWrapper>
                    <Switch>
                        <Route path="/dashboard/tasks"
                               component={() => <TaskList
                                   toggleEdit={this.onshowEditTasksModalHandler}
                                   showEdit={this.state.showEditTasksModal}
                                   editMethod={this.onUpdateTaskHandler}
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
            <TasksList >
                <MobileNav
                    show={this.state.mobile}
                    logout={this.props.logout}
                    showUserMenu ={this.onShowUserMenu}
                    userMenu = {this.state.showUserMenu}
                    toggleDarkMode = {this.toggleDarkMode}
                    darkMode = {this.state.darkMode}
                />
                <Backdrop submit={this.onPostTaskHandler} show={this.state.showTaskModal} hide={() => {
                    this.setState({showTaskModal: false})
                }}/>
                <Backdrop submit={this.onShowNotesModalHandler} show={this.state.showNotesModal} hide={() => {
                    this.setState({showNotesModal: false})
                }}/>
                <Backdrop show={this.state.showEditTasksModal} hide={()=>{
                    this.setState({showEditTasksModal:false})
                }}/>
                <Backdrop show={this.state.mobile} hide={()=>{this.setState({mobile:false})}}/>
                {this.state.showTaskModal ?
                    <Modal status='task' submit={this.onPostTaskHandler} show={this.state.showTaskModal}/> : null}
                {this.state.showNotesModal ?
                    <Modal status='note' submit={this.onPostNoteHandler} show={this.state.showNotesModal}/> : null}
                {/*{this.state.showEditTasksModal ?*/}
                    {/*<Modal status='taskEdit' submit={this.onUpdateTaskHandler} show={this.state.showEditTasksModal}/>*/}
                    {/*:null*/}
                {/*}*/}
                <TasksWrapper>
                    <Topnav>
                        <TopNav
                            logout={this.props.logout}
                            showMobile={this.onOpenMobileNavHandler}
                            showUserMenu ={this.onShowUserMenu}
                            userMenu = {this.state.showUserMenu}
                            toggleDarkMode = {this.toggleDarkMode}
                            darkMode = {this.state.darkMode}
                        />
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