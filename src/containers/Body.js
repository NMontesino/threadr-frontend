import React, { Component } from 'react'
import ThreadContainer from './ThreadContainer'
import ThreadForm from '../forms/ThreadForm'





export default class Body extends Component{

    render() {



            return(
                    <div>
                        <>
                        
                        </>

                        <div style={{position: "relative"}}>

                        <ThreadForm handleAddNewThread={this.props.handleAddNewThread}/>

                        <ThreadContainer posts={this.props.posts}
                                            value={this.props.value}
                                            handleAddNewPost={this.props.handleAddNewPost}  
                                            editPost={this.props.editPost}
                                            deletePost={this.props.deletePost}
                                            currentThread={ this.props.currentThread }
                                            user={ this.props.user } 
                                            threads={this.props.threads}/>
                        </div>
                    </div>
        
            
            )
    
    }
}
