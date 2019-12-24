import React from "react";

export const TwentyOne = props => {
  return (
    <div>
      <section className="modal-main modal-top">
        <section className="modal-bottom">
          <h1>Are you of legal drinking age?</h1>
          <section style={{ display: "flex", justifyContent: "space-around" }}>
            <div
              onClick={e => props.submitAge(e, true)}
              style={{
                display: "flex",
                width: "4rem",
                height: "4rem",
                backgroundColor: "red",
                flexDirection: "column",
                justifyContent: "center"
              }}
            >
              Yes
            </div>
            <div
              onClick={e => props.submitAge(e, false)}
              style={{
                display: "flex",
                width: "4rem",
                height: "4rem",
                backgroundColor: "red",
                flexDirection: "column",
                justifyContent: "center"
              }}
            >
              No
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};
