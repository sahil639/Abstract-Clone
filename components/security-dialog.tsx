"use client"

import { X } from "lucide-react"
import * as Dialog from "@radix-ui/react-dialog"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

const securityCards = [
  {
    title: "Passkey Login",
    description: "Password-free login using your device's built-in security.",
    action: "Enable",
  },
  {
    title: "2FA with an Authenticator App (Recommended)",
    description: "Secure your account with verification codes from an authenticator app.",
    action: "Enable",
  },
  {
    title: "2FA with a Passkey",
    description:
      "Secure your account with a passkey using a fingerprint, face recognition, or a security key. This can be used as an additional authentication method in addition to your authenticator app.",
    action: "Enable",
  },
  {
    title: "Export Signer Private Key",
    description: "Export the private key for your AGW wallet signer, and not the AGW wallet itself.",
    action: "Export",
  },
]

interface SecurityDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SecurityDialog({ open, onOpenChange }: SecurityDialogProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence mode="wait">
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-white/45 backdrop-blur-[54px] z-[9997]"
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <div className="fixed inset-0 flex items-center justify-center z-[9998] p-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="w-full max-w-[600px] rounded-[20px] bg-white p-6 shadow-lg focus:outline-none max-h-[90vh] overflow-y-auto"
                >
                  <div className="flex items-center justify-between mb-6">
                    <Dialog.Title className="text-2xl font-semibold">Security Settings</Dialog.Title>
                    <Dialog.Close asChild>
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <X className="h-4 w-4" />
                        <span className="sr-only">Close</span>
                      </Button>
                    </Dialog.Close>
                  </div>

                  <div className="space-y-4">
                    {securityCards.map((card, index) => (
                      <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.35 }}
                        className="p-6 rounded-lg bg-gray-50"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="space-y-1.5">
                            <h3 className="font-medium">{card.title}</h3>
                            <p className="text-sm text-gray-500">{card.description}</p>
                          </div>
                          <Button variant="outline" className="shrink-0">
                            {card.action}
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  )
}

