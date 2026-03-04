

import { ThemeProvider } from './theme-provider';
// import InitPersistentId from './InitPersistentId.client'
// import PersistTokenAuth from './PersistTokenAuth'
import { GoogleOAuthProvider } from "@react-oauth/google";
// import { AuthProvider } from "@/context/AuthContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"      // aplica clase "dark" al <html>
      enableSystem           // habilita detectar el tema del sistema
      storageKey="theme"
      disableTransitionOnChange>


      {/* <InitPersistentId sendToServerOnInit={false} /> */}
      {/* <PersistTokenAuth /> */}
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>

     
          {children}

      </GoogleOAuthProvider>

    </ThemeProvider>
  );
}
