import React, { Component } from 'react'

class PostComponent extends Component
{

    render(){
    console.log(this.props)
        return(
            <div>
                This is the render for the Post Component 
            </div>
        )
    }

}

export default PostComponent