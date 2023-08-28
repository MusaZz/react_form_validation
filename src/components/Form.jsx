import React from "react";
import FromGroup from "./FromGroup";

import { useState, useRef } from "react";

const Form = (props) => {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();
    props.submit(
      usernameRef.current.value,
      emailRef.current.value,
      passwordRef.current.value,
      confirmPasswordRef.current.value
    );
  };

  return (
    <>
      <form
        onSubmit={submitFormHandler}
        className="flex flex-col border-2 rounded-lg p-5"
      >
        <FromGroup
          label="Username"
          type="text"
          labelFor="username"
          id="username"
          placeholder="Please enter your username"
          errorMessage={props.username.errorMessage}
          reference={usernameRef}
          error={props.username.error}
        />
        <FromGroup
          label="Email"
          type="text"
          labelFor="email"
          id="email"
          placeholder="Please enter your email"
          errorMessage={props.email.errorMessage}
          reference={emailRef}
          error={props.email.error}
        />
        <FromGroup
          label="Password"
          type="password"
          labelFor="password"
          id="password"
          placeholder="Please enter your password"
          errorMessage={props.password.errorMessage}
          reference={passwordRef}
          error={props.password.error}
        />
        <FromGroup
          label="Confirm Password"
          type="password"
          labelFor="confirmPassword"
          id="confirmPassword"
          placeholder="Please confirm your password"
          errorMessage={props.confirmPassword.errorMessage}
          reference={confirmPasswordRef}
          error={props.confirmPassword.error}
        />
        <button className="bg-green-500 text-white p-2 rounded mt-2">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
