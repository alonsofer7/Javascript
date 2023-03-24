import axios from 'axios';
import { useState, useEffect } from 'react';
import FestivalCard from '../../components/FestivalCard';

const Index = (props) => {
    const [ festivals, setFestivals ] = useState(null);

    useEffect(() => {
        axios.get('https://festivals-api.vercel.app/api/festivals')
             .then((response) => {
                 console.log(response.data);
                 setFestivals(response.data);
             })
             .catch((err) => {
                 console.error(err);
             });
    }, []);


    if(!festivals) return 'Loading...';

    const festivalsList = festivals.map((festival) => {
        return <FestivalCard festival={festival} authenticated={props.authenticated}/>;
    });

    return (
        <>
            <h2>Festivals</h2>
            { festivalsList }
        </>
    );
};

export default Index;