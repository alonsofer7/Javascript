import { useState } from 'react';
import axios from '../../config';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/Textfield';
import Button from '@mui/material/Button';

const Create = () => {
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

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
            let token = localStorage.getItem('token');

            axios.post('/pizzas', form, {
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

    return (
        <>
            <h2>Create your pizza</h2>

            <div className='form-group'>
                <TextField 
                    variant='filled' 
                    label='pizza_type_id' 
                    name='pizza_type_id' 
                    onChange={handleForm}
                    error={errors.pizza_type_id}
                    helperText={errors.pizza_type_id?.message}
                />
            </div>
            <div className='form-group'>
                <TextField 
                    multiline 
                    rows={4} 
                    variant='filled' 
                    label='Size' 
                    name='size' 
                    onChange={handleForm}
                    error={errors.size}
                    helperText={errors.size?.message}
                />
            </div>
            
            <div className='form-group'>
                <TextField 
                    variant='filled'
                    label='Price'
                    name='price'
                    error={errors.price}
                    helperText={errors.price?.message}
                />
            </div>

            <Button onClick={submitForm} variant='contained'>Submit</Button>
        </>
    );
};

export default Create;