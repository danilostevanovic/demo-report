import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';


const DateButton = (props) => (
        <div>
                <ButtonGroup>
                        <Button onClick={props.previousDay}>1 day</Button>
                        <Button onClick={props.previousSevenDays}>7 days</Button>
                </ButtonGroup>
        </div>
)

export default DateButton;