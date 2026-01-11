"use client"

import * as React from "react"

type AdmissionsContextType = {
  isOpen: boolean
  selectedCourse?: string | null
  openModal: (course?: string | null) => void
  closeModal: () => void
}

const AdmissionsContext = React.createContext<AdmissionsContextType | undefined>(undefined)

export function AdmissionsProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [selectedCourse, setSelectedCourse] = React.useState<string | null>(null)

  // ✅ store previous body overflow so we can restore it properly
  const prevOverflowRef = React.useRef<string | null>(null)

  const lockScroll = React.useCallback(() => {
    if (typeof document === "undefined") return
    if (prevOverflowRef.current === null) {
      prevOverflowRef.current = document.body.style.overflow || ""
    }
    document.body.style.overflow = "hidden"
  }, [])

  const unlockScroll = React.useCallback(() => {
    if (typeof document === "undefined") return
    document.body.style.overflow = prevOverflowRef.current ?? ""
    prevOverflowRef.current = null
  }, [])

  const openModal = React.useCallback(
    (course?: string | null) => {
      setSelectedCourse(course ?? null)
      setIsOpen(true)
      lockScroll()
    },
    [lockScroll]
  )

  const closeModal = React.useCallback(() => {
    setIsOpen(false)
    setSelectedCourse(null)
    unlockScroll()
  }, [unlockScroll])

  // ✅ safety: if provider unmounts while modal open, restore scroll
  React.useEffect(() => {
    return () => {
      unlockScroll()
    }
  }, [unlockScroll])

  return (
    <AdmissionsContext.Provider value={{ isOpen, selectedCourse, openModal, closeModal }}>
      {children}
    </AdmissionsContext.Provider>
  )
}

export function useAdmissions() {
  const context = React.useContext(AdmissionsContext)
  if (!context) throw new Error("useAdmissions must be used within AdmissionsProvider")
  return context
}
