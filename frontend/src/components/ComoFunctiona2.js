import React from "react";

const ComoFunctiona = () => {
  return (
    <>
      <div className="comofunctiona-container">
        <div id="comofunctiona-header">
          <h2>¿CÓMO FUNCTIONA?</h2>
          <h2>CONSTRUYE LOS EPISODIOS A TU GUSTO</h2>
        </div>

        <form className="total-form">
          <section className="form-group">
            <label>
              <input type="text" placeholder="Type here" />
            </label>
            <label>
              <input type="text" placeholder="Type here" />
            </label>
            <label>
              <input type="text" placeholder="Type here" />
            </label>
            <div className="first-form-group">
              <input type="text" placeholder="Type here" />
            </div>
          </section>

          <section className="form-group">
            <div className="second-form-group">
              <label htmlFor="field-five">
                <input type="text" placeholder="Type here" />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="field-six">
                <input type="text" placeholder="Type here" />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="field-seven">
                <input type="text" placeholder="Type here" />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="field-eight">
                <input type="text" placeholder="Type here" />
              </label>
            </div>
          </section>

          <section className="form-group">
            <div className="third-form-group">
              <label htmlFor="field-nine">
                <input type="text" placeholder="Type here" />
              </label>
            </div>
            <div className="third-form-group">
              <label htmlFor="field-ten">
                <input type="text" placeholder="Type here" />
              </label>
            </div>
            <div className="third-form-group">
              <label htmlFor="field-eleven">
                <input type="text" placeholder="Type here" />
              </label>
            </div>
            <div className="third-form-group">
              <label htmlFor="field-twelve">
                <input type="text" placeholder="Type here" />
              </label>
            </div>
          </section>
        </form>
      </div>
    </>
  );
};

export default ComoFunctiona2;
