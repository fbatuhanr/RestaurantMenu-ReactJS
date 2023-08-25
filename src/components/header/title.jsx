import React from 'react';
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

const Title = () => {
    return (
        <div>
            <h1 className="text-center" id="heading"><Nav.Link as={Link} to="/">Zeke's Lunch</Nav.Link></h1>
        </div>
    );
};

export default Title;