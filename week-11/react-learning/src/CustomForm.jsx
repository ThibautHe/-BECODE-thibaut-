import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import "./CustomForm.css"; // Import your CSS file

export default function CustomForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const passwordValue = watch("password"); // Watching password value

  const validateConfirmPassword = useCallback(
    (value) => value === passwordValue || "Passwords do not match",
    [passwordValue]
  );

  const onSubmit = (data) => {
    console.log("Form Data:", data); // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TestInput
        label="Firstname"
        name="firstname"
        register={register}
        validation={{
          required: "Firstname is required",
          minLength: {
            value: 5,
            message: "Firstname must be at least 5 characters",
          },
        }}
        error={errors.firstname}
      />

      <TestInput
        label="Lastname"
        name="lastname"
        register={register}
        validation={{
          required: "Lastname is required",
          minLength: {
            value: 2,
            message: "Lastname must be at least 2 characters",
          },
        }}
        error={errors.lastname}
      />

      <TestInput
        label="Age"
        name="age"
        register={register}
        validation={{
          required: "Age is required",
          pattern: {
            value: /^[0-9]+$/,
            message: "Age must be a number",
          },
          min: {
            value: 18,
            message: "You must be at least 18 years old",
          },
        }}
        error={errors.age}
      />

      <TestInput
        label="Email"
        name="email"
        register={register}
        validation={{
          required: "Email is required",
          pattern: {
            value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
            message: "Invalid email address",
          },
        }}
        error={errors.email}
      />

      <TestInput
        label="Phone"
        name="phone"
        register={register}
        validation={{
          required: "Phone number is required",
          pattern: {
            value: /^[0-9]{10}$/,
            message: "Phone number must be 10 digits",
          },
        }}
        error={errors.phone}
      />

      <TestInput
        label="Password"
        name="password"
        register={register}
        validation={{
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters",
          },
        }}
        error={errors.password}
      />

      <TestInput
        label="Confirm Password"
        name="confirmPassword"
        register={register}
        validation={{
          required: "Confirm Password is required",
          validate: validateConfirmPassword, // Memoized function
        }}
        error={errors.confirmPassword}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

const TestInput = React.memo(function TestInput({
  label,
  name,
  register,
  validation,
  error,
}) {
  console.log("render");

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        {...register(name, validation)}
        className={error ? "error" : "valid"} // Dynamic CSS class
      />
      {error && <div className="error-message">{error.message}</div>}
    </div>
  );
});


/*import React, { useState, useCallback } from "react";
import "./CustomForm.css"; // Import your CSS file

export default function CustomForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    age: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    errors: {},
  });

  const [firstSubmit, setFirstSubmit] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateForm();
    setFirstSubmit(true); // Mark that submit has been pressed
    if (isValid) {
      console.log(formData); // Form submission logic
    }
  };

  // Use useCallback to avoid recreating the function on every render
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (firstSubmit) {
      validateForm({ ...formData, [name]: value }); // Pass the updated data
    }
  }, [formData, firstSubmit]); // Memoize handleChange so it doesn't get recreated on each render

  const validateForm = (updatedData = formData) => {
    let errors = {};
    let success = true;

    if (!updatedData.firstname) {
      errors.firstname = "Firstname is required";
      success = false;
    } else if (updatedData.firstname.length < 5) {
      errors.firstname = "Firstname must be at least 5 characters";
      success = false;
    }

    // Set errors in state
    setFormData((prev) => ({ ...prev, errors }));
    return success;
  };

  const getClassName = (error) => {
    if (!firstSubmit) {
      return "neutral"; // Neutral class before first submit
    }

    return error === "" || !error ? "valid" : "error"; // Valid or error after submit
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {["firstname", "lastname", "age", "email", "phone", "password", "confirmPassword"].map((field) => (
          <TestInput
            key={field}
            handleChange={handleChange}
            value={formData[field]} // Pass only the relevant field's value
            error={formData.errors[field]} // Pass only the error for the specific field
            getClassName={getClassName}
            name={field}
          />
        ))}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

const TestInput = ({ handleChange, value, error, getClassName, name }) => {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input
        onChange={handleChange}
        name={name}
        type="text"
        value={value} // Use only the relevant field's value
        className={getClassName(error)} // Apply validation class for the field
      />
      {error && <div>{error}</div>}
    </>
  );
};
*/