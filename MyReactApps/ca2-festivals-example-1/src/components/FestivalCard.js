import { Link } from 'react-router-dom';

const FestivalCard = (props) => {
    return (
        <div>
            <p><b>Title:</b> <Link to={`/festivals/${props.festival._id}`}>{props.festival.title}</Link> </p>
            <p><b>Description:</b> {props.festival.description}</p>
            <hr />
        </div>
    );
};

export default FestivalCard;