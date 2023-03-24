import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import './assets/css/app.css';

//import pizza pages
import Home from './pages/Home';
import PizzasIndex from './pages/pizzas/Index';
import PizzasShow from './pages/pizzas/Show';
import PizzasCreate from './pages/pizzas/Create';
import PizzasEdit from './pages/pizzas/Edit';

//import pizza pages
import Home from './pages/Home';
import Pizza_typesIndex from './pages/pizzas/Index';
import PizzasShow from './pages/pizzas/Show';
import PizzasCreate from './pages/pizzas/Create';
import PizzasEdit from './pages/pizzas/Edit';

import PageNotFound from './pages/PageNotFound';

//import components
import Navbar from './components/Navbar';

const App = () => {
    const [authenticated, setAuthenticated] = useState(false);
    let protectedpizzas;

    useEffect(() => {
        if(localStorage.getItem('token')) {
            setAuthenticated(true);
        }
    }, []);

    const onAuthenticated = (auth, token) => {
        setAuthenticated(auth);
        
        if(auth){
            localStorage.setItem('token', token);
        }
        else {
            localStorage.removeItem('token');
        }
    };


    if(authenticated){
        protectedpizzas = (
            <>
                <Route path="/pizzas/:id/edit" element={<PizzasEdit />} />
                <Route path="/pizzas/:id" element={<PizzasShow />} />
                <Route path="/pizzas/create" element={<PizzasCreate />} />

                <Route path="/pizza_types/:id/edit" element={<Pizza_typesEdit />} />
                <Route path="/pizza_types/:id" element={<PizzasShow />} />
                <Route path="/pizza_types/create" element={<PizzasCreate />} />
            </>
        );
    }

    return (
        <Router>
            <Container maxWidth="md">
                {/* <Grid container spacing={0} > */}
                    <Navbar onAuthenticated={onAuthenticated} authenticated={authenticated}/>
                    <Routes>
                        <Route path="/" element={<Home onAuthenticated={onAuthenticated} authenticated={authenticated} />} />
                        <Route path="/pizzas" element={<PizzasIndex authenticated={authenticated} />} />
                        {protectedpizzas}

                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                {/* </Grid> */}
            </Container>
        </Router>
    );
};

export default App;