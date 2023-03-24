import { useParams, useNavigate } from 'react-router-dom';
import axios from '../../config';
import { useEffect, useState } from 'react';
import PizzaCard from '../../components/PizzaCard';

const Show = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [ pizza, setPizza] = useState(null);

    let token = localStorage.getItem('token');

    const deleteCallback = (id) => {
        navigate('/pizzas');
    };

    useEffect(() => {
        axios.get(`/pizzas/${id}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
             .then((response) => {
                 console.log(response.data);
                 setPizza(response.data);
             })
             .catch((err) => {
                 console.error(err);
                 console.log(err.response.data.message);                 
             });
    }, [token, id]);

    if(!pizza) return "Loading...";

    return (
        <PizzaCard pizza={pizza} callback={deleteCallback}/>
    );
};

export default Show;