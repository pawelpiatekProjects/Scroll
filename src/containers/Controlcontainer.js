import React, {Component} from 'react';
import axios from 'axios';
import styled,{createGlobalStyle} from 'styled-components';

import Modal from '../components/Modal/AddTask';
import Backdrop from '../components/Backdrop/Backdrop';

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
 
}
`;

const Tasks = styled.div`

`;




class Controlcontainer extends Component{

    state = {
        postForm: {
            title:'',
            deadline:'',
            content: ''
        },
        formIsValid: false,
        imagePreview: null,
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

    onPostHandler = (e)=>{
        // alert('Test')
        const form={
            title: e.target.title.value,
            date: e.target.date.value,
            content: e.target.content.value
        };
        this.setState({
            postForm: form,
            showModal: false
        });
        axios.post('http://localhost:8080/tasks/createTask',{
            title:form.title,
            deadline: form.date,
            content: form.content

        })
            .then(response=>{
                console.log(response)
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
                <section>
                    <h1>Container with fetching and posting tasks (test)</h1>
                    <button  onClick={this.onShowModalHandler}>Add</button>
                </section>
                <section>

                    {tasksList}
                </section>
            </Tasks>

        )
    }
};

export default Controlcontainer;