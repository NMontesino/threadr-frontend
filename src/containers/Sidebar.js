import React from 'react'
import ThreadList from './ThreadList'
import UserComponent from '../components/UserComponent'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/core/styles'
// import Toolbar from '@material-ui/core/Toolbar'

export default function Sidebar(props){
    const drawerWidth = 240

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

      const classes = useStyles()

    return(
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left"
        >
        <div className={classes.toolbar} />

            <Divider />

            <List>
                <UserComponent user={props.user}/>
            </List>

            <Divider />

            <List>
                <ThreadList />  
            </List>

        </Drawer>

           
    )
}


