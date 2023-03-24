import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';

import DeleteBtn from './DeleteBtn';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const FestivalCard = (props) => {
    // const navigate = useNavigate();

    let price = <p><b>Price:</b> {props.pizzas.price} </p>;

    if(props.authenticated){
        price =  <p><b>Price of pizza:</b> <Link to={`/pizzas/${props.pizzas._id}`}>{props.pizzas.price}</Link> </p>;
    }

    return (
        <div>
            {pizza_id}
            <p><b>Price:</b> {props.pizzas.price}</p>
            <Button 
                component={Link} 
                to={`/pizzas/${props.pizzas._id}/edit`}
                startIcon={<EditIcon />}
                variant='outlined'
            >
                Edit
            </Button>
            <DeleteBtn id={props.pizzas._id} resource='pizzas' callback={props.callback} />
            <hr />
        </div>
    );
};

export default FestivalCard;