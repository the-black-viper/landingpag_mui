import React, { useEffect } from 'react';
import { AppBar, Collapse, IconButton, makeStyles, Toolbar } from '@material-ui/core';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import { Link as Scroll} from 'react-scroll';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    }, 
    appbar: {
        background: 'none',
        fontFamily: 'Nunito'
    },
    appbarWrapper: {
        width: "80%",
        margin: "0 auto"
    },
    appbarTitle: {
        flexGrow: '1',
    },
    colorText: {
        color: "#5AFF3D",
    },
    container: {
        textAlign: 'center'
    },
    title: {
        color: '#fff',
        fontFamily: 'Nunito',
        fontSize: '4.4rem',
    },
    icon: {
        color: 'white',
        fontSize: '2.5rem '
    },
    arrowicon: {
        color: 'white',
        fontSize: '5rem'
    }
}));

const Header = () => {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);

    useEffect(() => {
        setChecked(true);
    }, []);

    return (
        <div className={classes.root} id='header'>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}>My
                    <span className={classes.colorText}>Island </span></h1>
                    <IconButton >
                        <MenuRoundedIcon className={classes.icon}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Collapse in={checked} {...(true ? { timeout: 1000}: {})} collapsedHeight={40}>
            <div className={classes.container}> 
                <h1 className={classes.title}>Welcome to<br/>My<span className={classes.colorText}>Island</span></h1>
                    <Scroll to="place-to-visit" smooth={true}>
                        <IconButton >
                            <ArrowDropDownRoundedIcon className={classes.arrowicon} />
                        </IconButton>
                    </Scroll>
            </div>
            </Collapse>
        </div>
    );
};


export default Header;