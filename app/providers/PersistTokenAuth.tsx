'use client';

import React, { useEffect, useState } from 'react';
// import { getAuthToken } from "@/lib/authPersistence";
import { useRouter } from "next/navigation";

export default function PersistTokenAuth({ sendToServerOnInit = false }: { sendToServerOnInit?: boolean }) {
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const token = await getAuthToken();
      if (!token) {
        return
      }
    })();
  }, []);

  return null;
}