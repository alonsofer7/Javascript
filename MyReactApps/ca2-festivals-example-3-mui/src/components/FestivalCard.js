import { Link } from 'react-router-dom';

const FestivalCard = (props) => {

    let title = <p><b>Title:</b> {props.festival.title} </p>;

    if(props.authenticated){
        title =  <p><b>Title:</b> <Link to={`/festivals/${props.festival._id}`}>{props.festival.title}</Link> </p>;
    }

    return (
        <div>
            {title}
            <p><b>Description:</b> {props.festival.description}</p>
            <hr />
        </div>
    );
};

export default FestivalCard;