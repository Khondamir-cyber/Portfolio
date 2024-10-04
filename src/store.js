import { create } from "zustand";

export const useStore = create((set) => ({
  variable: {
    bgFluid: null,
    active: false
  },
  getBg: (item) => {
    set(state => ({
      variable: {
        ...state.variable,
        bgFluid: item
      }
    }))
  },
  hoverBgActive: () => {
    set(state => ({
      variable: {
        ...state.variable,
        active: true
      }
    }))
  },
  hoverBgInactive: () => {
    set(state => ({
      variable: {
        ...state.variable,
        active: false
      }
    }))
  }
}))