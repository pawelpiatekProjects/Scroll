import React from 'react';
import styled from 'styled-components';
import Note from './Note';


const NotesListWrapper = styled.div`
width: 80%;
margin: 0 auto;

`;

const Posts = styled.div`
width: 100%;
`;

const notesList = (props)=>{

    // const taskList = props.taskList;
    // let tasks = [];
    // for(let i=0;i<taskList.length;i++){
    //
    //     if(!taskList[i].completed){
    //         tasks.push(taskList[i]);
    //     }
    // }
    // let list;
    //
    // if(tasks.length <=0){
    //     list = 'No important tasks';
    // }else{
    //     list = tasks.map(task=>(
    //         <Task
    //             id={task._id}
    //             title = {task.title}
    //             deadline = {task.deadline.slice(0,10)}
    //             content = {task.content}
    //             important = {task.important}
    //             delete={props.delete}
    //             importantAdd={props.importantAdd}
    //         />
    //     ));
    // }

    return(
        <NotesListWrapper>
            <Note/>
        </NotesListWrapper>
    )
};

export default notesList;