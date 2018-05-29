import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Home from './Home';

class Login extends Component {

    constructor(props) {
        super(props);
        this.handleUserName = this.handleUserName.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.userName = '';
        this.password = '';
        this.state = {
            userName : '',
            result : [],
            invalidCredError : false,
            blankFieldError : false,
            showLogin : true,
            showHome: false
        }
    }

    componentDidMount() {
        fetch('https://swapi.co/api/people')
        .then(results=>{
            return results.json()
        })
        .then(data => {
            this.setState({result : data.results});
            // console.log(this.state.result);
        })
    }

    handleUserName(e) {
        this.userName = e.target.value;
        this.setState({userName : e.target.value});
    }

    handlePassword(e) {
        this.password = e.target.value;
    }

    handleLogout() {
        this.setState({
            showLogin: true,
            showHome: false,
            invalidCredError : false,
            blankFieldError : false,
        });
    }

    handleLogin() {
        if((this.userName.trim() === '') || (this.password.trim() === '')){
            this.setState({
                blankFieldError: true,
                invalidCredError: false
            });
        } else {
            var matched = false;
            for(let i=0; i<this.state.result.length; i++) {
                if(this.userName === this.state.result[i].name && this.password === this.state.result[i].birth_year){  
                    // console.log('Login successful.');
                    // this.props.history.push('/home');
                    this.setState({
                        showLogin: false,
                        showHome: true
                    });
                    matched = true;
                    return;
                }
            }
            if(!matched) {
                this.setState({
                    invalidCredError: true,
                    blankFieldError: false
                });
            } 
        }
    }

    render() {
        var hideInvalidCredError = {
            display: this.state.invalidCredError ? "block" : "none"
        }
        var hideBlankFieldError = {
            display: this.state.blankFieldError ? "block" : "none"
        }
        var loginScreenStyle = {
            display: this.state.showLogin ? "block" : "none"
        }
        var homeScreenStyle = {
            display: this.state.showHome ? "block" : "none"
        }

    return (
        <div>
            <div className="loginScreen"  style = {loginScreenStyle}>
                <div className = "intro">
                    <h1>The Galaxy searcher is here...</h1>
                    <h3>Let us know your identity.</h3>
                </div>
                <div>
                    <input type = "text" name = "userName" onChange = {this.handleUserName} placeholder="Enter your name...." required/>
                </div>
                <div>
                    <input type="password" name="password" onChange = {this.handlePassword} placeholder="Enter your year of birth...." required/>
                </div>
                <div>
                    <span className = 'blankFieldsError error' style = {hideBlankFieldError}>Oops!!! looks like you missed your name or your birth year there.</span>
                    <span className = 'invalidCredError error' style = {hideInvalidCredError}>Hey, did you just forget your name or your birth year there???</span>
                    <button type = 'submit' onClick = {this.handleLogin}>Let me in</button>
                </div>
            </div>
            <div className = "homeScreen" style = {homeScreenStyle}>
                <Home {...this.state} handleLogout = {this.handleLogout}/>
            </div>
        </div>
    );
  }
}

export default withRouter(Login);