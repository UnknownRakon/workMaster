import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function PostDetail({ match, category }) {

    const [post, setPost] = useState({})
    const id = match.params.id

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://127.0.0.1:8000/api/blogpost/${id}/`
        }).then(response => {
            setPost(response.data)
        })
    }, [id])

    return (
        <div>
            <Link to={{pathname:`/category/${category}`, fromDashboard: false}}>Назад</Link>
            <p>Название: <strong>{post.title}</strong></p>
            <p>Зарплата<strong>{post.salary}</strong></p>
            <p>Описание</p>
            <p>{post.content}</p>
            <a href={post.link} rel='noreferrer' target='_blank'>Ссылка для связи</a>
        </div>
    )
}

export default PostDetail