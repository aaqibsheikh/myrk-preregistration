import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import { Toaster } from "../components/ui/toaster"
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <Component {...pageProps} />
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  )
}