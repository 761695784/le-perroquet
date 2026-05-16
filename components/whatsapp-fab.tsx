"use client"

import { MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

export function WhatsAppFAB() {
  return (
    <motion.a
      href="https://wa.me/221781165353"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] rounded-full shadow-lg flex items-center justify-center transition-colors md:hidden"
      aria-label="Contacter via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </motion.a>
  )
}
