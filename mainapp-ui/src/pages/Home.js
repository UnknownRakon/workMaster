import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';

const Home = ({ setNameGlobal }) => {
    const [name, setName] = useState('')
    const [done, setDone] = useState(false)
    const [owner, setOwner] = useState('')
    const [value, setValue] = useState('')

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
                setOwner(content.id)
            }
        )();
    })
    const submit = async (e) => {
        e.preventDefault()
        await fetch('http://127.0.0.1:8000/api/reviews/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                owner,
                value
            })
        })
        setDone(true)
    }
    if (name) {
        return (
            <Container maxWidth="sm" style={{marginTop: 20}}>
            <CssBaseline />
            <h1>Здравствуйте, {name}</h1>
                <form onSubmit={submit}>
                    <fieldset disabled={done}>
                        <legend>Оцените работу нашего сервиса</legend>
                        <div className="form-check form-check-inline">
                            <input onChange={e => setValue(e.target.value)} className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="1" />
                            <label className="form-check-label" for="inlineRadio1">1</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input onChange={e => setValue(e.target.value)} className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="2" />
                            <label className="form-check-label" for="inlineRadio1">2</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input onChange={e => setValue(e.target.value)} className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="3" />
                            <label className="form-check-label" for="inlineRadio1">3</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input onChange={e => setValue(e.target.value)} className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="4" />
                            <label className="form-check-label" for="inlineRadio1">4</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input onChange={e => setValue(e.target.value)} className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="5" />
                            <label className="form-check-label" for="inlineRadio1">5</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Оценить</button>
                    </fieldset>
                </form>
            </Container>
        );
    } else return <Alert severity="error">Пожалуйста, войдите на сайт</Alert>

};

Home.propTypes = {
    setNameGlobal: PropTypes.func
}

export default Home;
