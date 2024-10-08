"use client";

import axios from "axios";
import { FormEvent, useState } from "react";

export default function Signupcom() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async ( e :FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/signup", {
        email,
        password,
      });
      setEmail("");
      setPassword("");
      console.log(response.data); // Log the response data
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="w-full max-w-xs">
          <div className="text-xl p-2 text-black text-center font-semibold">
            Signin
          </div>
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
              id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="enter the email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
  <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
    Password
  </label>
  <input
    id="password" 
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
    type="password"
    placeholder="Enter your password"
    value={password} 
    onChange={(e) => setPassword(e.target.value)}
  />
</div>

            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
