import React, { Component } from 'react'

class ThreadComponent extends Component
{
    handleSelectThread = (thread) =>
    {
        this.props.selectThread(thread)
    } 

    handleDeleteThread = (thread) =>
    {
        fetch(`http://localhost:3000/channels/${thread.id}`, 
        {
            method: "DELETE",
            headers:
            {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(res => res.json())
        .then(() => 
        {
            this.props.deleteThread(thread)
        })
    }

    render()
    {
        return(
            <div onClick={ () => this.handleSelectThread(this.props.thread) }><span onClick={() => this.handleDeleteThread(this.props.thread)}>X</span>  { this.props.thread.title }</div>
        )
    }

}

export default ThreadComponent