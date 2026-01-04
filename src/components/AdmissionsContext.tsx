"use client"

import * as React from "react"

type AdmissionsContextType = {
    isOpen: boolean
    openModal: () => void
    closeModal: () => void
}

const AdmissionsContext = React.createContext<AdmissionsContextType | undefined>(undefined)

export function AdmissionsProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = React.useState(false)

    const openModal = React.useCallback(() => {
        setIsOpen(true)
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden'
    }, [])

    const closeModal = React.useCallback(() => {
        setIsOpen(false)
        // Restore body scroll
        document.body.style.overflow = 'unset'
    }, [])

    return (
        <AdmissionsContext.Provider value={{ isOpen, openModal, closeModal }}>
            {children}
        </AdmissionsContext.Provider>
    )
}

export function useAdmissions() {
    const context = React.useContext(AdmissionsContext)
    if (!context) {
        throw new Error("useAdmissions must be used within AdmissionsProvider")
    }
    return context
}
