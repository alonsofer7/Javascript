import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';

import DeleteBtn from './DeleteBtn';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const FestivalCard = (props) => {
    // const navigate = useNavigate();

    let title = <p><b>Title:</b> {props.festival.title} </p>;

    if(props.authenticated){
        title =  <p><b>Title:</b> <Link to={`/festivals/${props.festival._id}`}>{props.festival.title}</Link> </p>;
    }

    return (
        <div>
            {title}
            <p><b>Description:</b> {props.festival.description}</p>
            <Button 
                component={Link} 
                to={`/festivals/${props.festival._id}/edit`}
                startIcon={<EditIcon />}
                variant='outlined'
            >
                Edit
            </Button>
            <DeleteBtn id={props.festival._id} resource='festivals' callback={props.callback} />
            <hr />
        </div>
    );
};

export default FestivalCard;