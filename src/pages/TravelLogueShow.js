import { useParams } from 'react-router-dom';
import '../styles/Index.css';
import React from "react";
import { Card, CardImg, CardBody, CardText, CardSubtitle, Button, Container } from "reactstrap";
import '../styles/Index.css';

const TravelLogueShow = ({trips}) => {
    const { id } = useParams();
    let currentTrip = trips?.find((trip) => trip.id === +id);

    return (
        <>
            <Container className="travelogue-cont">
                <p className="travelogue-title">
                    Travelogue:
                </p>
                <p className="travelogue">
                    {currentTrip.title}
                </p>
            </Container>
            <main className="mx-auto my-5" style={{ 
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center"
            }}>
                {currentTrip && (
                    <>
                        <CardImg
                            alt="Photo from trip"
                            src={currentTrip.photo}
                            className="travelogue-image"
                        />
                        <Card className="travelogue-card">
                            <CardBody>
                                <CardSubtitle className="travelogue-card-subtitle" tag="h5">
                                    {currentTrip.city}, {currentTrip.state}
                                    <br />
                                    {currentTrip.country}, {currentTrip.region}
                                </CardSubtitle>

                                <CardSubtitle className="travelogue-card-subtitle" tag="h5">
                                    Arrived: {currentTrip.start_date}
                                    <br />
                                    Departed: {currentTrip.end_date}
                                </CardSubtitle>
                                
                                <CardText>
                                    {currentTrip.entry}
                                </CardText>
                            </CardBody>
                            <div className="travelogue-btn-cont">
                                <Button className="btn-details" color="secondary" disabled>
                                    Edit travelogue
                                </Button>
                                <Button className="btn-details" color="secondary" disabled>
                                    Delete travelogue
                                </Button>
                                <Button className="btn-details" color="secondary" href={`/demotrips`}>
                                    Back to all
                                </Button>
                            </div>
                        </Card>
                    </>
                )}
            </main>
            <br />
            <br />
        </>
    );
}

export default TravelLogueShow;

