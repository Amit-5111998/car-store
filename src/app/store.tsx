import { create } from 'zustand'

export const useCarStore = create((set) => ({
    data: {},
    fetch: async (item:any) => {
      const response = await fetch("https://6ca13a92-b734-44be-a3de-9e047346479a.mock.pstmn.io/applicant")
      set({ data: await response.json() })
    },
  }))
