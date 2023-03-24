import axios from '../../config';
import { useState, useEffect } from 'react';
import PizzaCard from '../../components/PizzaCard';

const Index = (props) => {
    const [ pizzas, setPizzas ] = useState(null);

    useEffect(() => {
        axios.get('/pizzas')
             .then((response) => {
                 console.log(response.data);
                 setPizzas(response.data);
             })
             .catch((err) => {
                 console.error(err);
             });
    }, []);


    if(!pizzas) return 'Loading...';

    const deleteCallback = (id) => {
        let pizzasNew = pizzas.filter(pizza => {
            return pizza._id !== id;
        });

        setPizzas(pizzasNew);
    };

    const pizzasList = pizzas.map((pizza) => {
        return <PizzaCard key={pizza._id} pizza={pizza} authenticated={props.authenticated} callback={deleteCallback}/>;
    });

    return (
        <>
            <h2>Pizzas</h2>
            { pizzasList }
        </>
    );
};

export default Index;