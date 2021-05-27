import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types'

const Home = ({setNameGlobal}) => {
    const [name, setName] = useState('')
    useEffect(() => {
        (
            async () => {
                const response = await fetch('http://127.0.0.1:8000/api/user', {
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include'
                });
                const content = await response.json();
                setNameGlobal(content.name);
                setName(content.name);
            }
        )();
    })
    return (
        <div>
            {name ? 'Hi ' + name : 'Войдите в систему'}
        </div>
    );
};

Home.propTypes = {
    setNameGlobal: PropTypes.func
  }

export default Home;
