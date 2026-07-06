import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function ChangePassword() {

  const [oldPassword,setOldPassword] =
    useState("");

  const [newPassword,setNewPassword] =
    useState("");

  
    const user = JSON.parse(localStorage.getItem("user"));




  const submitHandler = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:4000/api/user/change-password",
        {
          userId:user._id,
          oldPassword,
          newPassword
        }
      );

      if(response.data.success){
        toast.success(response.data.message);
      }
      else{
        toast.error(response.data.message);
      }

    } catch(error){
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="max-w-md mx-auto mt-10 flex flex-col gap-4"
    >

      <h1 className="text-2xl font-semibold">
        Change Password
      </h1>

      <input
        type="password"
        placeholder="Old Password"
        value={oldPassword}
        onChange={(e)=>
          setOldPassword(e.target.value)
        }
        className="border p-2"
      />

      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e)=>
          setNewPassword(e.target.value)
        }
        className="border p-2"
      />

      <button className="bg-black text-white py-2">
        Update Password
      </button>

    </form>
  );
}

export default ChangePassword;