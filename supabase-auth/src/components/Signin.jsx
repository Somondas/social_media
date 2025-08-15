import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const navigate = useNavigate();

  const { session, signInUser } = UserAuth();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await signInUser(email, password);
      if (result.success) {
        console.log("User signed up successfully:", result.user);
        navigate("/dashboard");
      }
    } catch (error) {
      setError(error.message);
      alert("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSignIn} className="max-w-md m-auto pt-24">
        <h2 className="font-bold pb-2">Sign up today!</h2>
        <p>
          Don't have an account? <Link to="/sign-up">Sign Up!</Link>
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
          {error && <p className="text-red-500">Bad Login</p>}
          {loading && <p className="text-blue-500">Loading...</p>}
        </div>
      </form>
    </div>
  );
};

export default Signin;
