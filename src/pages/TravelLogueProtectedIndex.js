import React, { useEffect, useState } from 'react';
import { Card, CardGroup, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import mockTrips from '../mockTrips'
import ani from '../assets/turkey.jpg'
import sunset from '../assets/sunset.jpg'
import austrailia from '../assets/austrailia.jpeg'
import istockphoto from '../assets/istockphoto-147049964-612x612.jpg'

const TravelLogueProtectedIndex = ({ currentUser }) => {
  const [trips, setTrips] = useState({mockTrips});

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Make an API request to your backend server to fetch the trips
      const response = await fetch('/api/trips'); // Replace with your backend endpoint

      if (response.ok) {
        const data = await response.json();

        // Set the retrieved trips to the state
        setTrips(data);
      } else {
        console.error('Error fetching trips:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching trips:', error);
    }
  };

  return (
    <div className="container card-columns-3 mt-2 d-flex flex-wrap">
      <CardGroup>
        {mockTrips.map((trip) => (
          <Card key={trip.id} className="my-card">
            <CardImg className="card-img" alt={trip.title} src={trip.photo} top />
            <CardBody>
              <CardTitle tag="h5" className="card-title">
                {trip.title}
              </CardTitle>
              <CardText className="card-description">{trip.entry}</CardText>
              <div className="button-container">
                <Button className="btn-edit" color="secondary">
                  Edit
                </Button>
                <Button className="btn-delete" color="danger">
                  Delete
                </Button>
              </div>
            </CardBody>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
};

export default TravelLogueProtectedIndex;
