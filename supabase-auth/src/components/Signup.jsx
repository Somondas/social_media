import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const navigate = useNavigate();

  const { session, signUpNewUser } = UserAuth();

  console.log(email, password);
  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await signUpNewUser(email, password);
      if (result.success) {
        console.log("User signed up successfully:", result.user);
        navigate("/dashboard");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <form onSubmit={handleSignUp} className="max-w-md m-auto pt-24">
        <h2 className="font-bold pb-2">Sign up today!</h2>
        <p>
          Already have an account? <Link to="/signin">Sign in!</Link>
        </p>
        <div className="flex flex-col py-4">
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="p-3 mt-6"
            type="email"
          />
          <input
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 mt-6"
            type="password"
          />
          <button type="submit" className="mt-6 w-full">
            Sign up
          </button>
          {error && <p className="text-red-500">{error}</p>}
          {loading && <p className="text-blue-500">Loading...</p>}
        </div>
      </form>
    </div>
  );
};
export default Signup;
