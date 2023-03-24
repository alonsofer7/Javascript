import { useParams, useNavigate } from 'react-router-dom';
import axios from '../../config';
import { useEffect, useState } from 'react';
import FestivalCard from '../../components/FestivalCard';

const Show = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [ festival, setFestival] = useState(null);

    let token = localStorage.getItem('token');

    const deleteCallback = (id) => {
        navigate('/festivals');
    };

    useEffect(() => {
        axios.get(`/festivals/${id}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
             .then((response) => {
                 console.log(response.data);
                 setFestival(response.data);
             })
             .catch((err) => {
                 console.error(err);
                 console.log(err.response.data.message);                 
             });
    }, [token, id]);

    if(!festival) return "Loading...";

    return (
        <FestivalCard festival={festival} callback={deleteCallback}/>
    );
};

export default Show;