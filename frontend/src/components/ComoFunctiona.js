import React from "react";
import { Container, Form, FormGroup, FormControl, Button } from "react-bootstrap";

const ComoFunctiona = () => {
  return (
    <>
      <Container className="comofunctiona-container">
        <div className="comofunctiona-header">
          <div>
            <h2>¿CÓMO FUNCTIONA?</h2>
            <h2>CONSTRUYE LOS EPISODIOS A TU GUSTO</h2>
          </div>
        </div>
        <Form className="total-form">
          <FormGroup className="form-group">
            <FormControl
              size="sm"
              type="text"
              className="first-form-fields"
              style={{ background: "#F8DCCC", height: "23px", width: "150px" }}
            ></FormControl>
            <FormControl
              size="sm"
              type="text"
              className="first-form-fields"
              style={{ background: "#F8DCCC", height: "23px", width: "150px" }}
            ></FormControl>
            <FormControl
              size="sm"
              type="text"
              className="first-form-fields"
              style={{ background: "#F8DCCC", height: "23px", width: "150px" }}
            ></FormControl>
            <FormControl
              size="sm"
              type="text"
              className="first-form-fields"
              style={{ background: "#F8DCCC", height: "23px", width: "150px" }}
            ></FormControl>
          </FormGroup>
          <div className="form-text-box">
            <p className="form-text">Hablamos de muchos temas en cada episodio</p>
          </div>
          <FormGroup>
            <FormControl
              size="sm"
              type="text"
              className="second-form-fields"
              style={{ background: "#F8DCCC", height: "23px", width: "150px" }}
            ></FormControl>
            <FormControl
              size="sm"
              type="text"
              className="second-form-fields"
              style={{ background: "#000000", border: "#000000", height: "23px", width: "150px" }}
            ></FormControl>
            <FormControl
              size="sm"
              type="text"
              className="second-form-fields"
              style={{ background: "#F8DCCC", height: "23px", width: "150px" }}
            ></FormControl>
            <FormControl
              size="sm"
              type="text"
              className="second-form-fields"
              style={{ background: "#000000", border: "#000000", height: "23px", width: "150px" }}
            ></FormControl>
          </FormGroup>
          <div className="form-text-box">
            <p className="form-text">Puedes eligir la/s sección/es que te interesan</p>
          </div>
          <FormGroup>
            <FormControl
              size="sm"
              type="text"
              className="third-form-fields"
              style={{ background: "#F8DCCC", height: "23px", width: "150px" }}
            ></FormControl>
            <FormControl
              size="sm"
              type="text"
              className="third-form-fields"
              style={{ background: "#000000", border: "#000000", height: "23px", width: "150px" }}
            ></FormControl>
            <FormControl
              size="sm"
              type="text"
              className="third-form-fields"
              style={{ background: "#F8DCCC", height: "23px", width: "150px" }}
            ></FormControl>
            <FormControl
              size="sm"
              type="text"
              className="third-form-fields"
              style={{ background: "#000000", border: "#000000", height: "23px", width: "150px" }}
            ></FormControl>
          </FormGroup>
          <div className="form-text-box">
            <p className="form-text">Escucha tu selección</p>
          </div>
        </Form>
        <Button variant="dark" size="lg" className="black-button" style={{ background: "#000000", border: "#000000", fontWeight: "bold" }}>IR AL PODCAST</Button>
      </Container>
    </>
  );
};

export default ComoFunctiona;
