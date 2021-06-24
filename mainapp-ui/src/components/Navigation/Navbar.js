import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import VpnKeyRoundedIcon from '@material-ui/icons/VpnKeyRounded';
import LockOpenRoundedIcon from '@material-ui/icons/LockOpenRounded';


import '../../styles/navbar.css'

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
}));

export default function Navbar({ name }) {
    const classes = useStyles();

    const [types, setTypes] = useState([])

    useEffect(() => {
        axios({
            method: "GET",
            url: 'http://127.0.0.1:8000/api/type/'
        }).then(response => {
            setTypes(response.data)
        })
    }, [])

    const logout = async () => {
        await fetch('http://127.0.0.1:8000/api/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        });
    }

    let menu;
    let header;

    if (name === undefined) {
        header = (
            <Toolbar className={classes.toolbar} style={{ flexWrap: 'wrap' }}>
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    noWrap
                    className={classes.toolbarTitle}
                >
                    <Link className="nav" to='/'>Worker</Link>
                </Typography>
                <Link className="nav" to='/login'>
                <Button variant="outlined" size="small" style={{ marginRight: 5 }}>
                    <VpnKeyRoundedIcon />
                </Button>
                </Link>
                <Link className="nav" to='/register'>
                    <Button variant="outlined" size="small">
                        <LockOpenRoundedIcon />
                    </Button>
                </Link>
            </Toolbar>
        )
        menu = null
    } else {
        header = (
            <Toolbar className={classes.toolbar}>
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    noWrap
                    className={classes.toolbarTitle}
                >
                    <Link className="nav" to='/'>Worker</Link>
                </Typography>
                <Link to='/login' className="nav" onClick={logout}>
                    <Button variant="outlined" size="small">
                        <ExitToAppRoundedIcon />
                    </Button>
                </Link>
            </Toolbar>
        )
        menu = (
            <Toolbar component="nav" style={{ background: 'black' }} variant="dense" className={classes.toolbarSecondary}>
                {types.map(c => (
                    <Link className="link" to={{ pathname: `/type/${c.id}/`, fromDashboard: false }} key={c.id}>{c.name}</Link>
                ))}
                <Link className="link" to='/myposts'>Мои посты</Link>
               <Link className="link" to='/newpost'>Создать пост</Link>
            </Toolbar>
        )
    }

    return (
        <AppBar color="default" position="static" elevation={0} className={classes.appBar}>
            {header}
            {menu}
        </AppBar>
    );
}
Navbar.propTypes = {
    name: PropTypes.string
}