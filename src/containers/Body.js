import React, { Component } from 'react'
import ThreadContainer from './ThreadContainer'
import ThreadForm from '../forms/ThreadForm'

class Body extends Component
{

    render()
    {
        return(
            <div>
                {
                    true ? <ThreadForm /> : <ThreadContainer />
                }
            </div>
        )
    }

}

export default Body