import React, { Component } from 'react'
import ThreadComponent from '../components/ThreadComponent'

class ThreadList extends Component
{

    render()
    {
        let threads = []
        if(this.props.threads)
        {
            threads = this.props.threads.map((thread) => 
            {
                return <ThreadComponent selectThread={ this.props.selectThread } thread={ thread } />
            })
        }
        return(
            <div>
                { threads }
            </div>
        )
    }

}

export default ThreadList