import React ,{Component} from 'react';
import styled from 'styled-components';

const FormWrapper = styled.form`
  
  margin: 0 auto;
  
  input,
  textarea
  {
  display: block;
  width: 50%;
  margin: 1rem auto;
  padding: .5rem;
  border: none;
  
  }
  
  label{
  width: 50%;
  display: inline-block;
  text-align: left;
  padding: .5rem;
  transform: translateY(3rem);
  }
  
  button{
  padding: 1rem;
  background: #eee;
  border: 1px solid #eee;
  width: 8rem;
  
  &:hover{
  cursor: pointer;
  }
  }
`;

class Form extends Component{
    state={
        title:'',
        date:'',
        content:'',
        show: false
    }
    onChangeTitle=(event)=>{
        this.setState({title:event.target.value});
    }
    onChangeDate=(event)=>{
        this.setState({date:event.target.value});
    }
    onChangeContent=(event)=>{
        this.setState({content:event.target.value});
    }
    render(){
        return(
            <FormWrapper onSubmit={this.props.submit}>

                <input id='title' type="text"
                       value={this.state.title}
                       onChange={this.onChangeTitle}/>
                <input id='date' type="date"
                       value={this.state.date}
                       onChange={this.onChangeDate}/>
                <textarea cols="30" rows="10" id='content'
                          value={this.state.content}
                          onChange={this.onChangeContent}
                ></textarea>
                <button type="submit">Create</button>
            </FormWrapper>
        )
    }

};

export default Form;