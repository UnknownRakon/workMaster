import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function CategoryDetail({ match, type }) {

    const [category, setCategory] = useState({})
    const [posts, setPosts] = useState([])
    const id = match.params.id

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
        <div>
            Category with id {category.id}
            <p>Category: <strong>{category.name}</strong></p>
            <hr/>
            <div className="row">
                {posts.map((unit,index)=>{ 
                    console.log(unit)
                    if (unit.blog_type == type){ return(
                   <div className="col-md-4" key={index}>
                       <h4>{unit.title}</h4>
                       <p>{unit.content}</p>
                       <p>{unit.id}</p>
                       <Link to={{pathname:`/posts/${unit.id}`, fromDashboard: false}}>Детали</Link>
                   </div>
                )}
                else return null
                }
                )}
            </div>
        </div>
    )
}

export default CategoryDetail