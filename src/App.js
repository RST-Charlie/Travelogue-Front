import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import TravelLogueEdit from './pages/TravelLogueEdit';
import TravelLogueIndex from './pages/TravelLogueIndex';
import TravelLogueNew from './pages/TravelLogueNew';
import TravelLogueProtectedIndex from './pages/TravelLogueProtectedIndex';
import TravelLogueShow from './pages/TravelLogueShow';
import Header from './components/Header';
import Footer from './components/Footer';

// Did not complete any work due to time constraints for header, however, I noticed react-strap was not loaded as a dependency.  I added react-strap --ST
const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/AboutUs" element={<AboutUs />} />
                <Route path="/TravelLogueIndex" element={<TravelLogueIndex />} />
                <Route path="/TravelLogueShow" element={<TravelLogueShow />} />
                <Route path="/SignIn" element={<SignIn />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/TravelLogueProtectedIndex"element={<TravelLogueProtectedIndex />}/>
                <Route path="/TravelLogueNew" element={<TravelLogueNew />} />
                <Route path="/TravelLogueEdit" element={<TravelLogueEdit />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
