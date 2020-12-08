import React from "react";

const ComoFunctiona = () => {
  return (
    <>
      <div className="comofunctiona-container">
        <div className="comofunctiona-header">
          <h2>¿CÓMO FUNCTIONA?</h2>
          <h2>CONSTRUYE LOS EPISODIOS A TU GUSTO</h2>
        </div>

        <form className="total-form">
          <section className="form-group">
            <label>
              <input type="text" placeholder="Type here" className="input-field" />
            </label>
            <label>
              <input type="text" placeholder="Type here" className="input-field" />
            </label>
            <label>
              <input type="text" placeholder="Type here" className="input-field" />
            </label>
            <input type="text" placeholder="Type here" className="input-field" />
          </section>
          <div className="form-text-box">
            <p className="form-text">Hablamos de muchos temas en cada episodio</p>
          </div>
          <section className="form-group">
            <label>
              <input type="text" placeholder="Type here" className="input-field" />
            </label>
            <label>
              <input type="text" style={{color: "white", backgroundColor: "black", border: "2px solid black",  height: "30px"}} />
            </label>
            <label>
              <input type="text" placeholder="Type here" className="input-field" />
            </label>
            <label>
              <input type="text" style={{color: "white", backgroundColor: "black", border: "2px solid black",  height: "30px"}} />
            </label>
          </section>
          <div className="form-text-box">
            <p className="form-text">Puedes eligir la/s sección/es que te interesan</p>
          </div>
          <section className="form-group">
            <label htmlFor="field-nine">
              <input type="text" placeholder="Type here" className="input-field" />
            </label>
            <label htmlFor="field-ten">
              <input type="text" style={{color: "white", backgroundColor: "black", border: "2px solid black",  height: "30px"}} />
            </label>
            <label htmlFor="field-eleven">
              <input type="text" placeholder="Type here" className="input-field" />
            </label>
            <label htmlFor="field-twelve">
              <input type="text" style={{color: "white", backgroundColor: "black", border: "2px solid black",  height: "30px"}} />
            </label>
          </section>
          <div className="last-text-box">
            <p className="form-text">Escucha tu selección</p>
          </div>
        </form>
        <button className="form-button">IR AL PODCAST</button>
      </div>
    </>
  );
};

export default ComoFunctiona;
