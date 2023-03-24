import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import FestivalCard from '../../components/FestivalCard';

const Show = () => {
    const { id } = useParams();
    const [ festival, setFestival] = useState(null);

    useEffect(() => {
        axios.get(`https://festivals-api.vercel.app/api/festivals/${id}`, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbUBibG9nZ3MuY29tIiwiZnVsbF9uYW1lIjoic2FtIGJsb2dncyIsIl9pZCI6IjQxMjI0ZDc3NmEzMjZmYjQwZjAwMDAwMSIsImlhdCI6MTY2OTAzNzMxMX0.s1zz84JzS6rPHRyIk2FwtXq4rJO5XvzbmEYSANESgA0"
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
    }, []);

    if(!festival) return "Loading...";

    return (
        <FestivalCard festival={festival} />
    );
};

export default Show;