import React, { useState } from 'react'
import ThreadList from './ThreadList'
import UserComponent from '../components/UserComponent'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'


// import Toolbar from '@material-ui/core/Toolbar'


export default function Sidebar(props){

    const [titleSearch, setTitleSearch] = useState(null)

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      })

      const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [side]: open });
      };
   
    
    const drawerWidth = 200

    const handleChange = (event) => {
        setTitleSearch(event.target.value)
    }

    const useStyles = makeStyles(theme => ({
        root: {
          display: 'flex',
        },
      
        drawer: {
          width: drawerWidth,
          flexShrink: 0,
        },
        drawerPaper: {
          width: drawerWidth,
        },
        toolbar: theme.mixins.toolbar,
        content: {
          flexGrow: 1,
          backgroundColor: theme.palette.background.default,
          padding: theme.spacing(3),
        },
      }))

      const sideList = side => (
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer(side, false)}
          onKeyDown={toggleDrawer(side, false)}
        >

        <UserComponent user={props.user}/>

          <Divider />

          <input type="number" name="filter" placeholder='Choose a Number' 
                onChange={handleChange} 
                value= {titleSearch}/>

          <ThreadList deleteThread={props.deleteThread} 
                selectThread={props.selectThread} 
                threads={ props.threads } 
                titleSearch={titleSearch} />  

        </div>
      )

      const classes = useStyles()
    
    return(
        <div>
        <Button onClick={toggleDrawer('left', true)}>View Sidebar</Button>
        <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
            {sideList('left')}
        </Drawer>

        </div>
   
    )
}
