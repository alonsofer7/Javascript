import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//import pages
import Home from './pages/Home';
import FestivalsIndex from './pages/festivals/Index';
import FestivalsShow from './pages/festivals/Show';

//import components
import Navbar from './components/Navbar';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/festivals" element={<FestivalsIndex />} />
                <Route path="/festivals/:id" element={<FestivalsShow />} />
            </Routes>
        </Router>
    );
};

export default App;