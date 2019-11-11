import React, { Component } from 'react'
import ThreadList from './ThreadList'
import UserComponent from '../components/UserComponent'

class Sidebar extends Component
{

    render()
    {
        return(
            <div>
                <UserComponent user={ this.props.user } />
                <p>All Threads</p>
                <ThreadList selectThread={ this.props.selectThread } threads={ this.props.threads } />
            </div>
        )
    }

}

export default Sidebar