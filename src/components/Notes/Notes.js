import React from 'react';
import styled from 'styled-components';


import TaskActions from '../Navigation/TaskActions/TaskActions';
import NotesNav from '../Navigation/NotesNav';
import NotesList from './NotesList';



const NotesContainer = styled.div`

`;


const notes =(props)=>{
    const taskList = props.taskList;
    let tasks = [];
    for(let i=0;i<taskList.length;i++){

        if(!taskList[i].completed){
            tasks.push(taskList[i]);
        }
    }
        return(
            <NotesContainer>
                <TaskActions tasks={tasks}/>
                <NotesNav click={props.click}/>
                <NotesList notes={props.notesList}/>
            </NotesContainer>
        )

}

export default notes;