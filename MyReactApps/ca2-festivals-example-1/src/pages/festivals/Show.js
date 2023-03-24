import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

const Show = () => {
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://festivals-api.vercel.app/api/festivals/${id}`)
             .then((response) => {
                 console.log(response.data);
             })
             .catch((err) => {
                 console.error(err);
                 console.log(err.response.data.message);
                 
             });
    }, []);

    return ("Hi from festivals Show");
};

export default Show;