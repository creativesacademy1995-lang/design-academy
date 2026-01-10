"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { useAdmissions } from "@/components/AdmissionsContext"

export default function JoinNowClient({ courseName }: { courseName?: string | null }) {
  const { openModal } = useAdmissions()

  return (
    <Button
      type="button"
      variant="gradient"
      className="rounded-xl px-8 h-12 shadow-glow-primary"
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        e.stopPropagation()
        try {
          ;(e.nativeEvent as Event).stopImmediatePropagation()
        } catch {}
        void openModal(courseName ?? null)
      }}
    >
      Join Now
    </Button>
  )
}
