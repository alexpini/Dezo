import React from "react";

export const Page4 = props => {
  return (
    <div
      className="parallax"
      style={{
        backgroundImage: "url(../../assets/images/wave-02.jpg)",
        height: "100vh"
      }}
    >
      <div className="our-story">
        <div id="our-story" style={{ marginTop: "auto", marginBottom: "auto" }}>
          <div>
            <h1>Our Story</h1>
          </div>
          <div>
            <p className="p-page-4">
              Dezo was crafted by three friends with one mission: to bring
              together the lively, the bold, and the adventure seekers who are
              ready to worry less about tomorrow and focus more on being in the
              moment.<br></br>
              <br></br>
              Dezo was created for those who know the power of their body begins
              with feeling good about what’s on the inside, which is why we’ve
              created products that does more than just satisfy your thirst. We
              want you to truly feel good about what you are putting into your
              body.<br></br>
              <br></br>
              After years of celebrating together in college, we began to
              realize that sugary mixed drinks led to a day of recovering, beer
              resulted in bloating, and spiked seltzers left us feeling
              dehydrated. So we teamed up to craft something that didn’t exist:
              a low calorie, gluten free vodka spiked fruit water mixed with
              some of the world’s most vitalizing natural ingredients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
