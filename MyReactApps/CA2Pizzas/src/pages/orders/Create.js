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

        if(!isRequired(['date', 'time'])){
            let token = localStorage.getItem('token');

            axios.post('/orders', form, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
            })
             .then(response => {
                console.log(response.data);
                navigate('/orders');
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
            <h2>Create your pizza order</h2>

            <div className='form-group'>
                <TextField 
                    variant='filled'
                    label='Date'
                    type='datetime-local'
                    name='date'
                    onChange={handleForm}
                    InputLabelProps={{ shrink: true }}
                    error={errors.date}
                    helperText={errors.date?.message}
                />
            </div>

            {/* <div className='form-group'> poner correctamente form de tiempo 
                <TextField 
                    variant='filled'
                    label='Date'
                    type='datetime-local'
                    name='date'
                    onChange={handleForm}
                    InputLabelProps={{ shrink: true }}
                    error={errors.date}
                    helperText={errors.date?.message}
                />
            </div> */}

            <Button onClick={submitForm} variant='contained'>Submit</Button>
        </>
    );
};

export default Create;