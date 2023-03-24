import axios from '../../config';
import { useState, useEffect } from 'react';
import FestivalCard from '../../components/FestivalCard';

const Index = (props) => {
    const [ festivals, setFestivals ] = useState(null);

    useEffect(() => {
        axios.get('/festivals')
             .then((response) => {
                 console.log(response.data);
                 setFestivals(response.data);
             })
             .catch((err) => {
                 console.error(err);
             });
    }, []);


    if(!festivals) return 'Loading...';

    const deleteCallback = (id) => {        
         let festivalsNew = festivals.filter(festival => {
            return festival._id !== id;
                }); 

                setFestivals(festivalsNew);

    };


    const festivalsList = festivals.map((festival) => {
        return <FestivalCard festival={festival._id} authenticated={props.authenticated} callback= {deleteCallback}/>;
    });

    return (
        <>
            <h2>Festivals</h2>
            { festivalsList }
        </>
    );
};

export default Index;