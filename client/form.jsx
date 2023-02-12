import React from "react";

function Create() {
  return (
    <form>
      <h2> REGISTER NOW</h2>
      <label>
        {" "}
        <div class="heads">Name:</div>
        <input
          class="box"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          required
        />
      </label>
      <label>
        {" "}
        <div class="heads">Email:</div>
        <input
          class="box"
          type="email"
          name="email"
          id="email"
          placeholder="E-Mail "
          required
        />
      </label>
      <label>
        {" "}
        <div class="heads">Password:</div>
        <input
          class="box"
          type="password"
          name="password"
          id="password"
          placeholder="Password "
          required
        />
      </label>
      <label>
        <div class="heads">Phone number:</div>
        <input
          class="box"
          type="text"
          name="phone"
          id="phone"
          placeholder="Phone Number "
          required
        />
      </label>
      
        <button
          type="submit"
          id="submitDetails"
          name="submitDetails"
          value="Submit"
        >submit</button>
        <div class="heads">
          already have an account?<a href="/">login</a>
        </div>
    </form>
  );
}

export default Create;