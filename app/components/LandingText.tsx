import React from 'react'
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const LandingText = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
    {/* Animated Logo Text */}
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-6xl font-extrabold text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
    >
      Rizze ✨  
    </motion.h1>

    
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="mt-4  text-lg text-gray-700 dark:text-gray-300 text-center max-w-xl"
    >
      Stay consistent, stay ahead. Be the Real Rizzler 💪  
    </motion.p>

    {/* Call-to-Action */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="mt-6"
    >
      <Button className="px-6 py-5 text-lg font-semibold">Start Grinding 🚀</Button>
    </motion.div>

    
  </div>
  )
}

export default LandingText