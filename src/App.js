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

const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/AboutUs" element={<AboutUs />} />
                <Route path="/TravelLogueIndex" element={<TravelLogueIndex />} />
                <Route path="/TravelLogueShow" element={<TravelLogueShow />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
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
