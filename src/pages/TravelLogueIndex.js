import React from "react"
import '../Styles/index.css'
import { Card, CardBody, CardTitle, CardSubtitle, Button, Container, CardImg } from "reactstrap"

const TravelLogueIndex = ({trips}) => {

    return(
        <Container 
            className="
                d-flex
                flex-wrap
                justify-content-center
                align-items-center
                card-columns-3 
                mt-2 px-2 py-2
                align-items center"
        >
            {trips?.map((trip, index) => {
                return(
                    <Card 
                        key={index} 
                        hover
                        style={{
                            width:"19rem",
                            height: "25rem"
                        }}
                        className="
                            my-card
                            each-card
                            my-4 mx-4
                            shadow-5"
                    >
                        <CardImg 
                            alt={`Photo from a trip to ${trip.country}`}
                            src={trip.photo}
                            style={{
                                width:"100%",
                                height:"60%",
                                position:"relative"
                            }}
                        />

                        <CardBody className="px-3 py-4">
                            <CardTitle 
                                className="card-title"
                            >
                                {trip.title}
                            </CardTitle>
                            <CardSubtitle
                                className="text-muted"
                            >
                                {trip.country}
                            </CardSubtitle>  
                            <div 
                                className="
                                    justify-content-between
                                    align-items-center
                                    text-center">
                                <Button 
                                    className="btn-details mt-3 text-center"
                                    color="info"
                                    href={`/demotrips/${trip.id}`}
                                >   
                                    See travelogue
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                )
            })}
        </Container> 
    )
}

export default TravelLogueIndex;