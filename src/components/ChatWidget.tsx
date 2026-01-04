"use client"

import * as React from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ChatWidget() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [message, setMessage] = React.useState("")
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Placeholder for chat functionality
        console.log("Message sent:", message)
        setMessage("")
    }

    // Prevent hydration mismatch by not rendering until mounted
    if (!mounted) {
        return null
    }

    return (
        <>
            {/* Chat Button - Fixed Position */}
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
                                <div className="flex items-center gap-3">
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

                        {/* Messages Area */}
                        <div className="p-6 space-y-4 bg-slate-900/50 backdrop-blur-xl min-h-[300px] max-h-[400px] overflow-y-auto">
                            <div className="flex gap-3">
                                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                    <MessageCircle className="h-4 w-4 text-primary" aria-hidden="true" />
                                </div>
                                <div className="glass border-white/10 p-4 rounded-2xl rounded-tl-none max-w-[80%]">
                                    <p className="text-sm text-slate-200">
                                        Hi! 👋 Welcome to Design Academy. How can we help you today?
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3 flex-wrap">
                                <button className="glass border-white/10 px-4 py-2 rounded-xl text-sm text-slate-300 hover:bg-white/5 transition-colors">
                                    Course Information
                                </button>
                                <button className="glass border-white/10 px-4 py-2 rounded-xl text-sm text-slate-300 hover:bg-white/5 transition-colors">
                                    Admissions Process
                                </button>
                                <button className="glass border-white/10 px-4 py-2 rounded-xl text-sm text-slate-300 hover:bg-white/5 transition-colors">
                                    Pricing & Financial Aid
                                </button>
                            </div>
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSubmit} className="p-6 bg-slate-900/80 backdrop-blur-xl border-t border-white/5">
                            <div className="flex gap-3">
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
                            <p className="text-xs text-slate-500 mt-3 text-center">
                                Typically replies within a few minutes
                            </p>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}
