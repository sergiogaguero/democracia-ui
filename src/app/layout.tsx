"use client"

import customTheme from "@/theme/theme";
import "./globals.css";
import { NextAuthProvider } from "./providers";
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

export const metadata = {
  title: "Democracia 3.0",
  description: "Garantizando la libertad y transparencia en las elecciones.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider theme={customTheme}>
          <QueryClientProvider client={queryClient}>
            <NextAuthProvider>{children}</NextAuthProvider>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
