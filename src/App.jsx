import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [username, setUsername] = useState({
    value: "",
    error: false,
    errorMessage: "",
  });

  const [email, setEmail] = useState({
    value: "",
    error: false,
    errorMessage: "",
  });

  const [password, setPassword] = useState({
    value: "",
    error: false,
    errorMessage: "",
  });

  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    error: false,
    errorMessage: "",
  });

  const submitForm = (username, email, password, confirmPassword) => {
    if (!username) {
      setUsername({
        value: "",
        error: true,
        errorMessage: "Please fill out this field",
      });
    } else {
      setUsername({
        value: username,
        error: false,
        errorMessage: "",
      });
    }

    if (!email) {
      setEmail({
        value: "",
        error: true,
        errorMessage: "Please fill out this field",
      });
    }

    if (!email.includes("@") && email) {
      setEmail({
        value: "",
        error: true,
        errorMessage: "Please enter a valid email address",
      });
    }

    if (email.includes("@") && email) {
      setEmail({
        value: email,
        error: false,
        errorMessage: "",
      });
    }

    if (!password) {
      setPassword({
        value: "",
        error: true,
        errorMessage: "Please fill out this field",
      });
    } else {
      setPassword({
        value: password,
        error: false,
        errorMessage: "",
      });
    }

    if (!confirmPassword) {
      setConfirmPassword({
        value: "",
        error: true,
        errorMessage: "Please fill out this field",
      });
    } else {
      setConfirmPassword({
        value: password,
        error: false,
        errorMessage: "",
      });
    }

    if (!password && !confirmPassword) {
      setConfirmPassword({
        value: "",
        error: true,
        errorMessage: "Please fill out this field",
      });
    } else if (password !== confirmPassword) {
      setConfirmPassword({
        value: confirmPassword,
        error: true,
        errorMessage: "Make sure the passwords match",
      });
    } else {
      setConfirmPassword({
        value: confirmPassword,
        error: false,
        errorMessage: "",
      });
    }
  };

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="w-96">
          <h1 className="text-2xl font-medium font-poppins text-center mb-5">
            Form Validation
          </h1>
          <Form
            submit={submitForm}
            username={username}
            email={email}
            password={password}
            confirmPassword={confirmPassword}
          />
        </div>
      </div>
    </>
  );
}

export default App;
