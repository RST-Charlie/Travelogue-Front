import React from 'react';
import { Card, CardGroup, CardImg, CardBody, CardTitle, Button, NavLink } from "reactstrap"

const TravelLogueProtectedIndex = ({ currentUser, trips }) => {
    const myTrips = trips?.filter(trip => currentUser?.id === trip.user_id)
    return (
        <>
            <CardGroup>
                {myTrips?.map((trip, index) => {
                    return (
                        <Card key={index}>
                            <CardImg
                                alt="Fun in the sun!!/"
                                src={trip.image}
                                top
                                width="100%"
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    Located in {trip.country}
                                </CardTitle>
                                <Button>
                                    <NavLink href={`/TravelLogueShow/${trip.id}`}>
                                        More Details
                                    </NavLink>
                                </Button>
                                <Button>
                                    Edit
                                </Button>
                                <Button>
                                    Delete
                                </Button>
                            </CardBody>
                        </Card>
                    )
                })}
            </CardGroup>
        </>
    )
}

export default TravelLogueProtectedIndex;
