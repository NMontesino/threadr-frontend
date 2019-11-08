import React from 'react'
import './App.css'
import Sidebar from './containers/Sidebar'
import Body from './containers/Body'

class App extends React.Component {

  state = {
    posts: [],
    
  }
  
  handleAddNewPost = (newPostObj) => {
    this.setState({
      posts: [...this.state.posts, newPostObj]
    })
  }
  
  
  
  render(){
    console.log(this.state)

    return(
  
      <div className="App">
  
        <Sidebar className="sidebar" />
        <Body className="app-body" posts={this.state.posts} value={this.state.value} handleAddNewPost={this.handleAddNewPost} />
  
      </div>
  
    )
  }
}

export default App
