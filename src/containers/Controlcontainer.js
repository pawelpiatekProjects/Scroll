import React, {Component} from 'react';
import axios from 'axios';
import styled,{createGlobalStyle} from 'styled-components';
import {Route, Switch, withRouter} from "react-router";

import SideNav from '../components/SideNavigation/SideNavigation';
import Modal from '../components/Modal/AddTask';
import Backdrop from '../components/Backdrop/Backdrop';
import TaskList from '../components/TaskList/TaskList';
import ImportantTasks from '../components/ImportantTasks/ImportantTasks';
import Task from '../components/Task/Task';

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
 font-family: 'Open Sans', sans-serif;
}
`;

const TasksWrapper = styled.div`
display: flex;
`;

const Tasks = styled.div`

`;





class Controlcontainer extends Component{

    state = {
        tasks:[],
        showModal: false
    };

    componentDidMount() {
        this.onGetTaskHandler();
    }

    onGetTaskHandler = ()=>{
        axios.get('http://localhost:8080/tasks/fetchTasks')
            .then(tasksData=>{
                const tasks = tasksData.data.tasks;
                console.log(tasks);
                this.setState({tasks:tasks})
            })
            .catch(err=>console.log(err))
    }

    onPostHandler = (values)=>{

        axios.post('http://localhost:8080/tasks/createTask',{
            title:values.title,
            deadline: values.deadline,
            content: values.content
        })
            .then(response=>{
                console.log(response);

                this.onGetTaskHandler();
                this.setState({showModal:false});
            })
            .catch(err=>console.log(err))
    }

    onDeleteHandler = (taskId)=>{

        fetch('http://localhost:8080/tasks/task/'+ taskId,{
            method: 'DELETE'
        })
            .then(res=>{
                console.log(res);
                this.onGetTaskHandler()
            })
            .catch(err=>console.log(err))
    };

    onShowModalHandler = ()=>{
        this.setState({showModal:true})
    }


    render() {
        let tasksList;
        if(this.state.tasks.length === 0){
            tasksList = <p>Your tasks list is empty</p>
        }else{
            tasksList = this.state.tasks.map(task=>(

                <Task
                    id={task._id}
                    title = {task.title}
                    deadline = {task.deadline}
                    content = {task.content}
                    delete = {this.onDeleteHandler}
                />
            ) )
        }
        return(
            <Tasks>
                <Backdrop submit={this.onPostHandler} show={this.state.showModal} hide={()=>{this.setState({showModal:false})}}/>
                <Modal submit={this.onPostHandler} show={this.state.showModal}/>
                <GlobalStyle/>
                <TasksWrapper>
                    <SideNav/>
                    <Switch>
                        <Route path="/tasks" component={()=><TaskList taskList = {tasksList} click={this.onShowModalHandler}/>}/>
                        <Route path="/important-tasks" component={()=><ImportantTasks/>}/>
                    </Switch>
                    {/*<TaskList taskList = {tasksList} click={this.onShowModalHandler}/>*/}
                </TasksWrapper>


            </Tasks>

        )
    }
};

export default Controlcontainer;