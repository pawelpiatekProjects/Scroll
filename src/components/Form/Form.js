import React from 'react';

const form = (props)=>{
    return(
        <form onSubmit={this.onPostHandler}>
            <label>Title: </label>
            <input id='title' type="text"/>
            <label>Date: </label>
            <input id='date' type="date"/>
            <label>Content: </label>
            <textarea cols="30" rows="10" id='content'></textarea>
            <button type="submit">Create</button>
        </form>
    )
};

export default form;