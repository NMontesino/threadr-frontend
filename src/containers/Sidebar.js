import React, { Component } from 'react'
import ThreadList from './ThreadList'
import UserComponent from '../components/UserComponent'

class Sidebar extends Component
{
    state = {
        titleSearch: null
    }

    handleChange = (event) => {
        this.setState({
            titleSearch: event.target.value 
        })
    }

    

    render()
    {
        console.log(this.state)
        return(
            <div>
                <UserComponent user={ this.props.user } />
                <p>All Threads</p>
                <input type="number" name="filter" placeholder='Choose a Number' onChange={this.handleChange} value={this.state.titleSearch}/>
                <ThreadList deleteThread={this.props.deleteThread} selectThread={ this.props.selectThread } threads={ this.props.threads } titleSearch={this.state.titleSearch}/>
            </div>
        )
    }

}

export default Sidebar