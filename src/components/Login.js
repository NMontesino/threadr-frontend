import React, { Component } from 'react'

class Login extends Component
{

    state = 
    {
        username: ''
    }

    handleChange = (event) => 
    {
        console.log(this.state)

        this.setState(
        {
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => 
    {

        event.preventDefault()

        fetch("http://localhost:3000/login", 
        {
            method: "POST",
            headers: 
            {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(
            {
                username: this.state.username
            })
        })
        .then(res => res.json())
        .then((user) =>
        {
            this.props.handleLogin(user)
        })

    }

    render()
    {
    
        return(

            <form onSubmit={ this.handleSubmit }>

                <label for="username">Enter a Username</label>
                <input type="text" name="username" placeholder='Write Something' onChange={this.handleChange}/>

                <input type="submit" value="Submit" />
                
            </form>

        )

    }

}

export default Login