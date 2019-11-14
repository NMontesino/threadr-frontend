import React, { Component } from 'react'
import ThreadComponent from '../components/ThreadComponent'

export default class ThreadList extends Component{

    render() {
        // let threads = []
        let AllThreads = this.props.threads.map((thread) => {
            return <ThreadComponent deleteThread={this.props.deleteThread} selectThread={ this.props.selectThread } thread={ thread } />
        })
            let parsedNum = parseInt(this.props.titleSearch)
            
            let filteredthreads = this.props.threads.filter(thread => 
                thread.title.length === parsedNum
            )
    
            console.log(filteredthreads)
            
            if(parsedNum > 0){
                filteredthreads.map((thread) => {
                    return <ThreadComponent deleteThread={this.props.deleteThread} selectThread={ this.props.selectThread } thread={ thread } />
                })
            }
            else {
                return AllThreads
            }
            
    }
}

