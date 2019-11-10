import React from 'react'
import './App.css'
import Sidebar from './containers/Sidebar'
import Body from './containers/Body'

class App extends React.Component 
{
  
  state = 
  {
    posts: [],
    threads: [],
    currentThread: null,
    user: null,
    isLoggedIn: false
  }

  handleLogin = (user) =>
  {
    this.setState(
    {
      user: user,
      isLoggedIn: true
    })
  }
  
  handleAddNewPost = (newPostObj) => 
  {
    this.setState(
    {
      posts: [...this.state.posts, newPostObj]
    })
  }

  handleAddNewThread = (newThreadObj) => 
  {
    this.setState(
    {
      threads: [...this.state.threads, newThreadObj]
    })
  }
  
  render()
  {

    console.log(this.state)

    return(
  
      <div className="App" style={{'width': '100%', 'height': '100vh', 'border': '1px solid black', 'padding': '16px'}}>
  
        { this.state.isLoggedIn ? <Sidebar className="sidebar" /> : null }
        <Body className="app-body" posts={this.state.posts} value={this.state.value} isLoggedIn={ this.state.isLoggedIn } handleLogin={ this.handleLogin } handleAddNewPost={this.handleAddNewPost} handleAddNewThread={this.handleAddNewThread} />
  
      </div>
  
    )

  }

}

export default App
