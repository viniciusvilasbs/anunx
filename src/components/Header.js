import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    IconButton,
} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'


const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}))


export default function ButtonAppBar() {
    const classes = useStyles()
  return (
    <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="6" className={classes.title}>
                    News
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}
