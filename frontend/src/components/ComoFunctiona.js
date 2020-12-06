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
        <Form>
          <FormGroup>
            <FormControl size="sm" type="text" className="first-form-fields"></FormControl>
          
            <FormControl size="sm" type="text" className="first-form-fields"></FormControl>
         
            <FormControl size="sm" type="text" className="first-form-fields"></FormControl>
       
            <FormControl size="sm" type="text" className="first-form-fields"></FormControl>
          </FormGroup>
        </Form>
      </Container>
    </>
  );
};

export default ComoFunctiona;
