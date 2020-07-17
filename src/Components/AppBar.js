
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {Segment, Header} from "semantic-ui-react"
// import MenuIcon from '@material-ui/icons/Menu';

function Appbar() {
    const space="    "
    return (
        // <AppBar position="static">
        //     <Toolbar variant="dense">
        //         {/* <IconButton edge="start"  color="inherit" aria-label="menu">
                    
        //         </IconButton> */}
                
        //         <Typography variant="h6" color="inherit">
        //             Escape Game              
        //         </Typography>
        //     <h4>:            An Astronauts fate</h4>
        //     </Toolbar>
        // </AppBar>
        <Segment inverted>
             <Header inverted>An Astronaut's fate</Header>
        </Segment>

            
    )
}
export default Appbar