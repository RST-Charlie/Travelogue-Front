import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useParams, useNavigate } from 'react-router-dom';
import '../Styles/TravelLogueEdit.css';

const TravelLogueEdit = ({ trip, updateTrip, deleteTrip }) => {
    const { id } = useParams();
    let currentTrip = trip?.find((trip) => trip.id === +id);

    const [editTrip, setEditTrip] = useState({
        title: currentTrip ? currentTrip.title : '',
        entry: currentTrip ? currentTrip.entry : '',
        photo: currentTrip ? currentTrip.photo : '',
        start_date: currentTrip ? currentTrip.start_date : '',
        end_date: currentTrip ? currentTrip.end_date : '',
        city: currentTrip ? currentTrip.city : '',
        state: currentTrip ? currentTrip.state : '',
        country: currentTrip ? currentTrip.country : '',
        region: currentTrip ? currentTrip.region : '',
        international: currentTrip ? currentTrip.international : false,
    });

    const handleChange = (e) => {
        setEditTrip({ ...editTrip, [e.target.name]: e.target.value });
    };

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentTrip) {
            updateTrip(editTrip, currentTrip.id);
            navigate('/TravelLogueIndex');
        } else {
            console.error('Trip not found!');
        }
    };

    const handleDelete = () => {
        if (currentTrip) {
            deleteTrip(currentTrip.id);
            navigate('/TravelLogueIndex');
        } else {
            console.error('Trip not found!');
        }
    };

    return (
        <>
            <Form id="formstyle" onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input type="text" name="title" onChange={handleChange} value={editTrip.title} />
                </FormGroup>

                <FormGroup>
                    <Label for="entry">Entry</Label>
                    <Input type="text" name="entry" onChange={handleChange} value={editTrip.entry} />
                </FormGroup>

                <FormGroup>
                    <Label for="photo">Photo</Label>
                    <Input type="text" name="photo" onChange={handleChange} value={editTrip.photo} />
                </FormGroup>

                <FormGroup>
                    <Label for="start_date">Start Date</Label>
                    <Input type="date" name="start_date" onChange={handleChange} value={editTrip.start_date} />
                </FormGroup>

                <FormGroup>
                    <Label for="end_date">End Date</Label>
                    <Input type="date" name="end_date" onChange={handleChange} value={editTrip.end_date} />
                </FormGroup>

                <FormGroup>
                    <Label for="city">City</Label>
                    <Input type="text" name="city" onChange={handleChange} value={editTrip.city} />
                </FormGroup>

                <FormGroup>
                    <Label for="state">State</Label>
                    <Input type="text" name="state" onChange={handleChange} value={editTrip.state} />
                </FormGroup>

                <FormGroup>
                    <Label for="country">Country</Label>
                    <Input type="text" name="country" onChange={handleChange} value={editTrip.country} />
                </FormGroup>

                <FormGroup>
                    <Label for="region">Region</Label>
                    <Input type="text" name="region" onChange={handleChange} value={editTrip.region} />
                </FormGroup>

                <FormGroup>
                    <Label for="international">International</Label>
                    <Input
                        type="checkbox"
                        name="international"
                        onChange={handleChange}
                        checked={editTrip.international}
                    />
                </FormGroup>

                <div className="button-container">
                    <Button onClick={handleSubmit} name="submit">
                        Submit Updated Trip
                    </Button>

                    <Button onClick={handleDelete} name="delete">
                        Delete Trip
                    </Button>
                </div>
            </Form>
        </>
    );
};

export default TravelLogueEdit;
