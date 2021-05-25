import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {

    const [types, setTypes] = useState([])

    useEffect(() => {
        axios({
            method: "GET",
            url: 'http://127.0.0.1:8000/api/type/'
        }).then(response => {
            setTypes(response.data)
        })
    }, [])

    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {types.map(c => (
                                <Link to={{pathname: `/type/${c.id}/`, fromDashboard: false}} className="nav-link" key={c.id}>{c.name}</Link>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
    );
}

export default Navbar;
