import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import FestivalCard from '../../components/FestivalCard';

const Show = () => {
    const { id } = useParams();
    const [ festival, setFestival] = useState(null);

    let token = localStorage.getItem('token');

    useEffect(() => {
        axios.get(`https://festivals-api.vercel.app/api/festivals/${id}`, {
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
        <FestivalCard festival={festival} />
    );
};

export default Show;