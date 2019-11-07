import React, { Component } from 'react'
import ThreadList from './ThreadList'
import UserComponent from '../components/UserComponent'

class Sidebar extends Component
{

    render()
    {
        return(
            <div>
                <UserComponent />
                <p>Threads You Follow</p>
                <ThreadList />
                <p>Note Space</p>
                <ThreadList />
            </div>
        )
    }

}

export default Sidebar