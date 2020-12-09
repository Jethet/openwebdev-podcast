import React from "react";
import { Container, Card } from "react-bootstrap";

const Colaboran = () => {
    return (
        <div className="colaboradores">
            <div>
                <h6 className="colaboradores-texto">COLABORAN CON NOSOTROS:</h6>
            </div>

            <div className="colaboradores-cards">
            <Card style={{ width: '10rem' }}>
            <Card.Img variant="top" src="images/image6.jpg" />
          </Card>
          <Card style={{ width: '10rem' }}>
          <Card.Img variant="top" src="images/image7.jpg" />
        </Card>
            </div>
            
         </div>
    );
};

export default Colaboran;