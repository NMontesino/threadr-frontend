import React, { Component } from 'react'

class Login extends Component
{

    handleUsernameSubmit = (e) => 
    {
        e.preventDefault()
        this.props.logIn(e.target.children[1].value)
    }

    render()
    {
        return(

            <form style={{'width': '250px', 'height': '120px', 'display': 'flex', 'flexDirection': 'column', 'padding': '12px'}} onSubmit={ (e) => this.handleUsernameSubmit(e) } >
                <p style={{'margin': '4px'}}>Enter your username...</p>
                <input style={{'margin': '4px'}} type="text" />
                <input style={{'margin': '4px'}} type="submit" />
            </form>

        )
    }

}

export default Login