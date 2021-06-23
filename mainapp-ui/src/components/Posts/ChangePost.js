import axios from "axios";
import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";

const ChangePost = ({match}) => {
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
            url: `http://127.0.0.1:8000/api/blogpost/${id}/`
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
                const response = await fetch('http://127.0.0.1:8000/api/user', {
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
            url: 'http://127.0.0.1:8000/api/category/'
        }).then(response => {
            setCategoryList(response.data)
        })
    }, [])

    const submit = async (e) => {
        e.preventDefault()
        await fetch(`http://127.0.0.1:8000/api/blogpost/${id}/`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
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
        <div>
            <main className="form-signin">
                <form onSubmit={submit}>
                    <fieldset>
                        <legend>Изменить пост</legend>
                        <div class="form-floating mb-3">
                            <input value={title} onChange={e => setTitle(e.target.value)} type="text" class="form-control" id="floatingInput" placeholder="Заголовок" />
                            <label for="floatingInput">Заголовок</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input value={salary} onChange={e => setSalary(e.target.value)} type="number" class="form-control" id="floatingPassword" placeholder="Зарплата" />
                            <label for="floatingPassword">Зарплата в российских рублях</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input value={link} onChange={e => setLink(e.target.value)} type="text" class="form-control" id="floatingPassword" placeholder="Ссылка" />
                            <label for="floatingPassword">Ссылка для связи</label>
                        </div>
                        <div class="form-floating mb-3">
                            <select value={blog_type} onChange={e => setType(e.target.value)} class="form-select mb-3">
                                <option value="1">Вакансия</option>
                                <option value="2">Специалиста</option>
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
                            <textarea value={content} onChange={e => setContent(e.target.value)} class="form-control" placeholder="Ваше описание" id="floatingTextarea2" style={{height: 100}}>
                                {content}
                            </textarea>
                            <label for="floatingTextarea2">Описание</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Изменить</button>
                    </fieldset>
                </form>
            </main>
        </div>
    );
};

export default ChangePost;
