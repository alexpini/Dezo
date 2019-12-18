import React from "react";

class CreateAdmin extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      passwordCheck: "",
      fName: "",
      lName: "",
      code: ""
    };
  }
  handleSubmit = e => {};
  render() {
    return (
      <form onSubmit={submit}>
        <label>Email: </label>
        <input name="email" placeholder="email" />
        <label>First Name: </label>
        <input name="fName" placeholder="name" />
        <label>Last Name: </label>
        <input name="lName" placeholder="last name" />
        <label>Password: </label>
        <input name="password" type="password" />
        <label>Re-Type Password: </label>
        <input name="passwordCheck" type="password" />
        <label>Secret Code: </label>
        <input name="code" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default CreateAdmin;
