"use client";

import { ReactNode, useEffect } from "react";
import ThemeProvider from "@/components/theme-provier";
import { AuthProvider } from "@/components/auth-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "@/hooks/use-session";
import { uuid, uuidv4 } from "@/lib/utils";
import { MetaScreen } from "@/components/meta-screen/meta-screen";

const client = new QueryClient();

export default function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (!localStorage.getItem("clientId")) {
      localStorage.setItem("clientId", uuidv4());
    }

    sessionStorage.setItem("sessionId", uuid());
  }, []);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <QueryClientProvider client={client}>
        <AuthProvider>
          <SessionProvider>
            <MetaScreen />
            {children}
          </SessionProvider>
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
