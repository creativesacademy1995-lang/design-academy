"use client"

import * as React from "react"
import { AdmissionsModal } from "./AdmissionsModal"

export default function AdmissionsModalClient() {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  return <AdmissionsModal />
}
