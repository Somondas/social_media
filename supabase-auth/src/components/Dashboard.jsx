import React from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { session, signOut } = UserAuth();

  const navigate = useNavigate();
  const handleLogout = () => {
    signOut();
    navigate("/sign-in");
  };
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-10">
        Welcome to the Dashboard
      </h1>
      <p className="text-center mt-4">
        This is a protected route, accessible only to authenticated users.
      </p>
      <p className="text-center mt-2">
        You can add more features here, like displaying user data or other
        dashboard functionalities.
      </p>

      <p className="text-red-300 text-center text-3xl mt-6">
        Your email ID: {session?.user?.email || "Not available"}
      </p>

      <button onClick={handleLogout} className="block mx-auto mt-6">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
