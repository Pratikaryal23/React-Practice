import React from "react";
import { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [error, setError] = useState({});
  // const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalErrors = validate();
    console.log(finalErrors);
    if (JSON.stringify(finalErrors) == "{}") {
      // JSON.stringify(finalErrors) =={}
      // Submit form (or do whatever you need here)
      // alert("Form submitted successfully",data);

      console.log(`
        Name: ${data.name}
        Email: ${data.email}
        Password: ${data.password}
        Confirm Password: ${data.cpassword}
      `);
    }
  };

  // json.stringfy  jasto data xa testai faldinxa

  const validate = () => {
    let errors = {};

    // Name validation
    if (!data.name) {
      errors.name = "Name is required";
    }

    // Email validation
    if (!data.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email address is invalid";
    }

    // Password validation
    if (!data.password) {
      errors.password = "Password is required";
    } else if (data.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
    // Confirm password validation
    if (!data.cpassword) {
      errors.cpassword = "Confirm Password is required";
    } else if (data.cpassword !== data.password) {
      errors.cpassword = "Passwords do not match";
    }
    setError(errors);

    return error;
  };
  return (
    <>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          onChange={handleChange}
          value={data.name}
        />
        {error.name && <p className="error">{error.name}</p>}
      </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          value={data.email}
          name="email"
          placeholder="Enter Your  Email"
          onChange={handleChange}
        />
        {error.email && <p className="error">{error.email}</p>}
      </div>
      <div>
        <label>Passsword</label>
        <input
          type="text"
          value={data.password}
          name="password"
          placeholder="Enter Your passsword"
          onChange={handleChange}
        />
        {error.password && <p className="error">{error.password}</p>}
      </div>
      <div>
        <label>Confirm Password</label>
        <input
          type="text"
          name="cpassword"
          value={data.cpassword}
          placeholder="Enter Your passsword"
          onChange={handleChange}
        />
        {error.cpassword && <p className="error">{error.cpassword}</p>}
      </div>
      <button onClick={handleSubmit}>SUBMIT</button>
    </>
  );
};

export default Form;
