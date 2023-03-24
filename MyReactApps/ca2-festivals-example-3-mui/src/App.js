import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import './assests/css/app.css';
//import pages
import Home from './pages/Home';
import FestivalsIndex from './pages/festivals/Index';
import FestivalsShow from './pages/festivals/Show';
import FestivalsCreate from './pages/festivals/Create';
import PageNotFound from './pages/PageNotFound';

//import components
import Navbar from './components/Navbar';

const App = () => {
    const [authenticated, setAuthenticated] = useState(false);
    let protectedFestivals;

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
        protectedFestivals = ( //aqui se indica que secciones se pueden ver si estas autentificado
            <>
                <Route path="/festivals/:id" element={<FestivalsShow />} />
                <Route path="/festivals/create" element={<FestivalsCreate />} />
            </>
        );
    }

    return (
        <Router>
             {/* el navbar puede ir fuera del container por si es toda la pag o no */}
            <Container maxWidth="md">
                {/* <Grid container spacing ={2} > */}
                <Navbar onAuthenticated={onAuthenticated} authenticated={authenticated}/>
                <Routes>
                    <Route path="/" element={<Home onAuthenticated={onAuthenticated} authenticated={authenticated} />} />
                    <Route path="/festivals" element={<FestivalsIndex authenticated={authenticated} />} />
                    {protectedFestivals}

                    <Route path="*" element={<PageNotFound />} />
                </Routes>

                {/* </Grid> */}
              
            </Container>
        </Router>
    );
};

export default App;