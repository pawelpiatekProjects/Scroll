import React from 'react';
import styled from 'styled-components';
import Note from './Note';
import EmptyInfo from '../EmptyInfo/EmptyInfo';


const NotesListWrapper = styled.div`
display: grid;
grid-template-columns: repeat(2,1fr);
grid-gap: 1rem;
width: 80%;
margin: 0 auto;

`;

const Posts = styled.div`
width: 100%;
`;

const notesList = (props)=>{

    // let notes = props.notes;
    // notes.map(note=>{
    //     <Note title={note.title} content={note.content}/>
    // })


    const notes = props.notes;
    console.log(notes)

    let notesList;

    if(notes.length>0){
        notesList = notes.map(note=>(
            <Note id={note.id} title={note.title} content={note.content} delete={props.delete}/>
        ))
    }else{
        notesList = <EmptyInfo text='You have no notes'/>;
    }


    return(
        <NotesListWrapper>
            {notesList}
        </NotesListWrapper>
    )
};

export default notesList;