import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import WorkIcon from '@material-ui/icons/Work';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    container: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        paddingBottom: 20,
        paddingTop: 15,
    }
}));


export default function TypeDetail({ match, SetTypeGlobal }) {
    const classes = useStyles();
    const [category, setCategory] = useState([])
    const id = match.params.id
    SetTypeGlobal(id)

    useEffect(() => {
        axios({
            method: "GET",
            url: 'http://worker.std-1378.ist.mospolytech.ru/api/category/'
        }).then(response => {
            setCategory(response.data)
        })
    }, [])

    return (
        <Container component="main" maxWidth="xl" className={classes.container}>
            <CssBaseline />
            <Typography variant="h2" gutterBottom align='center'>{id == 1 ? 'Вакансии' : 'Специалисты'}</Typography>
            <List component="nav" className={classes.root} aria-label="Категории">
                {category.map(p => (
                    <Link to={{ pathname: `/category/${p.id}`, fromDashboard: false }} style={{color: 'black', textDecoration: 'none'}}>
                        <ListItem button divider>
                            <ListItemAvatar>
                                <Avatar>
                                    <WorkIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={p.name} />
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Container>
    )
}