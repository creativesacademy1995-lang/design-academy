"use client"

import * as React from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAdmissions } from "./AdmissionsContext"

type ChatMsg = {
  id: string
  role: "bot" | "user"
  text: string
}

type QuickReply = {
  id: number
  key: string
  title: string
  reply: string
  is_active: boolean
  order: number | null
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [message, setMessage] = React.useState("")
  const [mounted, setMounted] = React.useState(false)

  const { openModal } = useAdmissions()

  const [messages, setMessages] = React.useState<ChatMsg[]>([
    {
      id: "welcome",
      role: "bot",
      text: "Hi! Welcome to Design Academy. How can we help you today?",
    },
  ])

  const [quickReplies, setQuickReplies] = React.useState<QuickReply[]>([])
  const [loadingReplies, setLoadingReplies] = React.useState(false)

  const [showMenu, setShowMenu] = React.useState(true)

  const messagesEndRef = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => setMounted(true), [])

  // auto scroll
  React.useEffect(() => {
    if (!isOpen) return
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [isOpen, messages, showMenu])

  // Reset menu when chat opens
  React.useEffect(() => {
    if (isOpen) setShowMenu(true)
  }, [isOpen])

  // Load quick replies (first time)
  React.useEffect(() => {
    if (!isOpen) return
    if (quickReplies.length > 0) return

    const loadReplies = async () => {
      setLoadingReplies(true)
      try {
        const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"
        const res = await fetch(`${baseUrl}/api/chat-auto-replies`, {
          headers: { "Content-Type": "application/json" },
          cache: "no-store",
        })

        if (!res.ok) {
          const text = await res.text().catch(() => "")
          throw new Error(text || `Failed: ${res.status}`)
        }

        const json = await res.json()

        const items: QuickReply[] = (json?.data || [])
          .filter((x: any) => x?.is_active === true)
          .sort((a: any, b: any) => (a?.order ?? 0) - (b?.order ?? 0))

        setQuickReplies(items)
      } catch {
        setQuickReplies([])
      } finally {
        setLoadingReplies(false)
      }
    }

    loadReplies()
  }, [isOpen, quickReplies.length])

  const addBot = (text: string) => {
    setMessages((prev) => [...prev, { id: `${Date.now()}-bot`, role: "bot", text }])
  }

  const addUser = (text: string) => {
    setMessages((prev) => [...prev, { id: `${Date.now()}-user`, role: "user", text }])
  }

  // ✅ OPEN ADMISSIONS MODAL
  const handleApplyNow = (course?: string | null) => {
    // optional small confirmation message (looks natural)
    addBot("Sure — opening the application form.")
    openModal(course ?? null)
  }

  const handleQuickReply = (item: QuickReply) => {
    addUser(item.title)
    setShowMenu(false)

    setTimeout(() => {
      addBot(item.reply)
    }, 200)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const text = message.trim()
    if (!text) return

    addUser(text)
    setMessage("")
    setShowMenu(true)

    setTimeout(() => {
      addBot("Thanks! Please choose an option from the menu below, or click Apply Now.")
    }, 250)
  }

  if (!mounted) return null

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 h-16 w-16 rounded-full bg-main-gradient shadow-glow-primary hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        aria-label={isOpen ? "Close chat" : "Open chat"}
        aria-expanded={isOpen}
        aria-controls="chat-widget-panel"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" aria-hidden="true" />
        ) : (
          <MessageCircle className="h-6 w-6 text-white group-hover:animate-bounce" aria-hidden="true" />
        )}
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div
          id="chat-widget-panel"
          role="dialog"
          aria-label="Chat with us"
          className="fixed bottom-28 right-8 z-50 w-[90vw] max-w-md animate-fade-in-up"
        >
          <div className="glass border-white/10 rounded-[2rem] shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-main-gradient p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Design Academy</h3>
                    <p className="text-xs text-white/80">We&apos;re here to help!</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label="Close chat"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="p-6 space-y-4 bg-slate-900/50 backdrop-blur-xl min-h-[300px] max-h-[400px] overflow-y-auto">
              {messages.map((m) => {
                const isBot = m.role === "bot"


                return (
                  <div key={m.id} className={`flex gap-4 ${m.role === "user" ? "justify-end" : ""}`}>
                    {isBot ? (
                      <>
                        <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                          <MessageCircle className="h-4 w-4 text-primary" aria-hidden="true" />
                        </div>

                        <div className="max-w-[80%]">
                          <div className="glass border-white/10 p-4 rounded-2xl rounded-tl-none">
                            <p className="text-sm text-slate-200 whitespace-pre-line">{m.text}</p>
                          </div>


                        </div>
                      </>
                    ) : (
                      <div className="glass border-white/10 p-4 rounded-2xl rounded-tr-none max-w-[80%]">
                        <p className="text-sm text-slate-100 whitespace-pre-line">{m.text}</p>
                      </div>
                    )}
                  </div>
                )
              })}

              {/* ✅ MENU + APPLY NOW (always visible area) */}
              <div className="pt-2 space-y-4">
                {showMenu ? (
                  <div className="flex gap-2 flex-wrap">
                    {loadingReplies ? (
                      <div className="text-slate-400 text-sm">Loading...</div>
                    ) : quickReplies.length > 0 ? (
                      quickReplies.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => handleQuickReply(item)}
                          className="glass border-white/10 px-4 py-2 rounded-xl text-sm text-slate-300 hover:bg-white/5 transition-colors"
                        >
                          {item.title}
                        </button>
                      ))
                    ) : (
                      <div className="text-slate-400 text-sm">No quick replies found.</div>
                    )}
                  </div>
                ) : (
                  <div className="flex justify-center">
                    <button
                      type="button"
                      onClick={() => setShowMenu(true)}
                      className="glass border-white/10 px-4 py-2 rounded-xl text-sm text-slate-300 hover:bg-white/5 transition-colors"
                    >
                      Back to menu
                    </button>
                  </div>
                )}

                {/* ✅ Apply Now always available */}
                <div className="flex justify-center">
                  <Button variant="gradient" className="h-10 rounded-xl" onClick={() => handleApplyNow(null)}>
                    Apply Now
                  </Button>
                </div>
              </div>

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-6 bg-slate-900/80 backdrop-blur-xl border-t border-white/5">
              <div className="flex gap-4">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-white/5 border-white/10 rounded-xl h-12 focus:ring-primary"
                  aria-label="Chat message"
                />
                <Button
                  type="submit"
                  size="icon"
                  variant="gradient"
                  className="h-12 w-12 rounded-xl shadow-glow-primary"
                  aria-label="Send message"
                >
                  <Send className="h-5 w-5" aria-hidden="true" />
                </Button>
              </div>
              <p className="text-xs text-slate-500 mt-4 text-center">Typically replies within a few minutes</p>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
