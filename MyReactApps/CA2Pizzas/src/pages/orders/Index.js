import axios from '../../config';
import { useState, useEffect } from 'react';
import OrderCard from '../../components/OrderCard';

const Index = (props) => {
    const [ orders, setOrders ] = useState(null);

    useEffect(() => {
        axios.get('/orders')
             .then((response) => {
                 console.log(response.data);
                 setOrders(response.data);
             })
             .catch((err) => {
                 console.error(err);
             });
    }, []);


    if(!orders) return 'Loading...';

    const deleteCallback = (id) => {
        let ordersNew = orders.filter(order => {
            return order._id !== id;
        });

        setOrders(ordersNew);
    };

    const ordersList = orders.map((order) => {
        return <OrderCard key={order._id} order={order} authenticated={props.authenticated} callback={deleteCallback}/>;
    });

    return (
        <>
            <h2>Orders</h2>
            { ordersList }
        </>
    );
};

export default Index;