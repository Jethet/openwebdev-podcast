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
              <input type="text" className="input-field" />
            </label>
            <label>
              <input
                type="text"
                style={{
                  color: "white",
                  backgroundColor: "black",
                  border: "2px solid black",
                  height: "30px",
                }}
              />
            </label>
            <label>
              <input type="text" className="input-field" />
            </label>
            <label>
              <input
                type="text"
                style={{
                  color: "white",
                  backgroundColor: "black",
                  border: "2px solid black",
                  height: "30px",
                }}
              />
            </label>
          </section>

          <div className="form-text-box">
            <p className="form-text">Puedes eligir la/s sección/es que te interesan</p>
          </div>

          <section className="form-group">
            <label>
              <input type="text" className="input-field" />
            </label>
            <div>
              <img src="/images/speaker.png" className="speaker" />
              <label>
                <input
                  type="text"
                  className="input-field-speaker"
                  style={{
                    color: "white",
                    backgroundColor: "black",
                    border: "2px solid black",
                    height: "30px",
                  }}
                />
              </label>
            </div>

            <label>
              <input type="text" className="input-field" />
            </label>
            <div>
              <img src="/images/speaker.png" className="speaker" />
              <label>
                <input
                  type="text"
                  className="input-field-speaker"
                  style={{
                    color: "white",
                    backgroundColor: "black",
                    border: "2px solid black",
                    height: "30px",
                  }}
                />
              </label>
            </div>
          </section>

          <div className="last-text-box">
            <p className="form-text">Escucha tu selección</p>
          </div>
        </form>
        <button className="form-button">
          <img src="/images/bar-chart.png" alt="" className="soundbars" />
          IR AL PODCAST
        </button>
      </div>
    </>
  );
};

export default ComoFunctiona;
