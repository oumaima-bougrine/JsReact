import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware';

export const useTalkStore = create(
  persist(
  (set) => ({
  talks: [],
  talkToEdit: null,
  addTalk: (talk) =>
    set((state) => ({
      talks: [...state.talks, { ...talk, id: Date.now(), completed: false }],
    })),
  removeTalk: (id) =>
    set((state) => ({
      talks: state.talks.filter((t) => t.id !== id),
    })),
  setTalkToEdit: (talk) => set({ talkToEdit: talk }),
  updateTalk: (updatedTalk) =>
    set((state) => ({
      talks: state.talks.map((talk) =>
        talk.id === updatedTalk.id ? updatedTalk : talk
      ),
      talkToEdit: null,
    })),
  toggleComplete: (id) =>
    set((state) => ({
      talks: state.talks.map((talk) =>
        talk.id === id ? { ...talk, completed: !talk.completed } : talk
      ),
    })),
    name: 'talk-storage',
    storage: createJSONStorage(() => sessionStorage),
})));

