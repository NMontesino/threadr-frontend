import React, { Component } from 'react'

class PostComponent extends Component
{

    render()
    {
        // console.log(this.props)
        return(
            <div>
                <p>{this.props.post.title}</p>
                <p>{this.props.post.body}</p>
            </div>
        )
    }

}

export default PostComponent