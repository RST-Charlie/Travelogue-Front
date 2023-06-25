import React from 'react';
import { Card, CardGroup, CardImg, CardBody, CardTitle, CardText, Button, NavLink } from 'reactstrap';
import '../Styles/TravelLogueProtectedIndex.css';
import mockTrips from '../mockTrips';
import picture from '../assets/istockphoto-147049964-612x612.jpg';

const TravelLogueProtectedIndex = ({ currentUser }) => {
  const myTrips = mockTrips.filter(trip => currentUser?.id === trip.user_id);
  return (
    <div className="container">
      <CardGroup>
        {myTrips.map(trip => (
          <Card key={trip.id} className="my-card">
            <CardImg
              className="card-img"
              alt="Fun in the sun!!"
              src={picture}
              top
            />
            <CardBody>
              <CardTitle tag="h5" className="card-title">
                Located in Bahamas
              </CardTitle>
              <CardText className="card-description">
                Fun in the sun!
              </CardText>
              <div className="button-container">
                <Button className="btn-details" color="primary">
                  <NavLink href={`/TravelLogueShow/${trip.id}`}>More Details</NavLink>
                </Button>
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
