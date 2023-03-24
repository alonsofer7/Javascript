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
    const [ pizza_type, setPizza_type] = useState(null);
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();

    let token = localStorage.getItem('token');

    useEffect(() => {
        axios.get(`/pizza-types/${id}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
             .then((response) => {
                 console.log(response.data);
                 setPizza_type(response.data);
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

        if(!isRequired(['name', 'category', 'ingredients'])){

            axios.put(`/pizza_types/${id}`, form, {
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



    

    if(!pizza_type) return "Loading...";



    return (
        <>
            <h2>Edit</h2>

            <div className='form-group'>
                <TextField 
                    variant='filled' 
                    label='Name' 
                    name='name' 
                    onChange={handleForm}
                    error={errors.name}
                    helperText={errors.name?.message}
                    value={form.name}
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
                    value={form.category} // string final aqui
                />
            </div>
            <div className='form-group'>
                <TextField 
                    variant='filled'
                    rows={2} 
                    label='Ingredietns'
                    name='ingredients'
                    onChange={handleForm}
                    error={errors.ingredients}
                    helperText={errors.ingredients?.message}
                    value={form.ingredients}
                />
            </div>

            <Button onClick={submitForm} variant='contained'>Submit</Button>
        </>
    );
};

export default Edit;