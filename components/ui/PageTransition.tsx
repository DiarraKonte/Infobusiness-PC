'use client';

import { motion } from 'framer-motion';
import React from 'react';

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;