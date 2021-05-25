import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function TypeDetail({ match, SetTypeGlobal}) {

    const [category, setCategory] = useState([])
    const id = match.params.id
    SetTypeGlobal(id)

    useEffect(() => {
        axios({
            method: "GET",
            url: 'http://127.0.0.1:8000/api/category/'
        }).then(response => {
            setCategory(response.data)
        })
    }, [])

    return (
        <div className="row">
            <div className='col-md-3'>
                <ul class="list-group">
                    {category.map(p => (
                        <li key={p.id} class="list-group-item" >                      
                         <Link to={{pathname:`/category/${p.id}`, fromDashboard: false}}>{p.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TypeDetail