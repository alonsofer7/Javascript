import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });
    const [errorMessage, setErrorMessage] = useState("");

    const styles = { color: "red", backgroundColor:"white" };

    const handleForm = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        // console.log(`${name}: ${value}`);

        // setForm({
        //     [name]: value
        // });

        // setForm((prevState) => {
        //     return {
        //         ...prevState,
        //         [name]: value
        //     }
        // });

        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const submitForm = () => {
        console.log("Email: ", form.email);
        console.log("Password: ", form.password);

        axios.post('https://festivals-api.vercel.app/api/users/login', {
                email: form.email,
                password: form.password
            })
             .then((response) => {
                console.log(response.data);
                setErrorMessage("");
             })
             .catch((err) => {
                console.error(err);
                console.log(err.response.data);
                setErrorMessage(err.response.data.message);
             });
    };

    // if(authenticated) return "You are logged in";

    return (
        <>
            Email: <input type="text" name="email" value={form.email} onChange={handleForm} />
            <br />
            Password: <input type="password" name="password" value={form.password} onChange={handleForm} />
            <button onClick={submitForm}>Submit</button>
            <p style={styles}>{errorMessage}</p>
        </>
    );
};

export default LoginForm;