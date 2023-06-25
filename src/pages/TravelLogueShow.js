import { useParams } from 'react-router-dom';
import '../App.css';
import React from "react"
import { Card, CardImg, CardBody, CardText, CardTitle, CardSubtitle, Button, CardFooter } from "reactstrap"

const TravelLogueShow = ({trips}) => {
    const { id } = useParams()
    let currentTrip = trips?.find((trip) => trip.id === +id)

    return (
        <>
            <br />
            <h1 style={{color:"white"}}>Travelogue: Trip entry</h1>
            <main
                className='mx-auto my-5'
                style={{ 
                    display: "flex",
                    flexDirection:"row", 
                    flexWrap: "wrap",
                    justifyContent:"center"
                }}
            >
                {currentTrip && (
                    <>
                        <CardImg
                        alt="Photo from trip"
                        src={currentTrip.photo}
                        style={{ width:"50vw"}}
                        />
                        <Card>
                            <CardBody>
                                <CardTitle tag="h3">
                                    {currentTrip.title}
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-text-muted"
                                    tag="h5"
                                >
                                    {currentTrip.city}, {currentTrip.state}
                                    {currentTrip.country}, {currentTrip.region}
                                </CardSubtitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h5"
                                >
                                    arrived {currentTrip.start_date},  left  {currentTrip.end_date}
                                </CardSubtitle>
                                <CardText>
                                    {currentTrip.entry}
                                </CardText>
                            </CardBody>
                            <CardFooter>
                                <Button 
                                    color="primary"
                                    className="float-right"
                                    href={`/TravelLogueEdit/${currentTrip.id}`}>
                                    Edit
                                </Button>
                            </CardFooter>
                        </Card>
                    </>
                )}
            </main>
        </>
    )
}
export default TravelLogueShow;