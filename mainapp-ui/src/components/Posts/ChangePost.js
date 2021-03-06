import axios from "axios";
import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import Cookies from 'js-cookie'

const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        paddingTop: 15,
        paddingBottom: 20,
    },
}));

const ChangePost = ({match}) => {
    const classes = useStyles();

    const [post, setPost] = useState({})
    const id = match.params.id
    const [categories, setCategoryList] = useState([])

    const [title, setTitle] = useState('');
    const [salary, setSalary] = useState('');
    const [content, setContent] = useState('');
    const [link, setLink] = useState('');
    const [blog_category, setCategory] = useState('');
    const [blog_type, setType] = useState('');
    const [owner, setOwner] = useState('');
    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://worker.std-1378.ist.mospolytech.ru/api/blogpost/${id}/`
        }).then(response => {
            setPost(response.data)
            setTitle(response.data.title)
            setSalary(response.data.salary)
            setContent(response.data.content)
            setLink(response.data.link)
            setCategory(response.data.blog_category.id)
            setType(response.data.blog_type.id)
        })
    }, [id])

    useEffect(() => {
        (
            async () => {
                const response = await fetch('http://worker.std-1378.ist.mospolytech.ru/api/user', {
                    headers: { 'Content-Type': 'application/json',
                    'X-CSRFToken': '' + Cookies.get('csrftoken') },
                    credentials: 'include'
                });
                const content = await response.json();
                setOwner(content.id);
            }
        )();
    })

    useEffect(() => {
        axios({
            method: "GET",
            url: 'http://worker.std-1378.ist.mospolytech.ru/api/category/'
        }).then(response => {
            setCategoryList(response.data)
        })
    }, [])

    const submit = async (e) => {
        e.preventDefault()
        await fetch(`http://worker.std-1378.ist.mospolytech.ru/api/blogpost/${id}/`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json',
            'X-CSRFToken': '' + Cookies.get('csrftoken') },
            body: JSON.stringify({
                title,
                salary,
                content,
                link,
                blog_category,
                blog_type,
                owner
            })
        })

        setTimeout(() => setRedirect(true), 1000)
    }
    if (redirect)
        return <Redirect to='/myposts' />;

    return (
        <Container component="main" maxWidth="xl" className={classes.container}>
                <form className='col-10 mx-auto' onSubmit={submit}>
                    <fieldset>
                        <legend className='text-center'><Typography variant="h6" component="h1" gutterBottom >???????????????? ????????</Typography></legend>
                        <div class="form-floating mb-3">
                            <input value={title} onChange={e => setTitle(e.target.value)} type="text" class="form-control" id="floatingInput" placeholder="??????????????????" />
                            <label for="floatingInput">??????????????????</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input value={salary} onChange={e => setSalary(e.target.value)} type="number" class="form-control" id="floatingPassword" placeholder="????????????????" />
                            <label for="floatingPassword">???????????????? ?? ???????????????????? ????????????</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input value={link} onChange={e => setLink(e.target.value)} type="text" class="form-control" id="floatingPassword" placeholder="????????????" />
                            <label for="floatingPassword">???????????? ?????? ??????????</label>
                        </div>
                        <div class="form-floating mb-3">
                            <select value={blog_type} onChange={e => setType(e.target.value)} class="form-select mb-3">
                                <option value="1">????????????????</option>
                                <option value="2">??????????????????????</option>
                            </select>
                        </div>
                        <div class="form-floating mb-3">
                            <select value={blog_category} onChange={e => setCategory(e.target.value)} class="form-select mb-3">
                                {categories.map(p => (
                                    <option key={p.id} value={p.id}>{p.name}</option>
                                ))}
                            </select>
                        </div>
                        <div class="form-floating">
                            <textarea value={content} onChange={e => setContent(e.target.value)} class="form-control" placeholder="???????? ????????????????" id="floatingTextarea2" style={{height: 100}}>
                                {content}
                            </textarea>
                            <label for="floatingTextarea2">????????????????</label>
                        </div>
                        <button type="submit" class="mt-3 btn btn-primary col-12">????????????????</button>
                    </fieldset>
                </form>
            </Container>
    );
};

export default ChangePost;
