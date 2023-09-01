"use client";

import axios from "axios";
import { ChangeEvent, useState } from "react";

type Props = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  }
}

export const UserDataForm = ( { user } : Props ) => {
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState('');
  const [error, setError] = useState("");

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    
    // const res = await fetch("/api/user", {
    //   method: "PUT",
    //   body: JSON.stringify({algo: 'formValues'}),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    const response = await axios.put('/api/user', {
      payload: {
        wallet: formValues
      }
    });

    setLoading(false);
    setFormValues("");

  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    console.log("change", value, formValues )
    setFormValues(value);
  };

  const input_style =
    "form-control block w-full px-4 py-5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none";

  return (
    <div className="p-4 border border-gray-400 rounded-md h-full">
      <form onSubmit={onSubmit}>
        {error && (
          <p className="text-center bg-red-300 py-4 mb-6 rounded">{error}</p>
        )}
        <div className="mb-6">
          
          <label>Nombre de usuario</label>
          <input
            required
            type="text"
            name="nombre"
            value={user?.name || ""}
            //onChange={handleChange}
            placeholder="nombre"
            className={`${input_style}`}
            disabled
          />
          
          <label>Email</label>
          <input
            required
            type="text"
            name="email"
            value={user?.email || ""}
            //onChange={handleChange}
            placeholder="email"
            className={`${input_style}`}
            disabled
          />
          
          <label>Wallet</label>
          <input
            required
            type="text"
            name="wallet"
            value={formValues}
            onChange={handleChange}
            placeholder="ETH wallet"
            className={`${input_style}`}
          />

        </div>

        <button
          type="submit"
          style={{ backgroundColor: `${loading ? "#ccc" : "#3446eb"}` }}
          className="inline-block px-7 py-4 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
          disabled={loading}
        >
          {loading ? "loading..." : "Guardar tu wallet"}
        </button>
      </form>
    </div>
  );
};
