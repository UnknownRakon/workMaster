import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

function MyPosts() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://127.0.0.1:8000/api/blogpost`
        }).then(response => {
            setPosts(response.data)
        })
    },[])

    const [email, setEmail] = useState('')
    useEffect(() => {
        (
            async () => {
                const response = await fetch('http://127.0.0.1:8000/api/user', {
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include'
                });
                const content = await response.json();
                setEmail(content.email);
            }
        )();
    })
    const postDelete = (post) => {
        axios.delete(`http://127.0.0.1:8000/api/blogpost/${post}/`)
        axios({
                method: "GET",
                url: `http://127.0.0.1:8000/api/blogpost`
            }).then(response => {
                setPosts(response.data)
            })
    }
    return (
        <div>
            <div className="row">
                {posts.map((unit, index) => {
                    if (unit.owner !== undefined) {
                        if (unit.owner.email === email) {
                            return (
                                <div className="col-md-4" key={index}>
                                    <h4>{unit.title}</h4>
                                    <p>Зарплата: {unit.salary}рублей</p>
                                    <p>Описание: {unit.content}</p>
                                    <Link to={{ pathname: `/posts/${unit.id}`, fromDashboard: false }}>Подробнее</Link>
                                    <Link to={{ pathname: `/change/${unit.id}`, fromDashboard: false }}>Изменить</Link>
                                    <button to='/myposts' onClick={() => postDelete(unit.id) }>Удалить</button>
                                </div>
                            )
                        } else return null
                    }
                    else return null
                }
                )}
            </div>
        </div>
    )
}

export default MyPosts