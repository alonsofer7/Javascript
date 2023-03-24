import { useState } from 'react';
import axios from 'axios';
import { Form, userNavigate } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import  TextField  from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import  MenuItem  from '@mui/material/MenuItem';

const Create = () => {
    const [form, setForm] = useState({});

    const handleForm = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const submitForm = () => {

        let token = localStorage.getItem('token');

        axios.post('https://festivals-api.vercel.app/api/festivals/', { //data en el primer objeto, headers en el 2o

        }, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then(response => {
            console.log(response.data);
            // navigate('/');
        })
        .catch(err => {
            console.error(err);
            console.log(err.response.data)
        })
    };  
    return (
    <>
        <h2>Create</h2>
        <div className='form-group'>
            <TextField variant="filled" label='Title' name='title' onChange={handleForm}/>
        </div>

        <div className='form-group'>
            <FormControl fullWidth>
                <InputLabel id='city-select'>City</InputLabel>
                <Select labelId='city-select' name='city'label='City' onChange={handleForm}>
                    <MenuItem value='Dublin'>Dublin</MenuItem>
                    <MenuItem value='NotDublin'>NotDublin</MenuItem>

                </Select>
            </FormControl>
        </div>
    </>
    );
};

export default Create;