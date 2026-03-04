// 'use client';

// import React, { useEffect, useState } from 'react';
// // import { getAuthToken } from "@/lib/authPersistence";
// import { useRouter } from "next/navigation";

// export default function PersistTokenAuth({ sendToServerOnInit = false }: { sendToServerOnInit?: boolean }) {
//   const router = useRouter();

//   useEffect(() => {
//     (async () => {
//       const token = await getAuthToken();
//       if (!token) {
//         return
//       }
//     })();
//   }, []);

//   return null;
// }
export default function PersistTokenAuth() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
    PersistTokenAuth
      </main>
    </div>
  );
}
