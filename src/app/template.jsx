"use client"
import { motion } from "framer-motion"

// fade in
export default function Template({ children }) {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 1 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}>
      {children}
    </motion.div>
  );
}