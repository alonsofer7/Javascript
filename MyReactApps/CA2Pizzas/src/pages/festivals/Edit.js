import { useState, useEffect } from 'react';
import axios from '../../config';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/Textfield';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';
import { useParams } from 'react-router-dom';

const Edit = () => {
    const [ festival, setFestival] = useState(null);
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();

    let token = localStorage.getItem('token');

    useEffect(() => {
        axios.get(`/festivals/${id}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
             .then((response) => {
                 console.log(response.data);
                 setFestival(response.data);
                 setForm(response.data);
             })
             .catch((err) => {
                 console.error(err);
                 console.log(err.response.data.message);                 
             });
    }, [token, id]);

    const handleForm = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const isRequired = (fields) => {
        let error = false;

        fields.forEach(field => {
            if(!form[field]){
                error = true;
                setErrors(prevState => ({
                    ...prevState,
                    [field]: {
                        message: `${field} is required!!!!`
                    }
                }));
            }
        });

        return error;
    };

    const submitForm = () => {

        if(!isRequired(['title', 'description', 'city', 'start_date'])){

            axios.put(`/festivals/${id}`, form, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
            })
             .then(response => {
                console.log(response.data);
                navigate('/festivals');
             })
             .catch(err => {
                console.error(err);
                console.log(err.response.data.message)
                setErrors(err.response.data.errors);
             });
        }

    };



    

    if(!festival) return "Loading...";



    return (
        <>
            <h2>Edit</h2>

            <div className='form-group'>
                <TextField 
                    variant='filled' 
                    label='Title' 
                    name='title' 
                    onChange={handleForm}
                    error={errors.title}
                    helperText={errors.title?.message}
                    value={form.title}
                />
            </div>
            <div className='form-group'>
                <TextField 
                    multiline 
                    rows={4} 
                    variant='filled' 
                    label='Description' 
                    name='description' 
                    onChange={handleForm}
                    error={errors.description}
                    helperText={errors.description?.message}
                    value={form.description}
                />
            </div>
            <div className='form-group'>
                <FormControl variant='filled' fullWidth error={errors.city}>
                    <InputLabel id='city-select'>City</InputLabel>
                    <Select labelId='city-select' name='city' label='City' onChange={handleForm} value={form.city}>
                        <MenuItem value='Dublin'>Dublin</MenuItem>
                        <MenuItem value='Cork'>Cork</MenuItem>
                        <MenuItem value='Galway'>Galway</MenuItem>
                        <MenuItem value='Mayo'>Mayo</MenuItem>
                        <MenuItem value='Wexford'>Dublin</MenuItem>
                    </Select>
                    <FormHelperText>{errors.city?.message}</FormHelperText>
                </FormControl>
            </div>
            <div className='form-group'>
                <TextField 
                    variant='filled'
                    label='Start Date'
                    type='datetime-local'
                    name='start_date'
                    onChange={handleForm}
                    InputLabelProps={{ shrink: true }}
                    error={errors.start_date}
                    helperText={errors.start_date?.message}
                    value={form.start_date}
                />
            </div>
            <div className='form-group'>
                <TextField 
                    variant='filled'
                    label='End Date'
                    type='datetime-local'
                    name='end_date'
                    onChange={handleForm}
                    InputLabelProps={{ shrink: true }}
                    error={errors.end_date}
                    helperText={errors.end_date?.message}
                    defaultValue={form.end_date}
                />
            </div>

            <Button onClick={submitForm} variant='contained'>Submit</Button>
        </>
    );
};

export default Edit;