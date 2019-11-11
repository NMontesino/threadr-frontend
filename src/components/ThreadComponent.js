import React, { Component } from 'react'

class ThreadComponent extends Component
{
    handleSelectThread = (thread) =>
    {
        this.props.selectThread(thread)
    } 

    render()
    {
        return(
            <div onClick={ () => this.handleSelectThread(this.props.thread) }>{ this.props.thread.title }</div>
        )
    }

}

export default ThreadComponent