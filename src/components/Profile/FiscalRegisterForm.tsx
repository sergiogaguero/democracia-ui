"use client";

import { Button, HStack, Input, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import { ChangeEvent, useState } from "react";

type Props = {
  
}

export const FiscalRegisterForm = ( {} : Props ) => {
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
    // const response = await axios.put('/api/user', {
    //   payload: {
    //     wallet: formValues
    //   }
    // });

    // setLoading(false);
    // setFormValues("");

  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    console.log("change", value, formValues )
    setFormValues(value);
  };

  const input_style =
    "form-control block w-full px-4 py-5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none";

  return (
    <VStack border="1px gray solid"  flexGrow="1" alignItems="start" p="12px" borderRadius="6px" >
      <Text alignSelf="start">Numero de mesa</Text>
      <Input/>
      <Text>Foto poder del fiscal</Text>
      <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div className="flex flex-col items-center justify-center py-2">
          <svg className="w-8 h-8 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">Toca para subir tu<span className="font-semibold"> poder</span></p>
          <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
      </label>
      <Text>Selfie en la mesa</Text>
      <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div className="flex flex-col items-center justify-center py-2">
          <svg className="w-8 h-8 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">Toca para subir tu<span className="font-semibold"> poder</span></p>
          <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
      </label>
      <Button w="100%" bg="blue.200" >Guardar</Button>
    </VStack>
  );
};
