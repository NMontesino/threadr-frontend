import React, { Component } from 'react'
import ThreadComponent from '../components/ThreadComponent'

class ThreadList extends Component
{

    render()
    {
        let threads = []
            let parsedNum = parseInt(this.props.titleSearch)
            
            let filteredthreads = this.props.threads.filter(thread => 
                thread.title.length === parsedNum
            )
    
            console.log(filteredthreads)
            
            if(this.props.threads)
            {
                threads = filteredthreads.map((thread) => 
                {
                    return <ThreadComponent deleteThread={this.props.deleteThread} selectThread={ this.props.selectThread } thread={ thread } />
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