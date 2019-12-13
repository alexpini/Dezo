import React from "react";

export const Modal21 = props => {
  const showHideClassName = props.show
    ? "modal display-block"
    : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main modal-top">
        <h2>Respectfully Wild</h2>
        <h2>dezo</h2>
        <section className="modal-bottom">
          <p>You must be of legal drinking age to enter this website</p>
          <p>Please enter your birthday below</p>
          <form onSubmit={props.submitAge}>
            <input
              className="inputs"
              name="month"
              placeholder="MM"
              maxLength="2"
              onChange={props.onChange}
            />
            <input
              className="inputs"
              name="day"
              placeholder="DD"
              maxLength="2"
              onChange={props.onChange}
            />
            <input
              className="inputs"
              name="year"
              placeholder="YYYY"
              maxLength="4"
              onChange={props.onChange}
            />
            <button type="submit">enter</button>
          </form>
          <span>{props.error}</span>
        </section>
      </section>
    </div>
  );
};
