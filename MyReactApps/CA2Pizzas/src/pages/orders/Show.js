import { useParams, useNavigate } from 'react-router-dom';
import axios from '../../config';
import { useEffect, useState } from 'react';
import OrderCard from '../../components/OrderCard';

const Show = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [ order, setorder] = useState(null);

    let token = localStorage.getItem('token');

    const deleteCallback = (id) => {
        navigate('/orders');
    };

    useEffect(() => {
        axios.get(`/orders/${id}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
             .then((response) => {
                 console.log(response.data);
                 setorder(response.data);
             })
             .catch((err) => {
                 console.error(err);
                 console.log(err.response.data.message);                 
             });
    }, [token, id]);

    if(!order) return "Loading...";

    return (
        <OrderCard order={order} callback={deleteCallback}/>
    );
};

export default Show;