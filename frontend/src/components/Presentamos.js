import React from "react";
import { Container, Image, Button } from "react-bootstrap";

const Presentamos = () => {
  return (
    <>
      <Container className="presentamos-container">
        <div className="presentamos-header">
          <div>
            <h2>NOS PRESENTAMOS</h2>
          </div>
          <div>
            <h1>SOMOS LOS ANFITRIONES</h1>
          </div>
        </div>
        <div className="presentamos-img1">
          <Image src="/images/alfredo.jpg" fluid alt="Alfredo" />
        </div>
        <div>
        <h1 className="presentamos-alfredo-header">ALFREDO</h1>
        </div>
        <div className="presentamos-alfredo-text">
          <div>
            <p>
              Vengo del seno de una familia que emigró de Andalucía a Cataluña, en busca
              de una vida digna y huyendo del hambre de la posguerra. Tuve una infancia
              envidiable en todos los sentidos, me dieron la mejor educación escolar qué
              creían, en colegios de pago.
            </p>
          </div>
          <div>
            <p>
              He vivido en la calle un par de veces por culpa de mis adicciones y por eso
              me gusta compartir mi vida turbulenta para sensibilizar el impacto de last
              drogas.
            </p>
          </div>
        </div>
        <div className="presentamos-img2">
          <Image src="/images/fran.jpg" fluid alt="Fran" />
        </div>
        <h1 className="presentamos-fran-header">FRAN</h1>
        <div className="presentamos-fran-text">
        <div>
          <p>
            Soy nativo de Sevilla. Me considero una persona divertida y puedo decir que
            soy el relaciones públicas del Raval en Barcelona.
          </p>
          </div>
          <div>
          <p>
            Me gusta pasar el tiempo leyendo poesía, cantando flamenco y paseando por el
            barrio.
          </p>
          </div>
        </div>
        <Button
          variant="dark"
          size="lg"
          className="black-button"
          style={{ background: "#000000", border: "#000000", fontWeight: "bold" }}
        >
          CONOCE EL PROYECTO
        </Button>
      </Container>
    </>
  );
};

export default Presentamos;
