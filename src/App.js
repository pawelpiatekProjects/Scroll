import React, {Component} from 'react';
import {Route, Switch, withRouter} from "react-router";

import IntroPage from './components/IntroPage/ItroPage';
import ControlContainer from './containers/Tasks';
import WelcomePage from './containers/WelcomePage/WelcomePage';
import Projects from './containers/Projects/projects';


import './App.css';
import axios from "axios";
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before{
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html{
  font-size: 65.2%;
  @media (max-width: 1300px ){
 font-size: 56.25%;
 }
 
  @media (max-width: 1000px ){
 font-size: 50%;
 }
 
 @media (max-width: 700px ){
 font-size: 50%;
 }
}

body{
  box-sizing: border-box;
 font-family: 'Roboto', sans-serif;
 
 

}
`;

class App extends Component{

    state={
        isSignIn: true,
        isAuth: false,
        token: null,
        userId: '',
        error: ''
    }

    onChangeForm = ()=>{

        this.setState(prevState=>({isSignIn: !prevState.isSignIn}));

    }

    logoutHandler = () => {
        this.setState({ isAuth: false, token: null });
        localStorage.removeItem('token');
        localStorage.removeItem('expiryDate');
        localStorage.removeItem('userId');
        this.props.history.replace('/');
    };

    setAutoLogout = milliseconds => {
        setTimeout(() => {
            this.logoutHandler();
        }, milliseconds);
    };

    onSignUpHandler = (values)=>{
        axios.post('http://localhost:8080/auth/signup', {
            email: values.email,
            password: values.password,
            name: values.name
        }).then(res=>{
            console.log(res)
            this.onChangeForm();
        }).catch(err=>console.log(err))
    }

    onLoginHandler = (values)=>{
        axios.post('http://localhost:8080/auth/login',{
            email: values.email,
            password: values.password
        })
            .then(res=>{
                if(res.status === 422){
                    console.log('Error 422');
                    this.setState({error: 'Validation failed'})
                }
                if(res.status !== 200 && res.status !== 201){
                    console.log('Error!');
                    this.setState({error: 'Could not authenticate you'});
                }
                return res
            })
            .then(resData=>{
                this.setState({
                    isAuth: true,
                    token: resData.data.token,
                    userId: resData.data.userId
                });

                localStorage.setItem('token',resData.data.token);
                localStorage.setItem('userId',resData.data.userId);
                const remainingMilliseconds = 60 * 60 * 1000 *3;
                const expiryDate = new Date(
                    new Date().getTime() + remainingMilliseconds
                );
                localStorage.setItem('expiryDate', expiryDate.toISOString());//correct expireDate
                this.setAutoLogout(remainingMilliseconds);
                this.props.history.push('dashboard/tasks');
            })
            .catch(err=>console.log(err))
    }

    render(){

        return (

            <div className="App">
                <GlobalStyle/>
                {/*<TopNav/>*/}
                <Switch>
                    <Route path='/dashboard' render={props=> (
                        <ControlContainer
                            test='test'
                            token={this.state.token}
                            logout={this.logoutHandler}
                        />
                    )}/>
                    <Route
                        path='/projects'
                        render={props=>(
                            <Projects
                                test='projects'
                                token={this.state.token}
                                logout={this.logoutHandler}
                            />
                        )}
                    />
                    <Route path='/welcomePage' exact  component={WelcomePage}/>
                    <Route path='/' component={()=><IntroPage
                    signup={this.onSignUpHandler}
                    login={this.onLoginHandler}
                    isSignIn={this.state.isSignIn}
                    onChangeForm={this.onChangeForm}
                    />}/>
                </Switch>
            </div>
        );
    }

}

export default withRouter(App);
