import React from "react"
import { Card, CardBody, CardTitle, CardSubtitle, Button, Container } from "reactstrap"

const TravelLogueIndex = ({trips}) => {

    return(
        <Container 
            className="card-columns-3 mt-2"
            style={{ 
                display: "flex",
                flexDirection:"row", 
                flexWrap: "wrap",
            }}
        >
            {trips?.map((trip, index) => {
                return(
                    <Card 
                        key={index} 
                        style={{width: "15rem",
                        }}
                        className="
                            each-card
                            text-center
                            my-3 mx-auto"
                    >
                        <img 
                            alt={`Photo from a trip to ${trip.country}`}
                            src={trip.photo}
                        />

                        <CardBody>
                            <CardTitle tag="h5">
                                {trip.title}
                            </CardTitle>
                            <CardSubtitle
                                className="text-muted"
                            >
                                {trip.country}
                            </CardSubtitle>  

                            <CardSubtitle
                                className="text-muted"
                            >
                                {trip.start_date} to {trip.end_date}
                            </CardSubtitle>      
                        </CardBody>
                        <Button 
                            color="info"
                            href={`/TravelLogueShow/${trip.id}`}
                        >
                                See travelogue
                        </Button>
                        <Button 
                            color="primary"
                            href={`/TravelLogueEdit/${trip.id}`}>
                                Edit
                        </Button>
                    </Card>
                )
            })}
        </Container> 
    )
}

export default TravelLogueIndex;