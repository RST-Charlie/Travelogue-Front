import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import TravelLogueEdit from './pages/TravelLogueEdit';
import TravelLogueIndex from './pages/TravelLogueIndex';
import TravelLogueNew from './pages/TravelLogueNew';
import TravelLogueProtectedIndex from './pages/TravelLogueProtectedIndex';
import TravelLogueShow from './pages/TravelLogueShow';
import Header from './components/Header';
import Footer from './components/Footer';
import mockUsers from './mockUsers'
import mockTrips from './mockTrips'

const App = () => {
    const [currentUser, setCurrentUser] = useState(mockUsers[0]);
    const [trips, setTrips] = useState(mockTrips);

    const createTrip = (createdTrip) => {
        console.log(createdTrip);
    }
    const updateTrip = (updatedTrip) => {
        console.log(updatedTrip);
    }
    const deleteTrip = (deleteTrip) => {
        console.log(deleteTrip);
    }
    const url = "http://localhost:3000";

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/AboutUs" element={<AboutUs />} />
                <Route path="/TravelLogueIndex" element={<TravelLogueIndex />} />
                <Route path="/TravelLogueShow" element={<TravelLogueShow />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/TravelLogueProtectedIndex" element={<TravelLogueProtectedIndex />} />
                <Route path="/TravelLogueNew" element={<TravelLogueNew createTrip={createTrip} />} />
                <Route path="/TravelLogueEdit" element={<TravelLogueEdit updateTrip={updateTrip} deleteTrip={deleteTrip} />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App;
