import React from 'react'
import './App.css'
import Sidebar from './containers/Sidebar'
import Body from './containers/Body'

class App extends React.Component {
  
  state = {
    posts: [],
    threads: [],
    user: {},
    isLoggedIn: false
  }
  
  handleAddNewPost = (newPostObj) => {
    this.setState({
      posts: [...this.state.posts, newPostObj]
    })
  }

  handleAddNewThread = (newThreadObj) => {
    this.setState({
      threads: [...this.state.threads, newThreadObj]
    })
  }
  
  
  
  render(){
    console.log(this.state)

    return(
  
      <div className="App" style={{'width': '100%', 'height': '100vh', 'border': '1px solid black', 'padding': '16px'}}>
  
        <Sidebar className="sidebar" />
        <Body className="app-body" posts={this.state.posts} value={this.state.value} handleAddNewPost={this.handleAddNewPost} handleAddNewThread={this.handleAddNewThread} />
  
      </div>
  
    )
  }
}

export default App
