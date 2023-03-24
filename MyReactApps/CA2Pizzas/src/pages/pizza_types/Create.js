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

        if(!isRequired(['name', 'category', 'ingredients'])){
            let token = localStorage.getItem('token');

            axios.post('/pizza_types', form, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
            })
             .then(response => {
                console.log(response.data);
                navigate('/pizza_types');
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
                    label='name' 
                    name='name' 
                    onChange={handleForm}
                    error={errors.name}
                    helperText={errors.name?.message}
                />
            </div>
            <div className='form-group'>
                <TextField 
                    multiline 
                    rows={4} 
                    variant='filled' 
                    label='Category' 
                    name='category' 
                    onChange={handleForm}
                    error={errors.category}
                    helperText={errors.category?.message}
                />
            </div>
            
            <div className='form-group'>
                <TextField 
                    variant='filled'
                    label='Ingredients'
                    type='datetime-local'
                    name='ingredients'
                    error={errors.ingredients}
                    helperText={errors.ingredients?.message}
                />
            </div>

            <Button onClick={submitForm} variant='contained'>Submit</Button>
        </>
    );
};

export default Create;