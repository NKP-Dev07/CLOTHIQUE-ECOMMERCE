

import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

function Profile() {

 
  const {
      setShowSearch,
      getCartCount,
      navigate,
      token,
      setToken,
      setCartItems,
    } = useContext(ShopContext);

  const user =
    JSON.parse(localStorage.getItem("user"));

 const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
      localStorage.removeItem('user');
    setToken("");
    setCartItems({});
  };

  return (
    <div className="border-t pt-10 min-h-[80vh]">

      {/* Header */}
      <div className="flex items-center gap-5 mb-10">

        <div className="w-20 h-20 rounded-full bg-black text-white flex items-center justify-center text-3xl font-bold">
          {user?.name?.charAt(0).toUpperCase()}
        </div>

        <div>
          <h1 className="text-3xl font-semibold">
            {user?.name}
          </h1>

          <p className="text-gray-500">
            {user?.email}
          </p>
        </div>

      </div>

      {/* Dashboard Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Personal Info */}

        <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">

          <h2 className="font-semibold text-lg mb-4">
            Personal Information
          </h2>

          <div className="space-y-2">
            <p>
              <span className="font-medium">
                Name:
              </span>{" "}
              {user?.name}
            </p>

            <p>
              <span className="font-medium">
                Email:
              </span>{" "}
              {user?.email}
            </p>
          </div>

        </div>

        {/* Orders */}

        <div
          onClick={() => navigate("/orders")}
          className="border rounded-xl p-6 shadow-sm hover:shadow-md transition cursor-pointer"
        >

          <h2 className="font-semibold text-lg mb-4">
            My Orders
          </h2>

          <p className="text-gray-600">
            Track, view and manage orders.
          </p>

          <button className="mt-4 border px-4 py-2">
            View Orders
          </button>

        </div>

        

        {/* Security */}

        <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">

          <h2 className="font-semibold text-lg mb-4">
            Security
          </h2>

          <p className="text-gray-600">
            Manage account security.
          </p>

          <button  onClick={() =>
    navigate("/change-password")
  } className="mt-4 border px-4 py-2">
            Change Password
          </button>

        </div>

        

        {/* Logout */}

        <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">

          <h2 className="font-semibold text-lg mb-4">
            Account
          </h2>

          <p className="text-gray-600 mb-4">
            Sign out from your account.
          </p>

          <button
            onClick={logout}
            className="bg-red-500 text-white px-5 py-2 rounded"
          >
            Logout
          </button>

        </div>

      </div>

    </div>
  );
}

export default Profile;