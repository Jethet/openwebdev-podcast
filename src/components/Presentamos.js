import React from "react";
import { Container, Button } from "react-bootstrap";

const Presentamos = () => {
  return (
    <>
      <Container className="presentamos-container">
        <div className="presentamos-header">
          <h2>NOS PRESENTAMOS</h2>
          <h1>SOMOS LOS ANFITRIONES</h1>
        </div>
        <section className="section-alfredo">
          <img src="./images/alfredo.jpg" alt="Alfredo" className="image-alfredo" />
          <div>
            <h1 className="presentamos-alfredo-header">ALFREDO</h1>
            <div className="presentamos-alfredo-text">
            <p>
              Vengo del seno de una familia que emigró de Andalucía a Cataluña, en busca
              de una vida digna y huyendo del hambre de la posguerra. Tuve una infancia
              envidiable en todos los sentidos, me dieron la mejor educación escolar qué
              creían, en colegios de pago.
            </p>
            <p>
              He vivido en la calle un par de veces por culpa de mis adicciones y por eso
              me gusta compartir mi vida turbulenta para sensibilizar el impacto de las
              drogas.
            </p>
            </div>
          </div>
        </section>
        <section className="section-fran">
          <img src="./images/fran.jpg" alt="Fran" className="image-fran" />
          <div>
          <h1 className="presentamos-fran-header">FRAN</h1>
          <div className="presentamos-fran-text">
            <div>
              <p>
                Soy nativo de Sevilla. Me considero una persona divertida y puedo decir
                que soy el relaciones públicas del Raval en Barcelona.
              </p>
            </div>
            <div>
              <p>
                Me gusta pasar el tiempo leyendo poesía, cantando flamenco y paseando por
                el barrio.
              </p>
            </div>
            </div>
          </div>
        </section>

        <Button
          variant="dark"
          size="lg"
          className="black-button"
          style={{
            background: "#000000",
            border: "#000000",
            borderRadius: "10px",
            fontSize: "20px",
            fontWeight: "bold",
            padding: "15px",
          }}
        >
          CONOCE EL PROYECTO
        </Button>
      </Container>
    </>
  );
};

export default Presentamos;
