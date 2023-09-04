"use client";

import { UserDataForm } from "./UserDataForm";
import { FiscalRegisterForm } from "./FiscalRegisterForm";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";

type Props = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  }
}

export default function Profile( {user}:Props) {
  return (
    <Box bg="black" minH="100vh" p={20}>
      <VStack bg="white" maxW="56em" m="auto" p="24px" spacing="24px" borderRadius="12px">
        <HStack w="100%" justifyContent="space-between">
          <Text fontSize="3em">Pagina de usuario</Text>
          <img
                src={user?.image ? user.image : "/images/default.png"}
                className="max-h-36"
                alt={`profile photo of ${user?.name || "user"}`}
              />
        </HStack>
          {!user ? (
            <Text>Loading...</Text>
          ) : (
            <HStack spacing="24px" alignItems="stretch" w="100%" justifyContent="space-between">
              <UserDataForm user={user}/>
              <FiscalRegisterForm/>
            </HStack>
          )}
      </VStack>
    </Box>
  );
}
