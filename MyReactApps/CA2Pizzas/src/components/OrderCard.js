import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';

import DeleteBtn from './DeleteBtn';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const OrderCard = (props) => {
    // const navigate = useNavigate();

    let price = <p><b>Date:</b> {props.orders.date} </p>;

    if(props.authenticated){
        price =  <p><b>Date of order:</b> <Link to={`/orders/${props.orders._id}`}>{props.orders.date}</Link> </p>;
    }

    return (
        <div>
            {order_id}
            <p><b>Date:</b> {props.orders.dates}</p>
            <Button 
                component={Link} 
                to={`/orders/${props.orders._id}/edit`}
                startIcon={<EditIcon />}
                variant='outlined'
            >
                Edit
            </Button>
            <DeleteBtn id={props.orders._id} resource='orders' callback={props.callback} />
            <hr />
        </div>
    );
};

export default OrderCard;