import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';



const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        paddingTop: 15,
        paddingBottom: 20,
    }
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
            url: `http://127.0.0.1:8000/api/category/${id}/`
        }).then(response => {
            setCategory(response.data)
            setPosts(response.data.posts)
        })
    }, [id])

    return (
        <Container component="main" maxWidth="xl" className={classes.container}>
            <CssBaseline />
            <Link style={{marginTop: 15}} to={{pathname:`/type/${type}`, fromDashboard: false}}><ArrowBackIcon fontSize='large'/></Link>
            <Typography variant="h2" gutterBottom align='center'>Категория: {category.name}</Typography>
            <Divider />
            <div className="row">
                {posts.map((unit,index)=>{ 
                    if (unit.blog_type == type){ return(
                   <div className="col-md-4" key={index}>
                       <h4>{unit.title}</h4>
                       <p>Зарплата: {unit.salary}рублей</p>
                       <Link to={{pathname:`/posts/${unit.id}`, fromDashboard: false}}>Подробнее</Link>
                   </div>
                )}
                else return null
                }
                )}
            </div>
        </Container>
    )
}

