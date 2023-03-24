import axios from '../../config';
import { useState, useEffect } from 'react';
import PizzaCard from '../../components/PizzaCard';

const Index = (props) => {
    const [ pizza_types, setPizza_types ] = useState(null);

    useEffect(() => {
        axios.get('/pizza_types')
             .then((response) => {
                 console.log(response.data);
                 setPizza_types(response.data);
             })
             .catch((err) => {
                 console.error(err);
             });
    }, []);


    if(!pizza_types) return 'Loading...';

    const deleteCallback = (id) => {
        let pizza_typesNew = pizza_types.filter(pizza_types => {
            return pizza_types._id !== id;
        });

        setPizza_types(pizza_typesNew);
    };

    const pizza_typesList = pizza_types.map((pizza_types) => {
        return <PizzaCard key={pizza_types._id} pizza_type={pizza_types} authenticated={props.authenticated} callback={deleteCallback}/>;
    });

    return (
        <>
            <h2>Pizza types</h2>
            { pizza_typesList }
        </>
    );
};

export default Index;