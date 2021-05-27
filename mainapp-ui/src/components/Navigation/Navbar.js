import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types'

function Navbar({name}) {

    const [types, setTypes] = useState([])

    useEffect(() => {
        axios({
            method: "GET",
            url: 'http://127.0.0.1:8000/api/type/'
        }).then(response => {
            setTypes(response.data)
        })
    }, [])

    const logout = async() =>{
        await fetch('http://127.0.0.1:8000/api/logout', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials: 'include',
    });
    }

    let menu;

    if (name === undefined) {
        menu = (
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                <li className="nav-item"><Link to='/login' className="nav-link ml-6">Войти</Link></li>
                <li className="nav-item"><Link to='/register' className="nav-link">Зарегистрироваться</Link></li>
            </ul>
        )
    } else {
        menu = (
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                {types.map(c => (
                    <li className="nav-item"><Link to={{ pathname: `/type/${c.id}/`, fromDashboard: false }} key={c.id} className="nav-link">{c.name}</Link></li>
                ))}
                <li className="nav-item"><Link to='/login' className="nav-link ml-6" onClick={logout}>Выйти</Link></li>
            </ul>
        )
    }

    return (
        <nav className="navbar navbar-expand-md bg-dark mb-3">
            {console.log(name)}
            <div className="container-fluid">
                <Link to='/' className="navbar-brand">Главная</Link>
                <div className="collapse navbar-collapse">
                    <div className="navbar-nav">
                        {menu}
                    </div>
                </div>
            </div>
        </nav>
    );
}
Navbar.propTypes = {
    name: PropTypes.string
}

export default Navbar;
