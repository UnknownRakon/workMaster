import axios from "axios";
import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Cookies from 'js-cookie'

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    container: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        paddingBottom: 20,
        paddingTop: 15
    },
    textarea : {
        width: '80%',
        marginBottom: 15
    }
}));

const NewComment = ({ postID }) => {
    const [comment, setComment] = useState('');
    const [owner, setOwner] = useState('');
    const [redirect, setRedirect] = useState(false)
    const blog_post = postID
    const classes = useStyles();

    useEffect(() => {
        (
            async () => {
                const response = await fetch('http://worker.std-1378.ist.mospolytech.ru/api/user', {
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include'
                });
                const content = await response.json();
                setOwner(content.id);
            }
        )();
    })

    const submit = async (e) => {
        e.preventDefault()
        await fetch('http://worker.std-1378.ist.mospolytech.ru/api/comments/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
            'X-CSRFToken': '' + Cookies.get('csrftoken') },
            body: JSON.stringify({
                owner,
                comment,
                blog_post
            })
        })

        setTimeout(() => setRedirect(true), 100)
    }
    if (redirect)
        return <Redirect to={{ pathname: `/posts/${blog_post}` }} />


    return (
        <Container component="main" maxWidth="xl" className={classes.container}>
            <CssBaseline />
            <form onSubmit={submit} className={classes.form}>
                <fieldset style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <legend>
                        <Typography component="h1" variant="h5" style={{ textAlign: 'center' }}>
                            Ваш комментарий
                        </Typography>
                    </legend>
                    <TextField
                        id="outlined-multiline-static"
                        multiline
                        rows={4}
                        placeholder="Комментарий"
                        variant="outlined"
                        onChange={e => setComment(e.target.value)}
                        className={classes.textarea}
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Добавить
                    </Button>
                </fieldset>
            </form>
        </Container>
    );
};

export default NewComment;
