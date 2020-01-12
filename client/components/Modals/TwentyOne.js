import React from "react";

export const TwentyOne = props => {
  return (
    <div>
      <section className="modal-main modal-top">
        <h1 id="wild">Respectfully Wild</h1>
        <div className="modal-bottom">
          <h3>WHEN WERE YOU BORN?</h3>
          <form onSubmit={props.submitAge} className="form">
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
            <button type="submit">ENTER</button>
          </form>
          <div id="enter">You must be 21 or older to enter this website</div>
          <span>{props.error}</span>
        </div>
      </section>
    </div>
  );
};
