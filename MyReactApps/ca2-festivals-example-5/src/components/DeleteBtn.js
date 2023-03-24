import DeleteIcon from '@mui/icons-material/Delete';
import  Button  from '@mui/material/Button';
import axios from '../config';

const DeleteBtn = (props) => {
    
const onDelete = () => {
    let token = localStorage.getItem('token');

    axios.delete(`/${props.resource}/${props.id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
         .then((response) => {
             console.log(response.data);
            //  navigate('/festivals'); no hace falta porque ya estamos en festivals
           
            props.callback(props.id);

         })
         .catch((err) => {
             console.error(err);
             console.log(err.response.data.message);                 
         });
};


    return (
        <Button 
                startIcon={<DeleteIcon />}
                variant='outlined'
                color='error'
                onClick={onDelete}
            >
                Delete
            </Button>
    );
};

export default DeleteBtn;