import React from "react";

import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>firstname</label>
      <input
        type="text"
        {...register("firstname", { required: true, minLength: 5 })}
      />
      {errors.firstname && (
        <p style={{ color: "red" }}>firstname must be at least 5 characters</p>
      )}
      <label>lastname</label>
      <input
        type="text"
        {...register("lastname", { required: true, minLength: 2 })}
      />
      {errors.lastname && (
        <p style={{ color: "red" }}>lastname must be at least 2 characters</p>
      )}
      <label>Email</label>
      <input
        type="email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.email && (
        <p style={{ color: "red" }}>Email is required and must be valid</p>
      )}
      <label>phone</label>
      <input
        type="text"
        {...register("phone", { required: true, minLength: 5 })}
      />
      {errors.phone && (
        <p style={{ color: "red" }}>phone number must be at least 5 numbers</p>
      )}

      <label>Password</label>
      <input type="password" {...register("password", { required: true })} />
      {errors.password && <p style={{ color: "red" }}>Password is required</p>}

      <label>confirm password</label>
      <input
        type="text"
        {...register("repeatPassword", {
          required: true,
          validate: (val) => {
            if (watch("password") != val) {
              return "Your passwords do no match";
            }
          },
        })}
      />
      {errors.repeatPassword && <p style={{ color: "red" }}></p>}
      <button type="submit">Submit</button>
    </form>
  );
}
export default App;
