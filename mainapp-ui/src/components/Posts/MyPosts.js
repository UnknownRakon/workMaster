import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Cookies from 'js-cookie'


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

export default function MyPosts() {

    const classes = useStyles();

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://worker.std-1378.ist.mospolytech.ru/api/blogpost`
        }).then(response => {
            setPosts(response.data)
        })
    },[])

    const [email, setEmail] = useState('')
    useEffect(() => {
        (
            async () => {
                const response = await fetch('http://worker.std-1378.ist.mospolytech.ru/api/user', {
                    headers: { 'Content-Type': 'application/json',
                    'X-CSRFToken': '' + Cookies.get('csrftoken') },
                    credentials: 'include'
                });
                const content = await response.json();
                setEmail(content.email);
            }
        )();
    })
    const postDelete = async (post) => {
        await axios.delete(`http://worker.std-1378.ist.mospolytech.ru/api/blogpost/${post}/`, {headers: { 'Content-Type': 'application/json',
        'X-CSRFToken': '' + Cookies.get('csrftoken') }})
        axios({
                method: "GET",
                url: `http://worker.std-1378.ist.mospolytech.ru/api/blogpost`
            }).then(response => {
                setPosts(response.data)
            })
    }
    return (
            <Container component="main" maxWidth="xl" className={classes.container}>
                        <CssBaseline />
                        <Typography variant="h3" component="h1" gutterBottom align='center'>Мои посты</Typography>
                        <Divider />
                        <Box>
                            {posts.map((unit, index) => {
                                if (unit.owner !== undefined) {
                                    if (unit.owner.email === email) {
                                    return (
                                        <Card key={index} style={{marginBottom: 15}}>
                                            <CardContent style={{marginBottom: 0, paddingBottom: 0}}>
                                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                                    Зарплата: {unit.salary} руб
                                                </Typography>
                                                <Typography variant="h5" component="h2">
                                                    {unit.title}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Link style={{textDecoration:'none'}} to={{ pathname: `/posts/${unit.id}`, fromDashboard: false }}><Button size="small">Подробнее</Button></Link>
                                                <Link  style={{textDecoration:'none'}} to={{ pathname: `/change/${unit.id}`, fromDashboard: false }}><Button size="small">Изменить</Button></Link>
                                                <Button to='/myposts' onClick={() => postDelete(unit.id) } size="small">Удалить</Button>
                                            </CardActions>
                                        </Card>
                                    )
                                }else return null
                            }else return null
                            }
                            )}
                        </Box>
                    </Container>
        // <div>
        //     <div className="row">
        //         {posts.map((unit, index) => {
        //             if (unit.owner !== undefined) {
        //                 if (unit.owner.email === email) {
        //                     return (
        //                         <div className="col-md-4" key={index}>
        //                             <h4>{unit.title}</h4>
        //                             <p>Зарплата: {unit.salary}рублей</p>
        //                             <p>Описание: {unit.content}</p>
        //                             <Link to={{ pathname: `/posts/${unit.id}`, fromDashboard: false }}>Подробнее</Link>
        //                             <Link to={{ pathname: `/change/${unit.id}`, fromDashboard: false }}>Изменить</Link>
        //                             <button to='/myposts' onClick={() => postDelete(unit.id) }>Удалить</button>
        //                         </div>
        //                     )
        //                 } else return null
        //             }
        //             else return null
        //         }
        //         )}
        //     </div>
        // </div>
    )
}