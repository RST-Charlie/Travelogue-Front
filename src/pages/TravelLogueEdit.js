import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap"
import { useParams, useNavigate } from 'react-router-dom';
import '../Styles/TravelLogueEdit.css';
import mockUsers from '../mockUsers'
import mockTrips from '../mockTrips'
import countries from '../components/Countries'
import regions from '../components/Regions'

const TravelLogueEdit = ({ trip, updateTrip, deleteTrip }) => {
    const [currentUser, setCurrentUser] = useState(mockUsers[0]);
    const [trips, setTrips] = useState(mockTrips);
    
    const [editTrip, setEditTrip] = useState({ ...trip });
  
    const handleChange = (e) => {
        setEditTrip({ ...editTrip, [e.target.name]: e.target.value });
    };
  
    const handleClick = () => {
        updateTrip(editTrip);
        window.location.href="/TravelLogueIndex"
    };
  
    const handleDelete = () => {
        deleteTrip(editTrip.id); 
    };
  
     
    return (
        <>
            <Form className="edit-trip-form mx-5 mt-5">
                <Row>
                    <Col className="form-group md-4">
                        <FormGroup>
                            <Label for="trip-title" className="form-label text-white">
                                Title*:
                            </Label>
                            <Input
                                id="trip-title"
                                type="text"
                                name="title"
                                placeholder="(Required) What trip did you go on?"
                                onChange={handleChange}
                                value={editTrip.title}
                            />
                        </FormGroup>
                    </Col>

                    <Col className="form-group col col-md-4">
                        <FormGroup>
                            <Label for="trip-photo" className="form-label text-white">
                                Photo:
                            </Label>
                            <Input
                                id="trip-photo"
                                type="text"
                                name="photo"
                                placeholder="Link your best photo here"
                                onChange={handleChange}
                                value={editTrip.photo}
                            />
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col className="form-group md-4">
                        <FormGroup>
                            <Label for="trip-city" className="form-label text-white">
                                City:
                            </Label>
                            <Input
                                id="trip-city"
                                type="text"
                                name="city"
                                placeholder="City visited"
                                onChange={handleChange}
                                value={editTrip.city}
                            />
                        </FormGroup>
                    </Col>

                    <Col className="form-group col col-md-4">
                        <FormGroup>
                            <Label for="trip-state" className="form-label text-white">
                                State:
                            </Label>
                            <Input
                                id="trip-state"
                                type="text"
                                name="state"
                                placeholder="State visited"
                                onChange={handleChange}
                                value={editTrip.state}
                            />
                        </FormGroup>
                    </Col>

                    <Col className="form-group col col-md-4">
                        <FormGroup>
                            <Label for="trip-country" className="form-label text-white">
                                Country*:
                            </Label>
                            <Input
                                id="trip-country"
                                type="select"
                                name="country"
                                placeholder='default'
                                onChange={handleChange}
                                value={editTrip.country}
                                className='text-secondary'>
                                {countries}
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col className="form-group md-4">
                        <FormGroup>
                            <Label for="trip-region" className="form-label text-white">
                                Region*:
                            </Label>
                            <Input
                                id="trip-region"
                                type="select"
                                name="region"
                                placeholder="default trip did you go on?"
                                className='text-secondary'
                                onChange={handleChange}
                                value={editTrip.region}>
                            {regions}
                            </Input>
                        </FormGroup>
                    </Col>

                    <Col className="form-group">
                        <FormGroup switch className='mt-4'>
                            <Label check for="trip-international" className="form-label text-white">
                                International?
                            </Label>
                            <Input
                                id="trip-international"
                                type="switch"
                                role='switch'
                                name="international"
                                onChange={handleChange}
                                value={editTrip.international}
                            />
                        </FormGroup>                    
                    </Col>

                    <Col className="form-group">
                        <FormGroup>
                            <Label for="trip-start_date" className="form-label text-white">
                                Start date:
                            </Label>
                            <Input
                                id="trip-start_date"
                                type="date"
                                name="start_date"
                                className='text-secondary'
                                onChange={handleChange}
                                value={editTrip.start_date}
                            />
                        </FormGroup>                    
                    </Col>

                    <Col className="form-group">
                        <FormGroup>
                            <Label for="trip-end_date" className="form-label text-white">
                                End date:
                            </Label>
                            <Input
                                id="trip-end_date"
                                type="date"
                                name="end_date"
                                className='text-secondary'
                                onChange={handleChange}
                                value={editTrip.end_date}
                            />
                        </FormGroup>                    
                    </Col>
                </Row>

                <Row>
                    <Col className='text-center'>
                        <FormGroup>
                            <Label for="trip-entry" className="form-label text-white">
                                Entry*:
                            </Label>
                            <Input
                                id="trip-entry"
                                type="textarea"
                                name="entry"
                                placeholder='(Required) How was your trip? Spill the deets!'
                                onChange={handleChange}
                                value={editTrip.entry}
                            />
                        </FormGroup>   
                    </Col>
                </Row>

                <Row>
                    <Col className='text-center'>
                        <Button onClick={handleClick}>
                            Confirm Changes!
                        </Button>
                        <Button onClick={handleDelete}>
                            Delete Trip
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    );
}

export default TravelLogueEdit;
