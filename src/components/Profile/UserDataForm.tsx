"use client";

import { Button, Input, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { useQuery } from "react-query";

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
  const query = useQuery('todos', ()=>"hola")


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

  return (
    <VStack border="1px gray solid" flexGrow="1" alignItems="start" p="12px" borderRadius="6px" >
      <Text alignSelf="start">Numero de mesa</Text>
      <Input 
        required
        type="text"
        name="nombre"
        value={user?.name || ""}
        //onChange={handleChange}
        placeholder="nombre"
        disabled
      />
      <Text alignSelf="start">Email</Text>
      <Input 
        required
        type="text"
        name="email"
        value={user?.email || ""}
        //onChange={handleChange}
        placeholder="email"
        disabled
      />
      <Text alignSelf="start">Wallet</Text>
      <Input 
        required
        type="text"
        name="wallet"
        value={formValues}
        onChange={handleChange}
        placeholder="wallet"
      />
      <Button w="100%" bg="blue.200" >Guardar tu wallet</Button>
    </VStack>
  );
};
