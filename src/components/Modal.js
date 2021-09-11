import React from "react";
import { Modal, Col, Button } from "react-bootstrap";
import { Form } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import DatePicker from "react-datepicker";
import rentalProducts from '../Mock/rental.json';


export const DisplayModal = (props) => {
    const [startDate, setStartDate] = React.useState(new Date());
   return (
        <>
            <Modal
                show={props.show}
                onHide={props.handleClose}
                backdrop="static"
                centered
            >
                <Modal.Header closeButton>
                    {props.type==="booking"?<Modal.Title><h4>{props.title}</h4></Modal.Title>:props.type==="bookingConfirmation"?<Modal.Title><h4>{props.title}</h4></Modal.Title>:<Modal.Title><h4>{props.returntitle}</h4></Modal.Title>}
                </Modal.Header>
                <Modal.Body>
                    {props.type === "booking" ? <Typeahead
                        id="typeahead-booking"
                        labelKey="name"
                        onChange={props.setSingleSelections}
                        options={rentalProducts}
                        placeholder="Choose a product name..."
                        selected={props.singleSelections}
                    /> : props.type==="return"?<Typeahead
                    id="typeahead-booking"
                    labelKey="name"
                    onChange={props.setSingleSelections}
                    options={rentalProducts}
                    placeholder="Choose a product name..."
                    selected={props.singleSelections}
                />:''}
                    
                    {props.type === "booking" ? <Typeahead
                        id="typeahead-booking12"
                        labelKey="type"
                        onChange={props.setSingleSelectionsType}
                        options={rentalProducts}
                        placeholder="Choose a product type..."
                        selected={props.singleSelectionsType}
                    /> : ''}
                    {
                        props.type === "booking"  ? <div className="date-div">
                            <Form.Label htmlFor="textplain" className="lab">From</Form.Label><DatePicker selected={startDate} onChange={(date) => setStartDate(date)} minDate={startDate} /><Form.Label htmlFor="totext" className="lab">To</Form.Label><DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /></div>
                            : ''
                    }
                    {
                        props.type === "booking" || props.type === "return" ? <Form>
                            <Form.Group>
                                <Form.Control
                                    className="mobileBox"
                                    required
                                    name="price"
                                    type="number"
                                    placeholder="please enter price"
                                    value={props.price}
                                    onChange={props.onChange}
                                />
                            </Form.Group>
                        </Form> : ''
                    }

                    {
                        props.type === "bookingConfirmation" ? <div className="date-div-2">
                            <Form.Label htmlFor="textplain" className="lab">Your estimated price is {props.estimatedPrice}</Form.Label><Form.Label htmlFor="textplain" className="lab2">Do you want to proceed?</Form.Label></div>
                            : ''
                    }

                    {
                         props.type === "returnConfirm" ? <div className="date-div-2">
                         <Form.Label htmlFor="textplain" className="lab">Your total price is {props.totalPrice}</Form.Label><Form.Label htmlFor="textplain" className="lab2">Do you want to proceed?</Form.Label></div>
                         : ''

                    }


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-dark" onClick={props.handleClose}>
                        {props.firstBtn}
                    </Button>
                   {props.type==="booking" || props.type==="bookingConfirmation" || props.type==="return"?<Button variant="outline-dark" onClick={props.handleProcessData}>{props.secondBtn}</Button>:''}

                </Modal.Footer>
            </Modal>
        </>);
}
