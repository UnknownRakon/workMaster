import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        paddingTop: 15,
        paddingBottom: 20,
    },
    title: {
        fontSize: 14,
    },
}));

export default function CategoryDetail({ match, type, setCategoryGlobal }) {
    const classes = useStyles();

    const [category, setCategory] = useState({})
    const [posts, setPosts] = useState([])
    const id = match.params.id
    setCategoryGlobal(category.id)

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://worker.std-1378.ist.mospolytech.ru/api/category/${id}/`
        }).then(response => {
            setCategory(response.data)
            setPosts(response.data.posts)
        })
    }, [id])

    return (
        <Container component="main" maxWidth="xl" className={classes.container}>
            <CssBaseline />
            <Link style={{ marginTop: 15 }} to={{ pathname: `/type/${type}`, fromDashboard: false }}><ArrowBackIcon fontSize='large' /></Link>
            <Typography variant="h6" component="h1" gutterBottom align='center'>Категория: {category.name}</Typography>
            <Divider />
            <Box>
                {posts.map((unit, index) => {
                    if (unit.blog_type == type) {
                        return (
                            <Card key={index}>
                                <CardContent style={{marginBottom: 0, paddingBottom: 0}}>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        Зарплата: {unit.salary} руб
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                        {unit.title}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Link  style={{textDecoration:'none'}} to={{ pathname: `/posts/${unit.id}`, fromDashboard: false }}><Button size="small">Подробнее</Button></Link>
                                </CardActions>
                            </Card>
                        )
                    }
                    else return null
                }
                )}
            </Box>
        </Container>
    )
}

