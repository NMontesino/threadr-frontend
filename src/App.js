import React from 'react'
import './App.css'
import Body from './containers/Body'
import Sidebar from './containers/Sidebar'
import { Route, Link, Switch } from 'react-router-dom'
import LoginForm from './forms/LoginForm';
import NotFound from './components/notFound'


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

        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
            </div>

            <Switch>

            <Route exact path="/" render={ () => 
              <Body className="app-body" 
              posts={this.state.posts} 
              value={this.state.value} 
              isLoggedIn={ this.state.isLoggedIn } 
              handleLogin={ this.handleLogin } 
              handleAddNewPost={this.handleAddNewPost} 
              deletePost={this.deletePost} 
              editPost={this.editPost} 
              user={ this.state.user } 
              currentThread={ this.state.currentThread } 
              handleAddNewThread={this.handleAddNewThread} 
              handleLoginToggle={this.handleLoginToggle} />} />

            <Route exact path="/login" render= {() => 
              <LoginForm handleLogin={ this.handleLogin } 
              handleLoginToggle={this.handleLoginToggle}/> }/>

            <Route component={NotFound} />

            </Switch>

        
  
      </div>
  
    )

  }

}

export default App
