import React, { useState } from 'react' 
import { Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap"


const TravelLogueNew = ({ createTrip }) => {
    const [newTrip, setNewTrip] = useState({
        title: "",
        entry: "",
        photo: "",
        start_date: "",
        end_date: "",
        city: "",
        state: "",
        country: "",
        region: "",
        international: false
    })

    const handleChange = (e) => {
        setNewTrip({ ...newTrip, [e.target.name]: e.target.value })
    }
    const handleClick = () => {
        createTrip(newTrip)
    }

    return (
        <>
            <Form className="new-trip-form mx-5 mt-5">
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
                                value={newTrip.title}
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
                                value={newTrip.photo}
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
                                value={newTrip.city}
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
                                value={newTrip.state}
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
                                value={newTrip.country}
                                className='text-secondary'
                            >
                                <option>(Required) Select country visited</option>
                                <option>Afghanistan, Islamic Republic of</option>
                                <option>Albania</option>
                                <option>Algeria</option>
                                <option>Andorra</option>
                                <option>Angola</option>
                                <option>Antarctica</option>
                                <option>Antigua and Barbuda</option>
                                <option>Argentina</option>
                                <option>Arctic</option>
                                <option>Armenia</option>
                                <option>Australia</option>
                                <option>Austria</option>
                                <option>Azerbaijan</option>
                                <option>Bahamas</option>
                                <option>Bahrain</option>
                                <option>Bangladesh</option>
                                <option>Barbados</option>
                                <option>Belarus</option>
                                <option>Belgium</option>
                                <option>Belize</option>
                                <option>Benin</option>
                                <option>Bhutan</option>
                                <option>Bolivia</option>
                                <option>Bosnia and Herzegovina</option>
                                <option>Botswana</option>
                                <option>Brazil</option>
                                <option>Brunei</option>
                                <option>Bulgaria</option>
                                <option>Burkina Faso</option>
                                <option>Burundi</option>
                                <option>Cambodia</option>
                                <option>Cameroon</option>
                                <option>Canada</option>
                                <option>Cape Verde</option>
                                <option>Central African Republic</option>
                                <option>Chad</option>
                                <option>Chile</option>
                                <option>China, People's Republic of</option>
                                <option>Colombia</option>
                                <option>Comoros</option>
                                <option>Congo, Democratic Republic of the</option>
                                <option>Congo, Republic of the</option>
                                <option>Costa Rica</option>
                                <option>Côte d'Ivoire (Ivory Coast)</option>
                                <option>Croatia</option>
                                <option>Cuba</option>
                                <option>Cyprus</option>
                                <option>Czech Republic (Czechia)</option>
                                <option>Denmark</option>
                                <option>Djibouti</option>
                                <option>Dominica</option>
                                <option>Dominican Republic</option>
                                <option>East Timor</option>
                                <option>Ecuador</option>
                                <option>Egypt</option>
                                <option>El Salvador</option>
                                <option>Equatorial Guinea</option>
                                <option>Eritrea</option>
                                <option>Estonia</option>
                                <option>Eswatini</option>
                                <option>Ethiopia</option>
                                <option>Fiji</option>
                                <option>Finland</option>
                                <option>France</option>
                                <option>Gabon</option>
                                <option>Gambia</option>
                                <option>Georgia</option>
                                <option>Germany</option>
                                <option>Ghana</option>
                                <option>Greece</option>
                                <option>Grenada</option>
                                <option>Guatemala</option>
                                <option>Guinea</option>
                                <option>Guinea-Bissau</option>
                                <option>Guyana</option>
                                <option>Haiti</option>
                                <option>Honduras</option>
                                <option>Hungary</option>
                                <option>Iceland</option>
                                <option>India</option>
                                <option>Indonesia</option>
                                <option>Iran</option>
                                <option>Iraq</option>
                                <option>Ireland</option>
                                <option>Israel</option>
                                <option>Italy</option>
                                <option>Jamaica</option>
                                <option>Japan</option>
                                <option>Jordan</option>
                                <option>Kazakhstan</option>
                                <option>Kenya</option>
                                <option>Kiribati</option>
                                <option>Korea, North</option>
                                <option>Korea, South</option>
                                <option>Kuwait</option>
                                <option>Kyrgyzstan</option>
                                <option>Laos</option>
                                <option>Latvia</option>
                                <option>Lebanon</option>
                                <option>Lesotho</option>
                                <option>Liberia</option>
                                <option>Libya</option>
                                <option>Liechtenstein</option>
                                <option>Lithuania</option>
                                <option>Luxembourg</option>
                                <option>Madagascar</option>
                                <option>Malawi</option>
                                <option>Malaysia</option>
                                <option>Maldives</option>
                                <option>Mali</option>
                                <option>Malta</option>
                                <option>Marshall Islands</option>
                                <option>Mauritania</option>
                                <option>Mauritius</option>
                                <option>Mexico</option>
                                <option>Micronesia, Federated States of</option>
                                <option>Moldova</option>
                                <option>Monaco</option>
                                <option>Mongolia</option>
                                <option>Montenegro</option>
                                <option>Morocco</option>
                                <option>Mozambique</option>
                                <option>Myanmar</option>
                                <option>Namibia</option>
                                <option>Nauru</option>
                                <option>Nepal</option>
                                <option>Netherlands</option>
                                <option>New Zealand</option>
                                <option>Nicaragua</option>
                                <option>Niger</option>
                                <option>Nigeria</option>
                                <option>North Macedonia</option>
                                <option>Norway</option>
                                <option>Oman</option>
                                <option>Pakistan</option>
                                <option>Palau</option>
                                <option>Palestine</option>
                                <option>Panama</option>
                                <option>Papua New Guinea</option>
                                <option>Paraguay</option>
                                <option>Peru</option>
                                <option>Philippines</option>
                                <option>Poland</option>
                                <option>Portugal</option>
                                <option>Qatar</option>
                                <option>Romania</option>
                                <option>Russia</option>
                                <option>Rwanda</option>
                                <option>Saint Kitts and Nevis</option>
                                <option>Saint Lucia</option>
                                <option>Saint Vincent and the Grenadines</option>
                                <option>Samoa</option>
                                <option>San Marino</option>
                                <option>São Tomé and Príncipe</option>
                                <option>Saudi Arabia</option>
                                <option>Senegal</option>
                                <option>Serbia</option>
                                <option>Seychelles</option>
                                <option>Sierra Leone</option>
                                <option>Singapore</option>
                                <option>Slovakia</option>
                                <option>Slovenia</option>
                                <option>Solomon Islands</option>
                                <option>Somalia</option>
                                <option>South Africa</option>
                                <option>South Sudan</option>
                                <option>Spain</option>
                                <option>Sri Lanka</option>
                                <option>Sudan</option>
                                <option>Suriname</option>
                                <option>Sweden</option>
                                <option>Switzerland</option>
                                <option>Syria</option>
                                <option>Taiwan</option>
                                <option>Tajikistan</option>
                                <option>Tanzania</option>
                                <option>Thailand</option>
                                <option>Togo</option>
                                <option>Tonga</option>
                                <option>Trinidad and Tobago</option>
                                <option>Tunisia</option>
                                <option>Turkey</option>
                                <option>Turkmenistan</option>
                                <option>Tuvalu</option>
                                <option>Uganda</option>
                                <option>Ukraine</option>
                                <option>United Arab Emirates</option>
                                <option>United Kingdom</option>
                                <option>United States</option>
                                <option>Uruguay</option>
                                <option>Uzbekistan</option>
                                <option>Vanuatu</option>
                                <option>Vatican City (Holy See)</option>
                                <option>Venezuela</option>
                                <option>Vietnam</option>
                                <option>Yemen</option>
                                <option>Zambia</option>
                                <option>Zimbabwe</option>
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
                                value={newTrip.region}
                            >
                                <option>(Required) Select region visited</option>

                                <option>North America</option>
                                <option>Central America</option>
                                <option>Caribbean</option>
                                <option>South America</option>

                                <option>Eastern Asia</option>
                                <option>Southeast Asia</option>
                                <option>South Asia</option>
                                <option>West Asia</option>
                                <option>Central Asia</option>
                                
                                <option>Oceania</option>
                                
                                <option>Europe</option>

                                <option>North Africa</option>
                                <option>Sub-Saharan Africa</option>

                                <option>Arctic</option>
                                <option>Antarctic</option>
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
                                value={newTrip.international}
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
                                value={newTrip.start_date}
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
                                value={newTrip.end_date}
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
                                value={newTrip.entry}
                            />
                        </FormGroup>   
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center'>
                        <Button
                            onClick={handleClick}
                            href="/TravelLogueIndex"
                            type="submit"
                            className="button bg-primary text-light"
                        >
                            Add this trip to my Travelogue!
                        </Button>
                    </Col>
                </Row>
            </Form>,
        </>
    );
}

export default TravelLogueNew;