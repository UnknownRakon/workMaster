import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function PostDetail({ match, category, setPostID}) {

    const [post, setPost] = useState({})
    const id = match.params.id
    setPostID(id)

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
            { category !== undefined ? <Link to={{pathname:`/category/${category}`, fromDashboard: false}}>Назад</Link>:null}
            <p>Название: <strong>{post.title}</strong></p>
            <p>Зарплата<strong>{post.salary}</strong></p>
            {post.owner !== undefined ? <p>Создатель:{post.owner.email}</p> : null}
            <p>Описание</p>
            <p>{post.content}</p>
            <a href={post.link} rel='noreferrer' target='_blank'>Ссылка для связи</a>
            <h2>Комментарии</h2>
            {console.log(post.comments)}
            {post.comments !== undefined ? post.comments.map((unit) => {
                if(unit.blog_post == id){
                    return(
                        <div key={unit.id}>
                            {console.log(unit.owner)}
                            {unit.owner !== undefined ? <span>Написал: {unit.owner.email}</span> : null}
                            <span>{unit.comment}</span>
                        </div>)
                }else
                return null
            })
            :null
            }
            <Link to={{pathname:`/comment`, fromDashboard: false}}>Добавить</Link>
        </div>
    )
}

export default PostDetail