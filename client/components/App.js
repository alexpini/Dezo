import React from "react";
import Nav from "./Nav";
import Routes from "./Routes";
import { Modal21 } from "./Modals/Modal21";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
      month: "",
      day: "",
      year: "",
      error: ""
    };
  }
  submitAge = e => {
    e.preventDefault();
    let numbers = /^[0-9]+$/;
    let { month, day, year } = this.state;
    if (!month.match(numbers) || !day.match(numbers) || !year.match(numbers)) {
      this.setState({ error: "not valid date" });
      return;
    }

    month = Number(month) - 1;
    day = Number(day);
    year = Number(year);
    let dateToCheck = new Date(year, month, day);
    let dateNow = Date.now() - dateToCheck.getTime();
    let diff = new Date(dateNow);
    let yearDiff = Math.abs(diff.getUTCFullYear() - 1970);
    if (yearDiff < 21) {
      this.setState({ error: "You are not 21" });
      return;
    }
    this.setState({ show: false });
    localStorage.setItem("+21", "true");
    setTimeout(() => {
      localStorage.removeItem("+21");
    }, 10000);
  };
  handleChange = async e => {
    await this.setState({ [e.target.name]: e.target.value });
  };
  componentDidMount() {
    if (localStorage.getItem("+21")) {
      this.setState({ show: false });
    }
  }

  render() {
    const { show, error } = this.state;
    return (
      <div>
        {!show && !error && (
          <div>
            <Nav />
            <Routes />
          </div>
        )}
        {show && (
          <Modal21
            submitAge={this.submitAge}
            {...this.state}
            onChange={this.handleChange}
          />
        )}
      </div>
    );
  }
}

export default App;
