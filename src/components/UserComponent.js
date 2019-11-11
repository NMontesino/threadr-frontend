import React, { Component } from 'react'

class UserComponent extends Component
{

    render()
    {
        return(
            <p>Welcome <span style={{'fontWeight': 'bold'}}>{ this.props.user.username }</span></p>
        )
    }

}

export default UserComponent