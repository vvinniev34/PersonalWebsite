"use client"
import { motion } from "framer-motion"

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
}

// swipe
// export default function Template({ children }) {
//   return (
//     <motion.main
//       variants={variants}
//       initial="hidden"
//       animate="enter"
//       transition={{ type: "linear" }}
//     >
//       {children}
//     </motion.main>
//   )
// }

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