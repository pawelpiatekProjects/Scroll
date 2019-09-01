import React, {Component} from 'react';

import axios from 'axios';


class Controlcontainer extends Component{

    state = {
        postForm: {},
        formIsValid: false,
        imagePreview: null
    };

    onPostHandler = (e)=>{
        // alert('Test')
        e.preventDefault();
        const form={
            title: e.target.title.value,
            date: e.target.date.value,
            content: e.target.content.value
        };
        this.setState({
            postForm: form
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

    render() {
        return(
            <section onSubmit={this.onPostHandler}>
                <h1>Container with fetching and posting tasks (test)</h1>
                <form>
                    <label>Title: </label>
                    <input id='title' type="text"/>
                    <label>Date: </label>
                    <input id='date' type="date"/>
                    <label>Content: </label>
                    <textarea cols="30" rows="10" id='content'></textarea>
                    <button type="submit">Create</button>
                </form>
            </section>
        )
    }
};

export default Controlcontainer;