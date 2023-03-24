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
    const [ pizza, setPizza] = useState(null);
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();

    let token = localStorage.getItem('token');

    useEffect(() => {
        axios.get(`/pizzas/${id}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
             .then((response) => {
                 console.log(response.data);
                 setPizza(response.data);
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

        if(!isRequired(['pizza_type_id', 'size', 'price'])){

            axios.put(`/pizzas/${id}`, form, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
            })
             .then(response => {
                console.log(response.data);
                navigate('/pizzas');
             })
             .catch(err => {
                console.error(err);
                console.log(err.response.data.message)
                setErrors(err.response.data.errors);
             });
        }

    };



    

    if(!pizza) return "Loading...";



    return (
        <>
            <h2>Edit</h2>

            <div className='form-group'>
                <TextField 
                    variant='filled' 
                    label='Pizza type' 
                    name='pizza_type_id' 
                    onChange={handleForm}
                    error={errors.pizza_type_id}
                    helperText={errors.pizza_type_id?.message}
                    value={form.pizza_type_id}
                />
            </div>
            <div className='form-group'>
                <TextField 
                    multiline 
                    rows={4} 
                    variant='filled' 
                    label='Pizza size' 
                    name='size' 
                    onChange={handleForm}
                    error={errors.size}
                    helperText={errors.size?.message}
                    value={form.size}
                />
            </div>
            <div className='form-group'>
                <TextField 
                    variant='filled'
                    rows={2} 
                    label='Price'
                    name='price'
                    onChange={handleForm}
                    error={errors.price}
                    helperText={errors.price?.message}
                    value={form.price}
                />
            </div>

            <Button onClick={submitForm} variant='contained'>Submit</Button>
        </>
    );
};

export default Edit;