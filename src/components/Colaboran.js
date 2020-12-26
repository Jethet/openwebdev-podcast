import React from "react";
import { Container, Card } from "react-bootstrap";

const Colaboran = () => {
  return (
    <div className="colaboradores">
      <div>
        <h2 className="colaboradores-texto">COLABORAN CON NOSOTROS:</h2>
      </div>

      <div className="colaboradores-cards">
        <Card classname="card" style={{ width: "10rem" }}>
          <Card.Img variant="top" src="images/image6.jpg" />
        </Card>
        <Card classname="card" style={{ width: "10rem" }}>
          <Card.Img variant="top" src="images/image7.jpg" />
        </Card>
      </div>
    </div>
  );
};

export default Colaboran;
