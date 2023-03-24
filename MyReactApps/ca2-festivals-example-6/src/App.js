import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import './assets/css/app.css';

//import pages
import Home from './pages/Home';
import FestivalsIndex from './pages/festivals/Index';
import FestivalsShow from './pages/festivals/Show';
import FestivalsCreate from './pages/festivals/Create';
import FestivalsEdit from './pages/festivals/Edit';

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
        protectedFestivals = (
            <>
                <Route path="/festivals/:id/edit" element={<FestivalsEdit />} />
                <Route path="/festivals/:id" element={<FestivalsShow />} />
                <Route path="/festivals/create" element={<FestivalsCreate />} />
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