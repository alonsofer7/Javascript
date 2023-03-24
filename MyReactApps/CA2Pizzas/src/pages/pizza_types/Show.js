import { useParams, useNavigate } from 'react-router-dom';
import axios from '../../config';
import { useEffect, useState } from 'react';
import PizzaCard from '../../components/PizzaCard';

const Show = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [ pizza_type, setPizza_type] = useState(null);

    let token = localStorage.getItem('token');

    const deleteCallback = (id) => {
        navigate('/pizza_types');
    };

    useEffect(() => {
        axios.get(`/pizza_types/${id}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
             .then((response) => {
                 console.log(response.data);
                 setPizza_type(response.data);
             })
             .catch((err) => {
                 console.error(err);
                 console.log(err.response.data.message);                 
             });
    }, [token, id]);

    if(!pizza_type) return "Loading...";

    return (
        <PizzaCard pizza_type={pizza_type} callback={deleteCallback}/>
    );
};

export default Show;