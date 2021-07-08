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

const NewPost = () => {

    const classes = useStyles();
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
        await fetch('http://worker.std-1378.ist.mospolytech.ru/api/blogpost/', {
            method: 'POST',
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

        setTimeout(() => setRedirect(true), 100)
    }
    if (redirect)
        return <Redirect to='/myposts' />;

    return (
        <Container component="main" maxWidth="xl" className={classes.container}>
                <form className='col-10 mx-auto' onSubmit={submit}>
                    <fieldset>
                        <legend className='text-center'><Typography variant="h3" component="h1" gutterBottom >Создать пост</Typography></legend>
                        <div class="form-floating mb-3">
                            <input onChange={e => setTitle(e.target.value)} type="text" class="form-control" id="floatingInput" placeholder="Заголовок" />
                            <label for="floatingInput">Заголовок</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input onChange={e => setSalary(e.target.value)} type="number" class="form-control" id="floatingPassword" placeholder="Зарплата" />
                            <label for="floatingPassword">Зарплата в российских рублях</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input  onChange={e => setLink(e.target.value)} type="text" class="form-control" id="floatingPassword" placeholder="Ссылка" />
                            <label for="floatingPassword">Ссылка для связи</label>
                        </div>
                        <div class="form-floating mb-3">
                            <select onChange={e => setType(e.target.value)} class="form-select mb-3">
                                <option selected>Выберите тип поста</option>
                                <option value="1">Вакансия</option>
                                <option value="2">Специалиста</option>
                            </select>
                        </div>
                        <div class="form-floating mb-3">
                            <select onChange={e => setCategory(e.target.value)} class="form-select mb-3">
                                <option selected>Выберите категорию поста</option>
                                {categories.map(p => (
                                    <option key={p.id} value={p.id}>{p.name}</option>
                                ))}
                            </select>
                        </div>
                        <div class="form-floating">
                            <textarea onChange={e => setContent(e.target.value)} class="form-control" placeholder="Ваше описание" id="floatingTextarea2" style={{height: 100}}></textarea>
                            <label for="floatingTextarea2">Описание</label>
                        </div>
                        <button type="submit" class="mt-3 btn btn-primary col-12">Выложить</button>
                    </fieldset>
                </form>
        </Container>
    );
};

export default NewPost;
