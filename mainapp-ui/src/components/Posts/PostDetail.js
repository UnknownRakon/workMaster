import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Badge from '@material-ui/core/Badge';
import Card from '@material-ui/core/Card';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import '../../App.css'

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

export default function PostDetail({ match, category, setPostID}) {

    const classes = useStyles();
    const [commentNum, setComment] = useState(0)
    const [post, setPost] = useState({})
    const id = match.params.id
    setPostID(id)

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://worker.std-1378.ist.mospolytech.ru/api/blogpost/${id}/`
        }).then(response => {
            setPost(response.data)
        })
    }, [id])

    useEffect(()=>{
        if(post.comments !== undefined){
            let num = post.comments
            setComment(num.length)
        }
    }, [post.comments])

    return (
        <Container component="main" maxWidth="xl" className={classes.container}>
            <CssBaseline />
            {category !== undefined ? 
            <Link style={{ marginTop: 15 }} to={{pathname:`/category/${category}`, fromDashboard: false }}><ArrowBackIcon fontSize='large' /></Link> 
            : null}
            <Typography variant="h6" component="h1" gutterBottom align='center'>{post.title}</Typography>
            <Divider style={{marginBottom: 15}}/>
            <div style={{display:'flex', justifyContent:"space-between", alignItems:'center', flexWrap: 'wrap'}}>
            {post.owner !== undefined ? 
            <Chip
                avatar={<Avatar>{post.owner.email.slice(0,1)}</Avatar>}
                label={post.owner.email}
                variant="outlined"
            />
            : null}
            <Typography style={{textTransform: 'uppercase', wordWrap: 'normal'}} variant="subtitle1" display="block" gutterBottom>
                Зарплата: {post.salary} руб
            </Typography>
            </div>
            <Typography style={{textAlign: 'center', wordWrap: 'normal'}} variant="h4" gutterBottom>
                Описание
            </Typography>
            <Typography style={{marginBottom: 15}} variant="body1" gutterBottom>
            {post.content}
            </Typography>
            <div style={{display: 'flex', alignItems: 'flex-end', marginBottom: 15}}>
            <Button variant="contained" color="primary" href={post.link} rel='noreferrer' target='_blank'>
                Связаться
            </Button>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', marginBottom: 10}} className='comments'>
                <Badge color="secondary" badgeContent={commentNum} max={999}>
                    <Typography variant="h4">
                        Комментарии
                    </Typography>
                </Badge>
                <Link style={{alignSelf: 'center'}} to={{pathname:`/comment`, fromDashboard: false}}><AddCircleIcon/></Link>
            </div>
            <Box>
            {post.comments !== undefined ? post.comments.map( unit => {
                if(unit.blog_post == id){
                    return(
                        <Card style={{marginBottom: 10}} variant="outlined" key={unit.id}>
                            <CardContent>
                            <div style={{display:'flex', justifyContent:"space-between", alignItems:'center', flexWrap: 'wrap'}}>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    {unit.pub_date.slice(0, 10)}
                                </Typography>
                                {unit.owner !== undefined ? <Chip
                                    avatar={<Avatar>{unit.owner.name.slice(0,1)}</Avatar>}
                                    label={unit.owner.name}
                                    variant="outlined"
                                    color={unit.owner.email === post.owner.email ? "primary" : 'default'}
                                />: null}
                            </div>
                            <Typography variant="body2" component="p">
                                {unit.comment}
                            </Typography>
                            </CardContent>
                        </Card>)
                }else
                return null
            })
            :null
            }
            </Box>
        </Container>
    )
}