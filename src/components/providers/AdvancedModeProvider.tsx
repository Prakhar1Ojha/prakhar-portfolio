"use client";

import { createContext, useContext, type ReactNode } from "react";
import { useAdvancedMode } from "@/hooks/useAdvancedMode";

type AdvancedModeContextType = ReturnType<typeof useAdvancedMode>;

const AdvancedModeContext = createContext<AdvancedModeContextType | null>(null);

export function AdvancedModeProvider({ children }: { children: ReactNode }) {
  const mode = useAdvancedMode();
  return (
    <AdvancedModeContext.Provider value={mode}>{children}</AdvancedModeContext.Provider>
  );
}

export function useAdvancedModeContext() {
  const ctx = useContext(AdvancedModeContext);
  if (!ctx) throw new Error("useAdvancedModeContext must be used within AdvancedModeProvider");
  return ctx;
}
