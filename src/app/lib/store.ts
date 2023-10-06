import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import type { Funnel } from "@/app/lib/types"

const EMPTY_FUNNEL = {
    name: "",
    bgColor: "",
    pages: []
}

interface FunnelState {
    funnel: Funnel;
    setFunnel: (newFunnel: Funnel) => void;
    resetFunnel: () => void;
}

export const useFunnelStore = create<FunnelState>()(
    persist(
        (set) => ({
            funnel: EMPTY_FUNNEL,
            setFunnel: (newFunnel) => set({ funnel: newFunnel }),
            resetFunnel: () => set({ funnel: EMPTY_FUNNEL}),
        }),
        {
            name: 'funnel-storage', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
        }
    )
)