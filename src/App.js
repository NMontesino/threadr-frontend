import React from 'react'
import './App.css'
import Body from './containers/Body'

class App extends React.Component {
  
  state = {
    posts: [],
    threads: [],
    user: null,
    isLoggedIn: false,
    currentThread: null
  }
  
  handleAddNewPost = (newPostObj) => {
    this.setState({
      posts: [...this.state.posts, newPostObj]
    })
  }

  handleAddNewThread = (newThreadObj) => {
    this.setState({
      threads: [...this.state.threads, newThreadObj],
      currentThread: newThreadObj
    })

  }

  handleLogin = (userObj) => {
    console.log(userObj)
    this.setState({
      user: userObj
    })
  
  
  }

  handleLoginToggle = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    })
}
  
  
  
  render(){
    console.log(this.state)

    return(
  
      <div className="App" style={{'width': '100%', 'height': '100vh', 'border': '1px solid black', 'padding': '16px'}}>
  
        <Body className="app-body" 
          isLoggedIn={this.state.isLoggedIn} 
          posts={this.state.posts} 
          value={this.state.value} 
          handleAddNewPost={this.handleAddNewPost} 
          handleAddNewThread={this.handleAddNewThread} 
          handleLogin={this.handleLogin} 
          handleLoginToggle={this.handleLoginToggle} 
          user={this.state.user} 
          currentThread={this.state.currentThread}/>
  
      </div>
  
    )
  }
}

export default App
