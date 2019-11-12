import React from 'react'
import './App.css'
import Body from './containers/Body'
import Sidebar from './containers/Sidebar'

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

  componentDidMount = () =>
  {

    fetch('http://localhost:3000/channels')
    .then(res => res.json())
    .then((threads) =>
    {
      this.setState(
      {
        threads: threads
      })
    })

  }

  handleLogin = (user) =>
  {
    this.setState(
    {
      user: user,
      isLoggedIn: true
    })
  }

  selectThread = (thread) =>
  {
    this.setState(
    {
      currentThread: thread,
      posts: thread.posts
    }, () => console.log(this.state.currentThread))
  }
  
  handleAddNewPost = (newPostObj) => 
  {

    // fetch(`http://localhost:3000/users/${this.state.user.id}`, 
    // {
    //   method: "PATCH",
    //   headers:
    //   {
    //     "Content-Type": "application/json",
    //     "Accept": "application/json"
    //   },
    //   body: JSON.stringify(
    //   {
    //     posts: [...this.state.user.posts, newPostObj]
    //   })
    // })
    // .then(res => res.json())
    // .then((user) => 
    // {
    //   this.setState(
    //   {
    //     user: user
    //   })
    // })

    // fetch(`http://localhost:3000/threads/${this.state.currentThread.id}`, 
    // {
    //   method: "PATCH",
    //   headers:
    //   {
    //     "Content-Type": "application/json",
    //     "Accept": "application/json"
    //   },
    //   body: JSON.stringify(
    //   {
    //     posts: [...this.state.currentThread.posts, newPostObj]
    //   })
    // })
    // .then(res => res.json())
    // .then((thread) => 
    // {

    //   const newThreadArr = this.state.threads.filter((index) => 
    //   {
    //     return this.state.threads[index] === this.state.currentThread
    //   })
    //   .push(thread)

    //   this.setState(
    //   {
    //     threads: [...newThreadArr],
    //     currentThread: thread
    //   })

    // })

    this.setState(
    {
      posts: [...this.state.posts, newPostObj]
    })

  }

  handleAddNewThread = (newThreadObj) => 
  {
    console.log(newThreadObj)
    this.setState(
    {
      threads: [...this.state.threads, newThreadObj],
      currentThread: newThreadObj
    })
  }

  deletePost = (postDelete) =>
  {
    const newPostArr = this.state.posts.filter((post) => 
    {
      return post !== postDelete
    })
    this.setState(
    {
      posts: newPostArr
    })
  }

  editPost = (postEdit) =>
  {
    const newPostArr = this.state.posts.filter((post) => 
    {
      return post.id !== postEdit.id
    })
    this.setState(
    {
      posts: [...newPostArr, postEdit]
    })
  }

  deleteThread = (threadDelete) =>
  {
    const newThreadArr = this.state.threads.filter((thread) => 
    {
      return thread !== threadDelete
    })
    this.setState(
    {
      threads: newThreadArr,
      currentThread: null
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
  
  render()
  {

    // console.log(this.state)

    return(
  
      <div className="App" style={{'width': '100%', 'height': '100vh', 'padding': '16px'}}>
  
        { this.state.isLoggedIn ? <Sidebar className="sidebar" user={ this.state.user } selectThread={ this.selectThread } threads={ this.state.threads } deleteThread={ this.deleteThread } /> : null }
        
        <Body className="app-body" posts={this.state.posts} value={this.state.value} isLoggedIn={ this.state.isLoggedIn } handleLogin={ this.handleLogin } handleAddNewPost={this.handleAddNewPost} deletePost={this.deletePost} editPost={this.editPost} user={ this.state.user } currentThread={ this.state.currentThread } handleAddNewThread={this.handleAddNewThread} handleLoginToggle={this.handleLoginToggle} />
  
      </div>
  
    )

  }

}

export default App
