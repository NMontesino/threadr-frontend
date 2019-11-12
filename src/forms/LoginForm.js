import React, { Component } from 'react'

class LoginForm extends Component
{
    state = {
        username: '',
        isLoggedIn: this.props.login 
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
      }

      handleSubmit = (event) => {
        event.preventDefault()

        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username: this.state.username
            })
        })
        .then(res => res.json())
        .then(user => {
            this.setState({
                isLoggedIn: !this.state.isLoggedIn
            })
            
            this.props.handleLogin(user)
            this.props.handleLoginToggle()
        }
        )
      }

    render(){
    
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Enter Name 
                    <input type="text" name="username" placeholder='Write Something' onChange={this.handleChange}/>
                </label>

                <input type="submit" value="Submit" />
            </form>
        )
    }

}

export default LoginForm