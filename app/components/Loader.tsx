"use client"
import React from 'react'
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-red-900">

      </div>

    </div>
  )
}

export function AuthLoader() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center text-gray-600">
      <Loader2 className="h-10 w-10 animate-spin mb-3" />
      <p className="text-sm font-medium">Verificando tu sesión...</p>
    </div>
  );
}

export function AuthLoaderAnimate() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // no render antes de montar en cliente
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-zinc-800 dark:to-zinc-950 text-gray-600">
      {/* 🌟 Logo animado */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Image
          src="/logo.svg"
          alt="Logo"
          width={80}
          height={80}
          className="drop-shadow-md"
          priority
        />
      </motion.div>

      {/* 💫 Texto animado */}
      <motion.p
        className="mt-5 text-sm font-medium tracking-wide text-gray-600"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Verificando tu sesión...
      </motion.p>

      {/* 🔁 Línea animada inferior */}
      <motion.div
        className="mt-6 h-[3px] w-40  rounded-full overflow-hidden"
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="h-full bg-blue-500"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 1.2,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
}