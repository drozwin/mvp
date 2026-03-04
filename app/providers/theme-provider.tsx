// "use client";

// import * as React from "react";
// import { ThemeProvider as NextThemesProvider } from "next-themes";
//  import { useEffect } from "react";

// export function ThemeProvider({
//   children,
//   ...props
// }: React.ComponentProps<typeof NextThemesProvider>) {
//   const [initialTheme, setInitialTheme] = React.useState<string | undefined>(undefined);

 

//   useEffect(() => {
//     try {
//       const savedTheme = localStorage.getItem("theme");

//       if (savedTheme === "system" || savedTheme === null) {
//         const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
//         localStorage.setItem("theme", prefersDark ? "dark" : "light");
//       }
//       // Si savedTheme es "dark" o "light", no hacemos nada.
//     } catch (e) {
//       console.error("Error manejando el theme en localStorage", e);
//     }
//   }, []);


//   return (
//     <NextThemesProvider
//       {...props}
//       defaultTheme={initialTheme}
//       attribute="class"
//       disableTransitionOnChange
//       enableSystem={false} // importante: no usar system porque no queremos ese valor en localStorage
//     >
//       {children}
//     </NextThemesProvider>
//   );
// }
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}