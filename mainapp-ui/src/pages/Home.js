import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';

const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);


const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        paddingTop: 15,
        paddingBottom: 20,
    },
}));

const Home = ({ setNameGlobal }) => {
    const classes = useStyles();
    const [name, setName] = useState('')
    const [done, setDone] = useState(false)
    const [owner, setOwner] = useState('')
    const [value, setValue] = useState(3)

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
            <Container component="main" maxWidth="xl" className={classes.container}>
            <CssBaseline />
            <Typography style={{textAlign: 'center'}} variant="h4" component="h1" gutterBottom>Здравствуйте, {name}</Typography>
            <Typography variant="body1" gutterBottom style={{marginBottom: 20}}>
            Worker — один из лучших сайтов по поиску работы и сотрудников в мире. 
            Мы создаем передовые технологии на всех доступных платформах для того, чтобы работодатели могли быстро найти подходящего сотрудника, 
            а соискатели — хорошую работу. Наши мобильные приложения стабильно занимают первые места в категории «Бизнес» на всех платформах. 
            Каждый месяц на сайте появляется более полумиллиона вакансий, а технологии для работы с персоналом насчитывают более 30 позиций. 
            Ежедневно мы помогаем сотням тысяч человек изменить свою жизнь к лучшему.
            </Typography>
            <Paper style={{display: 'flex' ,flexDirection: 'column' , alignItems: 'center', paddingBottom: 15, paddingTop: 10}} elevation={3}>
            <Typography style={{textAlign:'center'}} variant="h5" component="h2" gutterBottom>
                Оцените работу нашего сервиса
            </Typography>
                <form onSubmit={submit}>
                    <fieldset disabled={done} style={{display: 'flex', flexDirection: 'column' , alignItems: 'center'}}>
                    <div style={{marginBottom: 10}}>
                        <Radio
                            checked={value == 1}
                            onChange={e => setValue(e.target.value)}
                            value="1"
                            name="radio-button-demo"
                            inputProps={{ 'aria-label': '1' }}
                        />
                        <Radio
                            checked={value == 2}
                            onChange={e => setValue(e.target.value)}
                            value="2"
                            name="radio-button-demo"
                            inputProps={{ 'aria-label': '2' }}
                        />
                        <Radio
                            checked={value == 3}
                            onChange={e => setValue(e.target.value)}
                            value="3"
                            name="radio-button-demo"
                            inputProps={{ 'aria-label': '3' }}
                            color="default"
                        />
                        <GreenRadio
                            checked={value == 4}
                            onChange={e => setValue(e.target.value)}
                            value="4"
                            name="radio-button-demo"
                            inputProps={{ 'aria-label': '4' }}
                        />
                        <GreenRadio
                            checked={value == 5}
                            onChange={e => setValue(e.target.value)}
                            value="5"
                            name="radio-button-demo"
                            inputProps={{ 'aria-label': '5' }}
                        />
                        </div>
                        <Button type="submit" variant="contained" color="primary">
                        Оценить
                        </Button>
                    </fieldset>
                </form>
            </Paper>
            </Container>
        );
    } else return <Alert severity="error">Пожалуйста, войдите на сайт</Alert>

};

Home.propTypes = {
    setNameGlobal: PropTypes.func
}

export default Home;
