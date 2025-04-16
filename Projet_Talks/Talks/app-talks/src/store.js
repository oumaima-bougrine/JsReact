import { create } from 'zustand';

export const useTalkStore = create((set) => ({
  talks: [],
  addTalk: (talk) =>
    set((state) => ({
      talks: [...state.talks, talk],
    })),
}));